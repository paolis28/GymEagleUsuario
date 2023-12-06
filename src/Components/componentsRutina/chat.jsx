import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import axios from 'axios'
import './chat.css';
//Conexión para escuchar y enviar eventos
const socket = io('http://localhost:4000')

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [storedMessages, setStoredMessages] = useState([]);
  const [firstTime, setFirstTime] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [isCircular, setIsCircular] = useState(true);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
      if (!document.hidden && chatVisible) {
        // Restablecer el contador solo si la página se vuelve visible y el chat está visible
        setNewMessageCount(0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [chatVisible]);

  const url = "http://localhost:4000/api/";

  useEffect(() => {
    const receivedMessage = (message) => {
      setMessages([message, ...messages]);
      if (!isPageVisible && chatVisible) {
        setNewMessageCount(prevCount => prevCount + 1);
      }
    };

    socket.on('message', receivedMessage);
    socket.on('newMessage', handleNewMessageNotification);

    return () => {
      socket.off('message', receivedMessage);
      socket.off('newMessage', handleNewMessageNotification);
    };
  }, [messages, newMessageCount, isPageVisible, chatVisible]);

  if (!firstTime) {
    axios.get(url + "messages").then(res => {
      setStoredMessages(res.data.messages);
    });
    setFirstTime(true);
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (nickname !== '') {
      socket.emit('message', message, nickname);

      const newMessage = {
        body: message,
        from: 'Yo'
      };

      setMessages([newMessage, ...messages]);
      setMessage('');

      setNewMessageCount(newMessageCount );
      setNewMessageCount(newMessageCount + 1);
    

      axios.post(url + 'save', {
        message: message,
        from: nickname
      });
    } else {
      alert('Para enviar mensajes debes establecer un nickname!!!');
    }
  };

  const resetNotification = () => {
    setNewMessageCount(0);
  };

  const handleNewMessageNotification = (count) => {
    setNewMessageCount(count);
    if (!isPageVisible && chatVisible) {
      setNewMessageCount(count);
    }
  };

  const nicknameSubmit = (e) => {
    e.preventDefault();
    setNickname(nickname);
    setDisabled(true);
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    setIsCircular(!chatVisible);

    if (!chatVisible && newMessageCount > 0) {
      resetNotification();
    }
  };

 
  return (
    <div className={`chat-container ${chatVisible ? 'visible' : 'hidden'} ${isCircular ? 'circular' : 'rectangular'}`}>
    <div className="chat-header" onClick={toggleChat}>
        Chat {newMessageCount > 0 && <span className="badge bg-danger">{newMessageCount}</span>}
      </div>
       <div className="chat-content mt-3">

<div className="card  border-0">
<div className="card-body">
  

  {/* nickname */}

  <form className="recuadroIngresar bottom-form" onSubmit={nicknameSubmit}>
    <div className="d-flex mb-3">
      <input type="text" className="form-control" id="nickname" placeholder="Nombre..." disabled={disabled} onChange={e => setNickname(e.target.value)} value={nickname} required/>
      <button className="btn btn-success mx-3" type="submit" id="btn-nickname" disabled={disabled}>Establecer</button>
    </div>
  </form>

  {/* chat form */}

  <form className="bottom-form" onSubmit={handlerSubmit}>
    <div className="d-flex">
      <input type="text" className="form-control" placeholder="Mensaje..." onChange={e => setMessage(e.target.value)} value={message}/>
      <button className="btn btn-success mx-3" type="submit">Enviar</button>
    </div>
  </form> 
</div>
</div>

{/* chat messages */}

<div className="card mt-3 mb-3  border-0" id="content-chat">
<div className="card-body chat-messages">

  {messages.map((message, index) => (
    <div key={index} className={`d-flex p-3 ${message.from === "Yo" ? "justify-content-end" : "justify-content-start"}`}>
      <div className={`card mb-3  border-1 ${message.from === "Yo" ? "bg-success bg-opacity-25" : "bg-light"}`}>
        <div className="card-body">
          <small className="">{message.from}: {message.body}</small>
        </div>
      </div>
    </div>

  ))}

 {/* chat stored messages */}
 <small className="text-center text-muted">... Mensajes guardados ...</small>
  {storedMessages.map((message, index) => (
    <div key={index} className={`d-flex p-3 ${message.from === nickname ? "justify-content-end" : "justify-content-start"}`}>
      <div className={`card mb-3 shadow border-1 ${message.from === nickname ? "bg-success bg-opacity-25" : "bg-light"}`}>
        <div className="card-body">
          <small className="text-muted">{message.from}: {message.message}</small>
        </div>
      </div>
    </div>

  ))}
 

</div>
</div>
</div>
    </div>
  );
};

export default Chat;
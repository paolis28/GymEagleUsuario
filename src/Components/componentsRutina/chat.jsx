import React,{useState,useEffect} from "react";
import io from 'socket.io-client'
import axios from 'axios'
import './chat.css';
//Conexión para escuchar y enviar eventos
const socket = io('http://localhost:4000')

const Chat = () => {
  const [nickname, setNickname] = useState('')
  const [disabled, setDisabled] = useState(false)

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [storedMessages, setStoredMessages] = useState([])
  const [firstTime, setfirstTime] = useState(false)

  const [chatVisible, setChatVisible] = useState(false);
  const [isCircular, setIsCircular] = useState(true);

  const url = "http://localhost:4000/api/"

  useEffect(() =>{
    const receivedMessage = (message) =>{
      //console.log(message)
      setMessages([message, ...messages])
    
    }
    socket.on('message', receivedMessage)

    //Desuscribimos el estado del componente cuando ya no es necesario utilizarlo
    return () => {
      socket.off('message', receivedMessage)
    }
    

  }, [messages])

  //Cargamos los mensajes guardados en la BDD la primera vez
  if(!firstTime){
    axios.get(url + "messages").then(res => {
      setStoredMessages(res.data.messages);
    })
    setfirstTime(true)
  }
  

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault()

    //Enviamos el mensaje sólo si se ha establecido un nickname
    if(nickname !== ''){
      //console.log(message)
      //Enviamos el mensaje al servidor
      socket.emit('message', message, nickname)

      //Nuestro mensaje
      const newMessage = {
        body: message,
        from: 'Yo'
      }
      //Añadimos el mensaje y el resto de mensajes enviados
      setMessages([newMessage, ...messages])
      //Limpiamos el mensaje
      setMessage('')

      //Petición http por POST para guardar el artículo:
      axios.post(url + 'save', {
        message: message,
        from: nickname
      })

    }else{
      alert('Para enviar mensajes debes establecer un nickname!!!')
    }
    
  }

  const nicknameSubmit = (e) => {
    e.preventDefault()
    setNickname(nickname)
    //console.log(nickname)
    setDisabled(true)
  }

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    setIsCircular(!chatVisible);
  };

  return (
    <div className={`chat-container ${chatVisible ? 'visible' : 'hidden'} ${isCircular ? 'circular' : 'rectangular'}`}>
     <div className="chat-header" onClick={toggleChat}>
        Chat
      </div>
       <div className="chat-content mt-3">

<div className="card  border-0">
<div className="card-body">
  
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

  {/* nickname */}

  <form className="recuadroIngresar bottom-form" onSubmit={nicknameSubmit}>
    <div className="d-flex mb-3">
      <input type="text" className="form-control" id="nickname" placeholder="Nickname..." disabled={disabled} onChange={e => setNickname(e.target.value)} value={nickname} required/>
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

<div className="card mt-3 mb-3 shadow border-0" id="content-chat">
<div className="card-body">

  {messages.map((message, index) => (
    <div key={index} className={`d-flex p-3 ${message.from === "Yo" ? "justify-content-end" : "justify-content-start"}`}>
      <div className={`card mb-3 shadow border-1 ${message.from === "Yo" ? "bg-success bg-opacity-25" : "bg-light"}`}>
        <div className="card-body">
          <small className="">{message.from}: {message.body}</small>
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

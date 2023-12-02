import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './chat.css';

const Chat = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [chatVisible, setChatVisible] = useState(false);
    const [isCircular, setIsCircular] = useState(true);

    // useEffect(() => {
    //     socket.on('message', (newMessage) => {
    //       setMessages((prevMessages) => [...prevMessages, newMessage]);
    //     });
    
    //     return () => {
    //       socket.off('message');
    //     };
    //   }, [socket]);
    
      const sendMessage = () => {
        if (!isCircular) {
          const newMessage = {
            id: uuidv4(),
            text: message,
          };
    
          socket.emit('sendMessage', newMessage);
          setMessages([...messages, newMessage]);
          setMessage('');
        }
      };
    
      const toggleChat = () => {
        setChatVisible(!chatVisible);
        setIsCircular(!chatVisible);
      };
  return (
    <div className={`chat-container ${chatVisible ? 'visible' : 'hidden'} ${isCircular ? 'circular' : 'rectangular'}`}>
      <div className="chat-header" onClick={toggleChat}>
        Chat
      </div>
      <div className="chat-content">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id}>{msg.text}</div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input"
          placeholder="Escribenos un mensaje..."
        />
        <button  className="chat-button">
        {/* <button onClick={sendMessage} className="chat-button"> */}
          enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;

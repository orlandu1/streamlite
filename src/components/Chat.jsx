import React, { useState } from 'react';
import './../styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Reflexões Contemporâneas', text: 'Lorem ipsum dolor sit amet. Id dolorum vero et esse tempore eos voluptates quas et aliquam sapiente ab expedita veniam non blanditiis aliquam hic doloremque cupiditate. Non dolores voluptatum quo nisi enim sed quis similique eum enim dolorum.!' },
    { user: 'O Polígrafo', text: 'Vel asperiores voluptatum ut omnis beatae ut harum soluta 33 tempore sint aut laudantium maxime in beatae asperiores id commodi eveniet! Ut sequi rerum non sunt nisi est fuga dolor in quasi a' },
    { user: 'Orlando', text: 'Vel asperiores voluptatum ut omnis beatae ut harum soluta 33 tempore sint aut laudantium maxime in beatae asperiores id commodi eveniet! Ut sequi rerum non sunt nisi est fuga dolor in quasi a' },

  ]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-icon">
              {/* Substitua com a imagem real do avatar do usuário */}
              <img src="https://via.placeholder.com/40" alt="User" />
            </div>
            <div className="message-content">
              <div className="message-author">{msg.user}</div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;

import React, { useState } from 'react';
import './../styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Reflexões Contemporâneas', text: 'Lorem ipsum dolor sit amet.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
    { user: 'O Polígrafo', text: 'Vel asperiores voluptatum.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
    { user: 'Orlando', text: 'Ut sequi rerum non sunt nisi est fuga.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
  ]);
  const [highlightedComment, setHighlightedComment] = useState(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'You', text: message, img: 'https://via.placeholder.com/40' }]); // Adiciona imagem à nova mensagem
      setMessage('');
    }
  };

  const handleCommentClick = (index) => {
    const clickedMessage = messages[index];

    if (highlightedComment === clickedMessage) {
      setHighlightedComment(null); // Remove o comentário se já estiver destacado
    } else {
      setHighlightedComment(clickedMessage); // Destaca uma nova mensagem
    }
  };


  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${highlightedComment === msg ? 'highlighted' : ''}`}
            onClick={() => handleCommentClick(index)} // Adiciona evento de clique
          >
            <div className="message-icon">
              <img src={msg.img} alt="User" /> {/* Exibe a imagem da mensagem */}
            </div>
            <div className="message-content">
              <div className="message-author">{msg.user}</div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      {highlightedComment && (
        <div className={`highlighted-comment ${highlightedComment ? 'fade-in' : 'fade-out'}`}>
          <div className="message-icon">
            <img src={highlightedComment.img} alt="User" />
          </div>
          <div className="message-content">
            <div className="message-author">{highlightedComment.user}</div>
            <div className="message-text">{highlightedComment.text}</div>
          </div>
        </div>
      )}


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

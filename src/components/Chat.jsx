import React, { useState, useEffect } from 'react';
import './../styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Reflexões Contemporâneas', text: 'Lorem ipsum dolor sit amet.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
    { user: 'O Polígrafo', text: 'Vel asperiores voluptatum.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
    { user: 'Orlando', text: 'Ut sequi rerum non sunt nisi est fuga.', img: 'https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg' },
  ]);
  const [highlightedComment, setHighlightedComment] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'Você', text: message, img: 'https://via.placeholder.com/40' }]);
      setMessage('');
    }
  };

  const handleCommentClick = (index) => {
    const clickedMessage = messages[index];

    if (highlightedComment === clickedMessage) {
      setIsFadingOut(true); // Aciona o efeito de fade-out
      setTimeout(() => {
        setHighlightedComment(null); // Remove o comentário após a animação
        setIsFadingOut(false); // Reseta o estado de fade-out
      }, 500); // Tempo da animação
    } else {
      setHighlightedComment(clickedMessage); // Destaca uma nova mensagem
    }
  };

  useEffect(() => {
    if (highlightedComment) {
      setIsFadingOut(false); // Assegura que o efeito de fade-out não interfere no fade-in
    }
  }, [highlightedComment]);

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${highlightedComment === msg ? 'pressed' : ''}`}
            onClick={() => handleCommentClick(index)}
          >
            <div className="message-icon">
              <img src={msg.img} alt="User" />
            </div>
            <div className="message-content">
              <div className="message-author">{msg.user}</div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      {highlightedComment && (
        <div className={`highlighted-comment ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
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
          placeholder="Envie Sua Mensagem..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;

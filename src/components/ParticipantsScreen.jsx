import React, { useState, useEffect } from 'react';
import './../styles/ParticipantsScreen.css';

function ParticipantsScreen({ highlightedComment }) {
  const [isVisible, setIsVisible] = useState(false);

  // Habilitar ou desabilitar a visibilidade do comentário
  useEffect(() => {
    if (highlightedComment) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [highlightedComment]);

  return (
    <div className="participants-screen">
      {highlightedComment && isVisible && (
        <div className="highlighted-comment">
          <div className="highlighted-comment-user">{highlightedComment.user}</div>
          <div className="highlighted-comment-text">{highlightedComment.text}</div>
        </div>
      )}

      <div className="participants-grid">
        {Array(10).fill().map((_, index) => (
          <div key={index} className="participant">
            <div className="camera-container">
              <div className="camera-placeholder">Participante {index + 1}</div>
              <div className="participant-name">Participante {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsScreen;

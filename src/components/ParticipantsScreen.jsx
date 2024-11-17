import React, { useEffect, useState } from 'react';
import './../styles/ParticipantsScreen.css';

function ParticipantsScreen({ highlightedComment }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (highlightedComment) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // Ensuring fade-out when the highlightedComment is removed
    }
  }, [highlightedComment]);

  const handleRemove = () => {
    setIsVisible(false);
  };

  return (
    <div className="participants-screen">
      {highlightedComment && (
        <div
          className={`highlighted-comment ${isVisible ? 'fade-in' : 'fade-out'}`}
          onClick={handleRemove}
          onAnimationEnd={() => {
            if (!isVisible) setIsVisible(false);
          }}
        >
          <div className="highlighted-comment-user">{highlightedComment.user}</div>
          <div className="highlighted-comment-text">{highlightedComment.text}</div>
        </div>
      )}
      <div className="participants-grid">
        {Array(10).fill().map((_, index) => (
          <div key={index} className="participant">
            <div className="camera-container">
              <div className="camera-placeholder">Participant {index + 1}</div>
              <div className="participant-name">Participant {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsScreen;

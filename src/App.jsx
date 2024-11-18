import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Chat from './components/Chat';
import ParticipantsScreen from './components/ParticipantsScreen';
import Controls from './components/Controls';
import './styles/App.css';

function App() {
  const [highlightedComment, setHighlightedComment] = useState(null);

  const handleCommentClick = (comment) => {
    setHighlightedComment(comment);
  };

  return (
    <>
      <div className="app-container">
        <TopBar />
        <div className="main-content">
          <ParticipantsScreen highlightedComment={highlightedComment} />
          <Chat onCommentClick={handleCommentClick} />
        </div>
        <Controls />
      </div>
    </>
  );
}

export default App;

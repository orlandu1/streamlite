import React from 'react';
import TopBar from './components/TopBar';
import Chat from './components/Chat';
import ParticipantsScreen from './components/ParticipantsScreen';
import Controls from './components/Controls';
import './styles/App.css'; // Estilos globais

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="main-content">
        <ParticipantsScreen />
        <Chat />
      </div>
      <Controls />
    </div>
  );
}

export default App;

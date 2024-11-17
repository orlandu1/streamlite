import React from 'react';
import './../styles/ParticipantsScreen.css';

function ParticipantsScreen() {
  // Definir o número de participantes, simulado aqui com uma lista de 10 participantes
  const participants = Array(10).fill().map((_, index) => `Participant ${index + 1}`);

  // Calcular o número de colunas com base no número de participantes
  const columns = Math.ceil(participants.length / 2); // Organiza em 2 linhas, ajustando o número de colunas

  return (
    <div className="participants-screen">
      <div className="participants-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {participants.map((participant, index) => (
          <div key={index} className="participant">
            <div className="camera-container">
              <div className="camera-placeholder">{participant}</div>
              <div className="participant-name">{participant}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsScreen;

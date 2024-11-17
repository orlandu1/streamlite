import React, { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaCamera, FaCog, FaShareSquare, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './../styles/Controls.css';

function Controls() {

  const [isMuted, setIsMuted] = useState(false);  // Controle de microfone (mutado ou não)
  const [isCameraOff, setIsCameraOff] = useState(false);  // Controle de câmera (desligada ou não)

  const toggleMicrophone = () => {
    setIsMuted(!isMuted);
  };

  const toggleCamera = () => {
    setIsCameraOff(!isCameraOff);
  };

  return (
    <div className="controls">
      <button
        className={`control-button ${isMuted ? 'muted' : ''}`}
        onClick={toggleMicrophone}
      >
        {isMuted ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
        <span>{isMuted ? 'Microfone Off' : 'Microfone On'}</span>
      </button>
      <button
        className={`control-button ${isCameraOff ? 'camera-off' : ''}`}
        onClick={toggleCamera}
      >
        {isCameraOff ? <FaCamera size={20} /> : <FaCamera size={20} />}
        <span>{isCameraOff ? 'Câmera Off' : 'Câmera On'}</span>
      </button>

      <button className="control-button">
        <FaCog size={20} />
        <span>Configurações</span>
      </button>
      <button className="control-button">
        <FaShareSquare size={20} />
        <span>Apresentar</span>
      </button>
      <button className="control-button">
        <FaUserPlus size={20} />
        <span>Convidar</span>
      </button>
      <button className="control-button exit-button">
        <FaSignOutAlt size={20} />
        <span>Sair</span>
      </button>
    </div>
  );
}

export default Controls;

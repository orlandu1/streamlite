import React from 'react';
import './../styles/TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="theme-name">Tema da Live: Ciência e Mistério</div>
      <button className="transmit-button">Transmitir</button>
    </div>
  );
}

export default TopBar;

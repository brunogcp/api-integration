import React from 'react';
import './App.css';
import ApiConsumer from './ApiConsumer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>🔗 Integração de APIs com React e Axios</h2>
        <ApiConsumer />
      </header>
    </div>
  );
}

export default App;
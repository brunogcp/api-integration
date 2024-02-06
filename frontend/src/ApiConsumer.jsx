import React, { useState } from 'react';
import axios from 'axios';

function ApiConsumer() {
  const [data, setData] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fetch-data');
      console.log('🚀 Dados da API:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setData(null);
    }
  };

  return (
    <div>
      <button onClick={fetchDataFromAPI}>🔄 Buscar Dados</button>
      {data && <div>📦 Dados: {JSON.stringify(data)}</div>}
    </div>
  );
}

export default ApiConsumer;
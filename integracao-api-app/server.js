const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products/1');
    console.log('🌟 Dados recebidos da API:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('😱 Erro ao buscar dados da API:', error);
    res.status(500).send('Erro ao buscar dados da API');
  }
});

app.listen(port, () => {
  console.log(`🌍 Servidor rodando em http://localhost:${port}`);
});
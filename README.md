<div align="center">
  <h3 align="center">APIs</h3>
  <div>
  <a href="https://bgcp.com.br/article/2d031201-9b77-47a2-bdab-f738fcd2f7bc">
  <img src="https://img.shields.io/badge/Download PDF (ENGLISH)-black?style=for-the-badge&logoColor=white&color=000000" alt="three.js" />
  </a>
  </div>
</div>

## 🌐 Introdução à Integração de APIs <a href="https://github.com/brunogcp/api-integration"><img src="https://img.shields.io/badge/Github-black?style=for-the-badge&logoColor=white&logo=github&color=000000" alt="Link do GitHub" /></a>

A integração de APIs (Application Programming Interfaces) é uma estratégia fundamental no desenvolvimento de software moderno. Ela permite que diferentes sistemas e serviços comuniquem-se entre si, compartilhando dados e funcionalidades de forma eficiente e segura. Utilizando APIs, podemos enriquecer nossas aplicações com serviços externos, como mapas, processamento de pagamentos, dados meteorológicos, e muito mais, criando experiências de usuário ricas e personalizadas.
## 🚀 Parte 1: Backend com Node.js e Express

### 🛠️ Instalação e Configuração

1. **Crie uma pasta para o projeto (se ainda não criou)**:
   ```bash
   mkdir integracao-api-app && cd integracao-api-app
   ```

2. **Inicialize um novo projeto Node.js**:
   ```bash
   npm init -y
   ```

3. **Instale o Express e o Axios**:
   ```bash
   npm install express axios cors
   ```

4. **Crie um arquivo `server.js`** para configurar o servidor Express:

```javascript
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
```

Agora, você tem um servidor Express simples que busca dados de uma API externa e os disponibiliza em uma rota do seu servidor.

5. **Inicie o servidor**:
   ```bash
   node server.js
   ```

Ao acessar `http://localhost:3000/fetch-data`, você verá os dados retornados pela API externa.

## 🚀 Parte 2: Frontend com React e Vite

### 🛠️ Instalação e Configuração

1. **Crie uma nova aplicação React com Vite**:
   ```bash
   npm create vite@latest frontend --template react
   cd frontend
   npm install
   ```

2. **Instale o Axios no frontend**:
   ```bash
   npm install axios
   ```

3. **Crie um componente `ApiConsumer.jsx`** para interagir com a API:

```jsx
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
```

4. **Integre o componente `ApiConsumer` no `App.jsx`**:

```jsx
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
```

5. **Execute a aplicação React** para ver a integração de APIs em ação:
   ```bash
   npm run dev
   ```

## 🏆 Conclusão

Parabéns! 🎉 Você acabou de criar uma aplicação que integra APIs utilizando Node.js no backend e React no frontend. Esse guia mostrou como consumir dados de uma API externa, tratar esses dados no backend e exibi-los de forma amigável no frontend com React. 

A integração de APIs é uma habilidade essencial para desenvolvedores modernos, permitindo criar aplicações dinâmicas e interativas. Continue explorando diferentes APIs e expandindo seus conhecimentos em integrações para criar projetos ainda mais impressionantes! 🚀
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/buzzfeed-clone', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log('Erro de conexão:', err));

// Rota para obter artigos
app.get('/api/articles', (req, res) => {
    const articles = [
        { id: 1, title: 'Artigo 1', content: 'Conteúdo do artigo 1' },
        { id: 2, title: 'Artigo 2', content: 'Conteúdo do artigo 2' }
    ];
    res.json(articles);
});

// Rota para quizzes (simulação)
app.get('/api/quizzes', (req, res) => {
    const quizzes = [
        { id: 1, title: 'Quiz 1', questions: ['Pergunta 1', 'Pergunta 2'] },
        { id: 2, title: 'Quiz 2', questions: ['Pergunta 1', 'Pergunta 2'] }
    ];
    res.json(quizzes);
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});

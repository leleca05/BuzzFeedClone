const express = require('express');
const app = express();
const port = 3000;

// Middleware para lidar com requisições
app.use(express.json());

// Definir uma rota para a página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do BuzzFeed Clone!');
});

// Definir uma rota para artigos (exemplo)
app.get('/articles', (req, res) => {
  res.json([
    { id: 1, title: 'Artigo 1' },
    { id: 2, title: 'Artigo 2' }
  ]);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

// Perguntas do Quiz
const quizQuestions = [
  {
    question: "Qual é o seu tipo de personalidade?",
    options: ["Agressivo", "Amigável", "Explorador", "Criativo"],
    answerMap: {
      "Agressivo": "Tyrannosaurus Rex",
      "Amigável": "Brachiosaurus",
      "Explorador": "Velociraptor",
      "Criativo": "Triceratops"
    }
  },
  {
    question: "Como você se comportaria em uma situação de perigo?",
    options: ["Atacaria", "Fugiria", "Observava e planejava", "Procuraria ajuda"],
    answerMap: {
      "Atacaria": "Tyrannosaurus Rex",
      "Fugiria": "Brachiosaurus",
      "Observava e planejava": "Velociraptor",
      "Procuraria ajuda": "Triceratops"
    }
  },
  {
    question: "Qual ambiente você prefere?",
    options: ["Selva densa", "Planalto aberto", "Floresta", "Caverna"],
    answerMap: {
      "Selva densa": "Velociraptor",
      "Planalto aberto": "Brachiosaurus",
      "Floresta": "Triceratops",
      "Caverna": "Tyrannosaurus Rex"
    }
  }
];

// Rota para retornar as perguntas
app.get('/quiz', (req, res) => {
  res.json(quizQuestions);
});

// Rota para calcular o tipo de dinossauro baseado nas respostas
app.post('/quiz-result', (req, res) => {
  const userAnswers = req.body.answers; // Exemplo: ["Agressivo", "Atacaria", "Floresta"]

  // Mapeia respostas para dinossauros
  let scores = {
    "Tyrannosaurus Rex": 0,
    "Brachiosaurus": 0,
    "Velociraptor": 0,
    "Triceratops": 0
  };

  userAnswers.forEach(answer => {
    quizQuestions.forEach(question => {
      if (question.answerMap[answer]) {
        scores[question.answerMap[answer]]++;
      }
    });
  });

  // Encontrar o dinossauro com maior pontuação
  const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  res.json({ dinosaur: result });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

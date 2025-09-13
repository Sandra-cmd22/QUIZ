// Script para adicionar mais perguntas às categorias
const fs = require('fs');

// Ler o arquivo atual
const questionsData = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf8'));

// Novas perguntas para cada categoria
const newQuestions = {
  'Filmes e Séries': [
    {
      "categoria": "Filmes e Séries",
      "pergunta": "Qual filme de 1994 dirigido por Frank Darabont é baseado em um conto de Stephen King?",
      "opcoes": ["O Iluminado", "Carrie", "Um Sonho de Liberdade", "Cemitério Maldito"],
      "resposta": "Um Sonho de Liberdade"
    },
    {
      "categoria": "Filmes e Séries",
      "pergunta": "Qual série da HBO é baseada nos livros de George R.R. Martin?",
      "opcoes": ["Breaking Bad", "Game of Thrones", "The Sopranos", "The Wire"],
      "resposta": "Game of Thrones"
    },
    {
      "categoria": "Filmes e Séries",
      "pergunta": "Qual ator interpretou o personagem Tony Stark no Universo Cinematográfico Marvel?",
      "opcoes": ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      "resposta": "Robert Downey Jr."
    },
    {
      "categoria": "Filmes e Séries",
      "pergunta": "Qual filme de animação da Disney conta a história de uma princesa que se transforma em urso?",
      "opcoes": ["Frozen", "Moana", "Brave", "Encanto"],
      "resposta": "Brave"
    },
    {
      "categoria": "Filmes e Séries",
      "pergunta": "Qual série da Netflix se passa no mundo invertido e tem como protagonista Eleven?",
      "opcoes": ["Dark", "Stranger Things", "The OA", "Black Mirror"],
      "resposta": "Stranger Things"
    }
  ],
  'Livros e Músicas': [
    {
      "categoria": "Livros e Músicas",
      "pergunta": "Qual escritor brasileiro escreveu 'O Cortiço'?",
      "opcoes": ["Machado de Assis", "Aluísio Azevedo", "José de Alencar", "Castro Alves"],
      "resposta": "Aluísio Azevedo"
    },
    {
      "categoria": "Livros e Músicas",
      "pergunta": "Qual banda britânica é conhecida pela música 'Bohemian Rhapsody'?",
      "opcoes": ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
      "resposta": "Queen"
    },
    {
      "categoria": "Livros e Músicas",
      "pergunta": "Qual poeta brasileiro escreveu 'Os Lusíadas'?",
      "opcoes": ["Fernando Pessoa", "Luís de Camões", "Cecília Meireles", "Carlos Drummond de Andrade"],
      "resposta": "Luís de Camões"
    },
    {
      "categoria": "Livros e Músicas",
      "pergunta": "Qual cantora brasileira é conhecida como 'A Pequena Notável'?",
      "opcoes": ["Elis Regina", "Gal Costa", "Carmen Miranda", "Rita Lee"],
      "resposta": "Carmen Miranda"
    },
    {
      "categoria": "Livros e Músicas",
      "pergunta": "Qual livro de J.K. Rowling introduz o personagem Harry Potter?",
      "opcoes": ["Harry Potter e a Pedra Filosofal", "Harry Potter e a Câmara Secreta", "Harry Potter e o Prisioneiro de Azkaban", "Harry Potter e o Cálice de Fogo"],
      "resposta": "Harry Potter e a Pedra Filosofal"
    }
  ],
  'Estudo': [
    {
      "categoria": "Estudo",
      "pergunta": "Qual é a fórmula química da água?",
      "opcoes": ["H2O", "CO2", "NaCl", "O2"],
      "resposta": "H2O"
    },
    {
      "categoria": "Estudo",
      "pergunta": "Qual é a capital do Brasil?",
      "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      "resposta": "Brasília"
    },
    {
      "categoria": "Estudo",
      "pergunta": "Quantos lados tem um triângulo?",
      "opcoes": ["2", "3", "4", "5"],
      "resposta": "3"
    },
    {
      "categoria": "Estudo",
      "pergunta": "Qual é o maior planeta do sistema solar?",
      "opcoes": ["Terra", "Marte", "Júpiter", "Saturno"],
      "resposta": "Júpiter"
    },
    {
      "categoria": "Estudo",
      "pergunta": "Qual é a velocidade da luz no vácuo?",
      "opcoes": ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"],
      "resposta": "300.000 km/s"
    }
  ]
};

// Adicionar as novas perguntas
let totalAdded = 0;
Object.entries(newQuestions).forEach(([category, questions]) => {
  questionsData.perguntas.push(...questions);
  totalAdded += questions.length;
  console.log(`✅ Adicionadas ${questions.length} perguntas para "${category}"`);
});

// Salvar o arquivo atualizado
fs.writeFileSync('./src/data/questions.json', JSON.stringify(questionsData, null, 2));

// Verificar distribuição final
const categoryCount = {};
questionsData.perguntas.forEach(q => {
  categoryCount[q.categoria] = (categoryCount[q.categoria] || 0) + 1;
});

console.log(`\n🎉 Total de ${totalAdded} perguntas adicionadas!`);
console.log('\nDistribuição final das categorias:');
Object.entries(categoryCount).forEach(([category, count]) => {
  console.log(`- ${category}: ${count} perguntas`);
});

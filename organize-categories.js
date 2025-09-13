// Script para organizar perguntas em categorias
const fs = require('fs');
const path = require('path');

// Ler o arquivo de perguntas
const questionsData = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf8'));

// Palavras-chave para categorizar as perguntas
const categoryKeywords = {
  'Filmes e Séries': [
    'filme', 'série', 'cinema', 'ator', 'atriz', 'diretor', 'hollywood', 'netflix', 'disney', 'marvel', 'dc', 'star wars', 'harry potter', 'senhor dos anéis', 'game of thrones', 'breaking bad', 'friends', 'the office'
  ],
  'Livros e Músicas': [
    'livro', 'autor', 'escritor', 'literatura', 'música', 'cantor', 'banda', 'álbum', 'música', 'canção', 'compositor', 'poeta', 'poesia', 'romance', 'novela', 'best-seller'
  ],
  'Estudo': [
    'matemática', 'física', 'química', 'biologia', 'história', 'geografia', 'português', 'inglês', 'espanhol', 'filosofia', 'sociologia', 'psicologia', 'economia', 'direito', 'medicina', 'engenharia', 'formula', 'equação', 'teorema', 'lei', 'teoria'
  ],
  'Conhecimentos gerais': [
    'capital', 'país', 'continente', 'oceano', 'rio', 'montanha', 'deserto', 'floresta', 'animal', 'planta', 'corpo humano', 'órgão', 'doença', 'vacina', 'medicamento', 'invenção', 'descoberta', 'cientista', 'prêmio nobel', 'olimpíadas', 'copa do mundo', 'esporte', 'atleta'
  ]
};

// Função para categorizar uma pergunta baseada no conteúdo
function categorizeQuestion(question) {
  const text = (question.pergunta + ' ' + question.opcoes.join(' ') + ' ' + question.resposta).toLowerCase();
  
  // Contar ocorrências de palavras-chave para cada categoria
  const scores = {};
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    scores[category] = 0;
    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        scores[category]++;
      }
    }
  }
  
  // Retornar a categoria com maior pontuação, ou 'Conhecimentos gerais' se empate
  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return 'Conhecimentos gerais';
  
  const bestCategory = Object.entries(scores).find(([_, score]) => score === maxScore)[0];
  return bestCategory;
}

// Categorizar todas as perguntas
const categorizedQuestions = questionsData.perguntas.map(question => ({
  ...question,
  categoria: categorizeQuestion(question)
}));

// Contar perguntas por categoria
const categoryCount = {};
categorizedQuestions.forEach(q => {
  categoryCount[q.categoria] = (categoryCount[q.categoria] || 0) + 1;
});

console.log('Distribuição das categorias:');
Object.entries(categoryCount).forEach(([category, count]) => {
  console.log(`- ${category}: ${count} perguntas`);
});

// Salvar o arquivo atualizado
const updatedData = {
  perguntas: categorizedQuestions
};

fs.writeFileSync('./src/data/questions.json', JSON.stringify(updatedData, null, 2));

console.log('\n✅ Arquivo questions.json atualizado com novas categorias!');

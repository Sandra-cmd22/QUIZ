// Script para organizar perguntas existentes em categorias
const fs = require('fs');

// Ler o arquivo original (apenas as primeiras 50 perguntas)
const originalData = {
  "perguntas": [
    {
      "categoria": "Conhecimentos gerais",
      "pergunta": "Qual filósofo grego foi condenado à morte por impiedade e corrupção da juventude, e morreu bebendo cicuta?",
      "opcoes": ["Platão", "Aristóteles", "Sócrates", "Heráclito"],
      "resposta": "Sócrates"
    },
    {
      "categoria": "Conhecimentos gerais", 
      "pergunta": "Qual tratado de paz, assinado em 1919, encerrou oficialmente a Primeira Guerra Mundial e impôs pesadas sanções à Alemanha?",
      "opcoes": ["Tratado de Versalhes", "Tratado de Tordesilhas", "Paz de Vestfália", "Tratado de Paris"],
      "resposta": "Tratado de Versalhes"
    }
  ]
};

// Palavras-chave para categorizar
const categoryKeywords = {
  'Filmes e Séries': ['filme', 'série', 'cinema', 'ator', 'atriz', 'diretor', 'hollywood', 'netflix', 'disney', 'marvel', 'dc', 'star wars', 'harry potter', 'senhor dos anéis', 'game of thrones', 'breaking bad', 'friends', 'the office'],
  'Livros e Músicas': ['livro', 'autor', 'escritor', 'literatura', 'música', 'cantor', 'banda', 'álbum', 'canção', 'compositor', 'poeta', 'poesia', 'romance', 'novela', 'best-seller'],
  'Estudo': ['matemática', 'física', 'química', 'biologia', 'história', 'geografia', 'português', 'inglês', 'espanhol', 'filosofia', 'sociologia', 'psicologia', 'economia', 'direito', 'medicina', 'engenharia', 'formula', 'equação', 'teorema', 'lei', 'teoria'],
  'Conhecimentos gerais': ['capital', 'país', 'continente', 'oceano', 'rio', 'montanha', 'deserto', 'floresta', 'animal', 'planta', 'corpo humano', 'órgão', 'doença', 'vacina', 'medicamento', 'invenção', 'descoberta', 'cientista', 'prêmio nobel', 'olimpíadas', 'copa do mundo', 'esporte', 'atleta']
};

// Função para categorizar
function categorizeQuestion(question) {
  const text = (question.pergunta + ' ' + question.opcoes.join(' ') + ' ' + question.resposta).toLowerCase();
  
  const scores = {};
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    scores[category] = 0;
    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        scores[category]++;
      }
    }
  }
  
  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return 'Conhecimentos gerais';
  
  return Object.entries(scores).find(([_, score]) => score === maxScore)[0];
}

// Criar perguntas organizadas
const organizedQuestions = originalData.perguntas.map(question => ({
  ...question,
  categoria: categorizeQuestion(question)
}));

// Salvar arquivo organizado
const organizedData = { perguntas: organizedQuestions };
fs.writeFileSync('./src/data/questions.json', JSON.stringify(organizedData, null, 2));

console.log('✅ Perguntas organizadas em categorias!');

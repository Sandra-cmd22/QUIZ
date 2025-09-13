# Quiz Temático PWA

Um aplicativo de quiz progressivo (PWA) desenvolvido em React com Tailwind CSS, totalmente offline e responsivo para mobile.

## 🎨 Características

- **PWA Completo** - Funciona offline, instalável no dispositivo
- **React + Vite** - Desenvolvimento moderno e rápido
- **Tailwind CSS** - Design responsivo e moderno
- **100% Offline** - Sem necessidade de backend ou API
- **Mobile First** - Otimizado para dispositivos móveis

## 📱 Telas

1. **Tela de Início** - Nome do app "Quiz Temático" com botão "Começar"
2. **Tela de Categorias** - Seleção de temas disponíveis
3. **Tela de Quiz** - Perguntas com 4 opções cada
4. **Tela de Resultados** - Pontuação final e estatísticas

## 🎯 Funcionalidades

- ✅ Shuffle de perguntas e alternativas
- ✅ Salvar pontuação no LocalStorage
- ✅ Design baseado nas imagens fornecidas
- ✅ Animações suaves e feedback visual
- ✅ Totalmente responsivo
- ✅ PWA instalável

## 🛠️ Tecnologias

- **React 18** - Biblioteca de interface
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **PWA Plugin** - Service Worker e Manifest
- **JavaScript ES6+** - Lógica da aplicação

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Preview do Build
```bash
npm run preview
```

## 📱 URLs de Acesso

- **Local:** `http://localhost:8080`
- **Rede:** `http://SEU_IP:8080`

## 📁 Estrutura do Projeto

```
quiz-tematico-pwa/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── CategoriesScreen.jsx
│   │   ├── QuizScreen.jsx
│   │   ├── ResultsScreen.jsx
│   │   └── CornerDecorations.jsx
│   ├── data/
│   │   └── questions.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── vite.svg
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design

O design foi baseado nas imagens fornecidas:
- Formas geométricas coloridas nos cantos
- Fonte Nerko One para títulos
- Cores vibrantes (rosa, laranja, amarelo, azul)
- Layout mobile-first responsivo

## 📊 JSON de Perguntas

O arquivo `src/data/questions.json` contém todas as perguntas organizadas por categoria. Você pode facilmente:
- Adicionar novas perguntas
- Modificar categorias existentes
- Alterar opções e respostas

## 🔧 Customização

### Adicionar Perguntas
Edite o arquivo `src/data/questions.json`:

```json
{
  "categoria": "Nova Categoria",
  "pergunta": "Sua pergunta aqui?",
  "opcoes": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
  "resposta": "Opção 1"
}
```

### Alterar Cores
Modifique `tailwind.config.js` para personalizar as cores.

## 📱 PWA

O app é um PWA completo com:
- Manifest.json configurado
- Service Worker para cache offline
- Ícones para diferentes tamanhos
- Instalável no dispositivo móvel

## 🚀 Deploy

Pronto para deploy na Vercel, Netlify ou qualquer plataforma estática:

```bash
npm run build
# Upload da pasta dist/
```

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**

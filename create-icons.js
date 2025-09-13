// Script para criar ícones PWA
const fs = require('fs');

// Criar ícone 192x192
const icon192 = `data:image/svg+xml;base64,${Buffer.from(`
<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg192" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF69B4"/>
      <stop offset="25%" style="stop-color:#FF8C00"/>
      <stop offset="50%" style="stop-color:#FFD700"/>
      <stop offset="75%" style="stop-color:#4169E1"/>
      <stop offset="100%" style="stop-color:#FF69B4"/>
    </linearGradient>
  </defs>
  <rect width="192" height="192" rx="30" fill="url(#bg192)"/>
  <text x="96" y="120" font-family="Nerko One, cursive" font-size="48" font-weight="bold" text-anchor="middle" fill="white" stroke="rgba(0,0,0,0.2)" stroke-width="2">QUIZ</text>
  <circle cx="48" cy="48" r="8" fill="rgba(255,255,255,0.3)"/>
  <circle cx="144" cy="48" r="8" fill="rgba(255,255,255,0.3)"/>
  <circle cx="48" cy="144" r="8" fill="rgba(255,255,255,0.3)"/>
  <circle cx="144" cy="144" r="8" fill="rgba(255,255,255,0.3)"/>
</svg>
`).toString('base64')}`;

// Criar ícone 512x512
const icon512 = `data:image/svg+xml;base64,${Buffer.from(`
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg512" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF69B4"/>
      <stop offset="25%" style="stop-color:#FF8C00"/>
      <stop offset="50%" style="stop-color:#FFD700"/>
      <stop offset="75%" style="stop-color:#4169E1"/>
      <stop offset="100%" style="stop-color:#FF69B4"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#bg512)"/>
  <text x="256" y="320" font-family="Nerko One, cursive" font-size="128" font-weight="bold" text-anchor="middle" fill="white" stroke="rgba(0,0,0,0.2)" stroke-width="4">QUIZ</text>
  <circle cx="128" cy="128" r="20" fill="rgba(255,255,255,0.3)"/>
  <circle cx="384" cy="128" r="20" fill="rgba(255,255,255,0.3)"/>
  <circle cx="128" cy="384" r="20" fill="rgba(255,255,255,0.3)"/>
  <circle cx="384" cy="384" r="20" fill="rgba(255,255,255,0.3)"/>
</svg>
`).toString('base64')}`;

console.log('Ícones criados! Use os dados base64 acima para criar os arquivos PNG.');


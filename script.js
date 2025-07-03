  console.log("Script carregado com sucesso!");
// This script displays a random love phrase when the button is clicked.

const frases = [
    "Você é a razão do meu sorriso.", "Com você, tudo faz sentido.",
  "Te amar é minha coisa favorita.",
  "Seu sorriso ilumina minha alma.",
  "Você é meu presente mais precioso.",
  "Te amo hoje, amanhã e sempre.",
  "nosso amor é infinito.",
  "Você é minha felicidade diária.", "Eu sou o seu maior fã.",
  "Você é a melhor parte do meu dia.","Eu sou um esposo sortudo por ter você.",
  "Você é a razão do meu coração bater mais forte.", "obrigado por ser minha parceira de vida.","quero passar o resto da minha vida com você.",  ];
  
  function mostrarFrase() {
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").innerText = aleatoria;
}
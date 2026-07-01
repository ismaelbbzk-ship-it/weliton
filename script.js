const frases=[

"Somos um só.",

"Te adoro em tudo.",

"Foi quando um sorriso em meu rosto tornou-se lágrimas.",

"Eu amei um anjo.",

"Cada poema nasce de um sentimento."

];

const frase=document.getElementById("frase");

if(frase){

frase.innerText=frases[Math.floor(Math.random()*frases.length)];

}
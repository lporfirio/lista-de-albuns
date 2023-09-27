import { albuns } from "../data/albuns.js";

const sobreTextos = [
  "O SongSavor é o lugar onde você pode saborear suas músicas favoritas. Crie listas dos seus álbuns prediletos e compartilhe suas descobertas musicais com o mundo.",
  "Você está na terra encantada do SongSavor, onde a música não é apenas ouvida, é degustada. Crie seus pratos musicais e faça um festim para os seus ouvidos!",
  "No SongSavor, é como se cada álbum fosse uma fatia de bolo de aniversário - compartilhe, saboreie e celebre suas músicas favoritas conosco!",
  "Bem-vindo ao SongSavor, onde sua playlist vira um banquete musical! Monte seu cardápio dos álbuns mais saborosos e sirva a melhor música para o mundo."
];

// Escolhe um texto aleatório
const textoAleatorio = sobreTextos[Math.floor(Math.random() * sobreTextos.length)];

// Define o texto na div
const sobreDiv = document.querySelector('.js-sobre-texto');
sobreDiv.innerHTML = textoAleatorio;



// -- Listas de álbuns adicionados
const albunsAdicionados = document.querySelector('.js-albuns-adicionados');

const ultimosAlbuns = albuns.slice(-4).reverse();

let listaHTML = '<ul>';
for (const album of ultimosAlbuns) {
  listaHTML += `<li>${album.nome} - ${album.artista}</li>`;
}

listaHTML += '</ul>';

albunsAdicionados.innerHTML = listaHTML;


// - Criar novo álbum



//
console.log('O arquivo songsavor.js está sendo executado corretamente.');
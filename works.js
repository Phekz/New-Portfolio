// Seleciona todos os itens da lista e as galerias de fotos
const listItems = document.querySelectorAll('.projects_container-item');
const galleries = document.querySelectorAll('.project_gallery');

// Função para atualizar o número de imagens
function updateImageCounts() {
    listItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const gallery = document.querySelector(`.project_gallery[data-category="${category}"]`);
        
        if (gallery) {
            const imageCount = gallery.querySelectorAll('img').length;
            const span = item.querySelector('span');
            span.textContent = `(${imageCount})`; // Atualiza o texto com o número de imagens
        }
    });
}

// Chama a função para atualizar os números ao carregar a página
updateImageCounts();

// Adiciona um evento de clique em cada item da lista
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');

        // Esconde todas as galerias de fotos
        galleries.forEach(gallery => {
            gallery.style.display = 'none';
        });

        // Exibe apenas a galeria correspondente ao item clicado
        const activeGallery = document.querySelector(`.project_gallery[data-category="${category}"]`);
        if (activeGallery) {
            activeGallery.style.display = 'flex'; // Exibe a galeria correspondente
        }
    });
});


const textElements = document.querySelectorAll('.projects_container-item');

// Aplica a lógica de clique em cada item da lista
textElements.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe 'active' de todos os itens para manter apenas um ativo por vez (opcional)
        textElements.forEach(el => el.classList.remove('active'));
        
        // Adiciona a classe 'active' no item clicado
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os containers de projetos
    const projectGalleries = document.querySelectorAll('.project_gallery');

    // Mostra apenas os projetos com data-category "all" ao carregar a página
    projectGalleries.forEach(gallery => {
        if (gallery.getAttribute('data-category') === 'all') {
            gallery.style.display = 'flex'; // Exibe a categoria "all"
        } else {
            gallery.style.display = 'none'; // Oculta outras categorias
        }
    });
});


const navList = document.querySelector('.nav_list');
const projectsContainer = document.querySelector('.projects_list-container');

let isSticky = false; // Variável de controle para evitar tremores

window.addEventListener('scroll', () => {
  const navBottom = navList.getBoundingClientRect().bottom + window.scrollY;
  const containerTop = projectsContainer.offsetTop;
  const offset = 60; // Espaçamento extra para evitar sobreposição

  // Ativa a posição "sticky" apenas uma vez
  if (navBottom >= containerTop && !isSticky) {
    projectsContainer.style.position = 'static';
    projectsContainer.style.top = `${navList.offsetHeight + offset}px`;
    isSticky = false;
  } 
  // Retorna a posição "relative" ao voltar para cima, sem tremores
  else if (navBottom < containerTop && isSticky) {
    projectsContainer.style.position = 'relative';
    projectsContainer.style.top = '0';
    isSticky = false;
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll('.galeria .imagens img');
    let imagemAtual = 0;
  
    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.innerHTML = `
      <span id="prev" class="nav-btn">&#10094;</span>
      <img id="lightbox-img" src="" alt="">
      <span id="next" class="nav-btn">&#10095;</span>
    `;
    document.body.appendChild(overlay);
  
    const lightboxImg = overlay.querySelector('#lightbox-img');
    const prevBtn = overlay.querySelector('#prev');
    const nextBtn = overlay.querySelector('#next');
  
    // Função para abrir a imagem
    function abrirImagem(index) {
      imagemAtual = index;
      lightboxImg.src = imagens[imagemAtual].src;
      overlay.style.display = 'flex';
    }
  
    imagens.forEach((img, index) => {
      img.addEventListener('click', () => {
        abrirImagem(index);
      });
    });
  
    // Navegar para próxima
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      imagemAtual = (imagemAtual + 1) % imagens.length;
      lightboxImg.src = imagens[imagemAtual].src;
    });
  
    // Navegar para anterior
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
      lightboxImg.src = imagens[imagemAtual].src;
    });
  
    // Fechar ao clicar fora da imagem
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
      if (overlay.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
          imagemAtual = (imagemAtual + 1) % imagens.length;
          lightboxImg.src = imagens[imagemAtual].src;
        } else if (e.key === 'ArrowLeft') {
          imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
          lightboxImg.src = imagens[imagemAtual].src;
        } else if (e.key === 'Escape') {
          overlay.style.display = 'none';
        }
      }
    });
  });
  
    
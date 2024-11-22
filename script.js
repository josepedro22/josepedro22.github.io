document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-item'); // Todas as imagens
    const seeMoreButton = document.getElementById('see-more-btn');

    // Configuração inicial
    const desktopInitial = 9; // Imagens iniciais no desktop
    const desktopIncrement = 3; // Incremento de imagens no desktop
    const mobileInitial = 6; // Imagens iniciais no mobile
    let visibleImages = 0; // Número de imagens atualmente visíveis

    // Determina quantas imagens mostrar inicialmente com base no dispositivo
    function getInitialCount() {
        return window.innerWidth > 768 ? desktopInitial : mobileInitial;
    }

    // Atualiza a exibição das imagens
    function updateImageVisibility() {
        // Exibe apenas as imagens visíveis
        images.forEach((image, index) => {
            image.style.display = index < visibleImages ? 'block' : 'none';
        });

        // Esconde o botão "See More" se todas as imagens estiverem visíveis
        if (visibleImages >= images.length) {
            seeMoreButton.style.display = 'none';
        } else {
            seeMoreButton.style.display = 'inline-block';
        }
    }

    // Lógica para carregar mais imagens ao clicar no botão
    function loadMoreImages() {
        if (window.innerWidth > 768) {
            visibleImages += desktopIncrement; // Adiciona mais 3 imagens no desktop
        } else {
            visibleImages = images.length; // Mostra todas as imagens no mobile
        }
        updateImageVisibility();
    }

    // Inicializa a exibição das imagens ao carregar a página
    function initializeGallery() {
        visibleImages = getInitialCount(); // Define o número inicial de imagens
        updateImageVisibility(); // Atualiza a visibilidade das imagens
    }

    // Evento de clique no botão "See More"
    seeMoreButton.addEventListener('click', loadMoreImages);

    // Inicializa a galeria ao carregar
    initializeGallery();

    // Atualiza a galeria ao redimensionar a janela
    window.addEventListener('resize', initializeGallery);
});

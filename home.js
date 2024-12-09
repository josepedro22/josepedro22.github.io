document.addEventListener("DOMContentLoaded", function () {
    // Selecionar o carrossel do Bootstrap
    const testimonialCarousel = new bootstrap.Carousel("#testimonialCarousel");
  
    // Botões de controle
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    // Adicionar eventos de clique
    prevBtn.addEventListener("click", function () {
      testimonialCarousel.prev(); // Vai para o slide anterior
    });
  
    nextBtn.addEventListener("click", function () {
      testimonialCarousel.next(); // Vai para o próximo slide
    });
  });
  
  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    // Verifica se o menu está aberto e o clique não foi dentro do menu ou no botão de toggle
    if (navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)) {
        // Fecha o menu
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        collapseInstance.hide();
    }
});


  
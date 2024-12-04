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
  


  
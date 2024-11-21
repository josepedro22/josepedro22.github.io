const seeMoreBtn = document.querySelector('.see-more');
const portfolioGrid = document.querySelector('.grid');

seeMoreBtn.addEventListener('click', () => {
  // Simula carregar mais imagens (adicionar elementos dinamicamente)
  const newItems = `
    <div class="item"><img src="photos/cake7.JPEG" alt="Cake 7"></div>
    <div class="item"><img src="photos/cake8.JPEG" alt="Cake 8"></div>
  `;
  portfolioGrid.innerHTML += newItems;
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const openItem = document.querySelector('.accordion-item.active');
    if (openItem && openItem !== item) {
      openItem.classList.remove('active');
    }
    item.classList.toggle('active');
  });
});
function toggleMenu() {
    const nav = document.getElementById("navdrop");
    nav.classList.toggle("show");
  }
function toggleMenu() {
    const nav = document.getElementById("navdrop");
    nav.classList.toggle("show");
  }

const track = document.querySelector('.carousel-track');
let slides = document.querySelectorAll('.carousel-track img');

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.setAttribute('id', 'first-clone');
lastClone.setAttribute('id', 'last-clone');

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll('.carousel-track img');

let currentIndex = 1; 
let slideWidth = slides[0].getBoundingClientRect().width;

track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

function updateSlidePosition() {
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function nextSlide() {
  currentIndex++;
  updateSlidePosition();

  track.addEventListener('transitionend', () => {
    if (slides[currentIndex].id === 'first-clone') {
      track.style.transition = 'none';
      currentIndex = 1;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  }, { once: true });
}

function prevSlide() {
  currentIndex--;
  updateSlidePosition();

  track.addEventListener('transitionend', () => {
    if (slides[currentIndex].id === 'last-clone') {
      track.style.transition = 'none';
      currentIndex = slides.length - 2;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  }, { once: true });
}

setInterval(nextSlide, 3000);

window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

const mobileImages = [
'assets/v.png',
  'assets/a.png',
  'assets/e.png',
  'assets/f.png',
  'assets/c.png'
];

let mobileIndex = 0;
const mobileSlide = document.getElementById('mobile-slide');

if (mobileSlide) {
  setInterval(() => {
    mobileIndex = (mobileIndex + 1) % mobileImages.length;
    mobileSlide.style.opacity = 0;
    setTimeout(() => {
      mobileSlide.src = mobileImages[mobileIndex];
      mobileSlide.style.opacity = 1;
    }, 300);
  }, 3000);
}
  const slider = document.getElementById('property-track');

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  const scrollSpeed = 2.5; 


  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    scrollStart = slider.scrollLeft;
    slider.classList.add('dragging');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * scrollSpeed;
    slider.scrollLeft = scrollStart - walk;
  });

  slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.classList.remove('dragging');
  });

  slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.classList.remove('dragging');
  });


  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    scrollStart = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * scrollSpeed;
    slider.scrollLeft = scrollStart - walk;
  });

  slider.addEventListener('touchend', () => {
    isDragging = false;
  });
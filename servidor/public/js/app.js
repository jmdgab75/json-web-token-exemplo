const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

let currentSlide = 1;

function showSlide(slideNumber) {
    // Esconda todas as imagens e os textos
    const images = document.querySelectorAll('.image');
    const textItems = document.querySelectorAll('.text-group h2');
    
    images.forEach(image => image.classList.remove('show'));
    textItems.forEach(item => item.style.display = 'none');

    // Mostre o slide desejado
    images[slideNumber - 1].classList.add('show');
    textItems[slideNumber - 1].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide % 3) + 1; // Circula entre 1, 2 e 3
    showSlide(currentSlide);
}

// Inicie o carrossel
showSlide(currentSlide);
setInterval(nextSlide, 4000); // Mude para o próximo slide a cada 4 segundos







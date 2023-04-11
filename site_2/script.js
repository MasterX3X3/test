// Слайдер
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[currentSlide].style.display = 'block';
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide();

// Форма обратной связи
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(`Имя: ${nameInput.value}`);
  console.log(`Email: ${emailInput.value}`);
  console.log(`Сообщение: ${messageInput.value}`);
  alert('Спасибо за ваше сообщение!');
  nameInput.value = '';
emailInput.value = '';
messageInput.value = '';
});
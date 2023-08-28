// JavaScript para la galería de imágenes que pasa automáticamente
const images = document.querySelectorAll('.slideshow img');
let index = 0;

function showImage() {
  images[index].style.transform = 'translateX(0)';
  if (index > 0) {
    images[index - 1].style.transform = 'translateX(-100%)';
  } else {
    images[images.length - 1].style.transform = 'translateX(-100%)';
  }
  index = (index + 1) % images.length;
}

setInterval(showImage, 3000);

// JavaScript para el desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// JavaScript para el cambio de estilo en la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// JavaScript para comprar entradas
const comprarButtons = document.querySelectorAll('.btn-comprar');

comprarButtons.forEach(button => {
  button.addEventListener('click', comprarEntrada);
});

function comprarEntrada(event) {
  event.preventDefault();
  const preferenceId = event.target.getAttribute('data-preference-id');
  
  // Redirigir al enlace de Mercado Pago con el preferenceId
  window.location.href = `https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js?data-preference-id=${preferenceId}`;
}

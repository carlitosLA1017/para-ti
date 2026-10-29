const linterna = document.getElementById('linterna');

document.addEventListener('mousemove', (event) => {
  linterna.style.setProperty('--x', `${event.clientX}px`);
  linterna.style.setProperty('--y', `${event.clientY}px`);
});

const btnLuz = document.getElementById('btn-luz');
const textoLuz = document.getElementById('texto-luz');

btnLuz.addEventListener('click', () => {
  document.body.classList.toggle('modo-dia');

  const esDia = document.body.classList.contains('modo-dia');
  textoLuz.textContent = esDia
    ? ' Nox (Bajar la luz)'
    : ' Lumos (Encender luz)';
});

const polaroids = document.querySelectorAll('.polaroid-wrap');

polaroids.forEach((polaroid) => {
  polaroid.addEventListener('click', () => {
    polaroid.classList.toggle('girada');
  });
});

const btnCarta = document.getElementById('btn-abrir-carta');
const contenedorCarta = document.getElementById('contenedor-carta');

btnCarta.addEventListener('click', () => {
  contenedorCarta.classList.add('abierta');
});

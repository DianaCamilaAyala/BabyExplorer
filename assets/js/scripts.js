// Función para manejar eventos de clic en las tarjetas
function handleCardClick(card) {
    const categoryName = card.querySelector('h3').innerText;

    // Aplicar una animación al hacer clic
    card.classList.add('clicked');
    setTimeout(() => card.classList.remove('clicked'), 300); // Quitar efecto tras 300ms

    // Mostrar un mensaje de bienvenida personalizado
    alert(`¡Has seleccionado la categoría: ${categoryName}! Explora y aprende cosas fascinantes.`);

    // Redirigir al enlace correspondiente
    const link = card.querySelector('a').getAttribute('href');
    if (link) {
        window.location.href = link;
    }
}

// Función para añadir animaciones al pasar el mouse
function addHoverEffect(card) {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
}

// Seleccionar todas las tarjetas y añadir los eventos
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
    addHoverEffect(card);
});

// Desplazamiento suave hacia las categorías al hacer clic en el botón
const exploreButton = document.querySelector('.explorar-btn');
if (exploreButton) {
    exploreButton.addEventListener('click', () => {
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    });
}
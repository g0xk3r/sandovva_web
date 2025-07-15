function animarEntrada() {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';

    setTimeout(() => {
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
}

function actualizarDatos(datos) {
    if (datos.comprador) document.getElementById('comprador').textContent = datos.comprador;
    if (datos.vendedor) document.getElementById('vendedor').textContent = datos.vendedor;
    if (datos.perfume) document.getElementById('perfume').textContent = datos.perfume;
    if (datos.milimetraje) document.getElementById('milimetraje').textContent = datos.milimetraje;
    if (datos.fecha) document.getElementById('fecha').textContent = datos.fecha;
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    animarEntrada();
});
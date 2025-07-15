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

function obtenerParametrosURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        comprador: urlParams.get('comprador'),
        vendedor: urlParams.get('vendedor'),
        perfume: urlParams.get('perfume'),
        mililitros: urlParams.get('mililitros'),
        precio: urlParams.get('precio'),
        fecha: urlParams.get('fecha'),
        cupon_descuento: urlParams.get('cupon_descuento')
    };
}

function actualizarDatos(datos) {
    document.getElementById('comprador').textContent = datos.comprador || 'No especificado';
    document.getElementById('vendedor').textContent = datos.vendedor || 'No especificado';
    document.getElementById('perfume').textContent = datos.perfume || 'No especificado';
    document.getElementById('mililitros').textContent = datos.mililitros ? `${datos.mililitros}ml` : 'No especificado';
    document.getElementById('precio').textContent = datos.precio ? `$${datos.precio}` : 'No especificado';
    document.getElementById('fecha').textContent = datos.fecha || 'No especificada';
    document.getElementById('cupon_descuento').textContent = datos.cupon_descuento || '5%';
}

function cargarDatosPorDefecto() {
    const datosDefecto = {
        comprador: 'Cliente General',
        vendedor: 'Vendedor General',
        perfume: 'Perfume de Muestra',
        mililitros: '100',
        precio: '0',
        fecha: new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        cupon_descuento: '5%'
    };
    actualizarDatos(datosDefecto);
}

function limpiarURL() {
    const url = new URL(window.location);
    url.search = '';
    window.history.replaceState({}, document.title, url);
}

document.addEventListener('DOMContentLoaded', function () {
    const parametros = obtenerParametrosURL();
    
    if (Object.values(parametros).some(param => param !== null)) {
        actualizarDatos(parametros);
        limpiarURL();
    } else {
        cargarDatosPorDefecto();
    }
    
    animarEntrada();
});
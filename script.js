const botonAbrir = document.getElementById('botonAbrir');
const pantallaInicio = document.getElementById('pantallaInicio');
const contenidoPrincipal = document.getElementById('contenidoPrincipal');
const sobre = document.querySelector('.sobre');
const musica = document.getElementById('musicaFondo');

botonAbrir.addEventListener('click', () => {
    // Reproducir música 🎵
    if (musica) {
        musica.volume = 0.8;
        musica.play().catch(e => console.log("Audio listo:", e));
    }

    // Quitar pantalla de inicio
    pantallaInicio.classList.add('ocultar');

    // Mostrar mensaje con animación
    setTimeout(() => {
        contenidoPrincipal.classList.add('mostrar');
    }, 400);

    // Abrir el sobre solo
    setTimeout(() => {
        sobre.classList.add('abierto');
    }, 1200);

    // ¡Efectos! 🎊❤️🌹
    lanzarConfeti();
    lluviaCorazonesYRosas();
});

function lanzarConfeti() {
    const colores = ['#ff69b4', '#ff1493', '#ffd700', '#ff6347', '#7fff00', '#00bfff'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.classList.add('confeti');
            confeti.style.left = `${Math.random() * 100}vw`;
            confeti.style.top = `${-10 - Math.random() * 50}px`; // Sale desde arriba ✅
            confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confeti.style.animationDuration = `${3 + Math.random() * 4}s`;
            confeti.style.width = `${5 + Math.random() * 10}px`;
            confeti.style.height = `${5 + Math.random() * 10}px`;
            confeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            document.body.appendChild(confeti);
            setTimeout(() => confeti.remove(), 7000);
        }, i * 30);
    }
}

function lluviaCorazonesYRosas() {
    const contenedor = document.getElementById('lluviaRosas');
    if (!contenedor) return; // Evita errores si no encuentra el contenedor

    const emojis = ['❤️', '💕', '💖', '🌹', '🌺', '🌸'];
    
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const elemento = document.createElement('div');
            elemento.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            if (['🌹', '🌺', '🌸', '💐'].includes(elemento.textContent)) {
                elemento.classList.add('rosa-caida');
            } else {
                elemento.classList.add('corazon-caida');
            }

            elemento.style.left = `${Math.random() * 100}vw`;
            elemento.style.top = `${-50 - Math.random() * 30}px`;
            elemento.style.animationDuration = `${3 + Math.random() * 4}s`;
            elemento.style.fontSize = `${1 + Math.random() * 1.5}rem`;
            
            contenedor.appendChild(elemento);
            setTimeout(() => elemento.remove(), 8000);
        }, i * 25);
    }
}

// Lluvia automática al entrar
setTimeout(() => {
    lluviaCorazonesYRosas();
}, 1290);

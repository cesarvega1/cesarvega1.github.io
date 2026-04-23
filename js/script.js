alert("Bienvenido a mi Portafolio")


/* ----------------------------------------
    TOGGLE DE CONTENIDO — "Ver más sobre mí"
      Cambia el texto del botón y muestra/oculta
   ---------------------------------------- */
function toggleContent() {
    const extra = document.getElementById('extraContent');
    const btn = document.getElementById('toggleBtn');

    if (!extra || !btn) return;

    const isHidden = extra.classList.contains('hidden');

    if (isHidden) {
        extra.classList.remove('hidden');
        btn.textContent = 'Ocultar información';
        btn.style.background = 'var(--clr-muted)';
    } else {
        extra.classList.add('hidden');
        btn.textContent = 'Ver más sobre mí';
        btn.style.background = 'var(--clr-accent)';
        btn.style.color = '#0a0a0f';
    }
}





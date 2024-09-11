// JavaScript para interacciones futuras y mejoras
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Puedes agregar más funcionalidades aquí según lo necesites
});
document.addEventListener("DOMContentLoaded", function() {
    function createSoundCloudPlayer(url) {
        const playerContainer = document.getElementById('player-container');
        const iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = "120";  // Incrementa la altura para que se vean todas las canciones
        iframe.scrolling = "no";
        iframe.frameBorder = "no";
        iframe.allow = "autoplay";
        iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23fbff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`;

        playerContainer.appendChild(iframe);
    }

    // URL de SoundCloud para las pistas del estudio
    const soundCloudURL = "https://soundcloud.com/sayitlando/sets/vibrations-i?si=3923e6e2c4bd4ab19b2cdeb0cceb2c77&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"; // Reemplaza con tu URL

    // Llama a la función para crear el reproductor
    createSoundCloudPlayer(soundCloudURL);
});

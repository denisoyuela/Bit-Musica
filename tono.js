document.getElementById('soundButton').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    audio.play();
    setTimeout(() => {
        // Cambia esta URL por la de tu sistema real
        window.location.href = "presentacion.html";
    }, 2000);
    
});
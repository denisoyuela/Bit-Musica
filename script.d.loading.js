document.getElementById('btnBarroco').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    audio.play();
    setTimeout(() => {
       
        window.location.href = "presentacion.html";
   }, 2000);
    
 });
 document.getElementById('btnClasico').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    audio.play();
    setTimeout(() => {
       
        window.location.href = "presentacion.html";
   }, 2000);
    
 });
 document.getElementById('btnRomantico').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    audio.play();
    setTimeout(() => {
       
        window.location.href = "presentacion.html";
   }, 2000);
    
 });
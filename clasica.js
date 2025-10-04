// Lista de canciones (puedes agregar más)

   // title: "", artist: "", src: ".mp3",  duration: "",
   // cover: "",
 
   const songs = [
  { title: " & Nelph - It Cost", artist: "JUCZ", src: "JuCz & Nelph - It Cost - JUCZ.mp3",  duration: "4:27",
    cover: "https://m.media-amazon.com/images/I/51oAwuaw4vL._UXNaN_FMjpg_QL85_.jpg",
    background: "https://m.media-amazon.com/images/I/51oAwuaw4vL._UXNaN_FMjpg_QL85_.jpg",
},  { title: "Accidentally In Love", artist: "Counting Crows ", src: "Counting Crows - Accidentally In Love (Lyric Video) - Love Life Lyrics.mp3",  duration: "4:11",
    cover: "https://i.ytimg.com/vi/xgyT0z7-5ts/maxresdefault.jpg",
    background: "https://i.ytimg.com/vi/xgyT0z7-5ts/maxresdefault.jpg",
},  { title: "Gloria", artist: "Laura Branigan", src: "Laura Branigan - Gloria (Official Music Video) - RHINO.mp3",  duration: "3:52",
    cover: "https://i.ytimg.com/vi/nNEb2k_EmMg/sddefault.jpg",
    background: "https://i.ytimg.com/vi/nNEb2k_EmMg/sddefault.jpg",
},  { title: "Héroe De Leyenda", artist:"Héroes Del Silencio",  src: "Héroes Del Silencio - Héroe De Leyenda (1988) - Jean PM 2000.mp3",  duration: "4:07",
    cover: "https://i.ytimg.com/vi/suGTTScA4KU/maxresdefault.jpg",
    background: "https://i.ytimg.com/vi/suGTTScA4KU/maxresdefault.jpg",
},  { title: "Maldito duende", artist: "Héroes del Silencio", src: "Héroes del Silencio - Maldito duende - Enrique Bunbury.mp3",  duration: "4:21",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElQcEAmv4pZpN5Q1z8nZWvfIz3ZFQLwB7EQ&s",
   background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElQcEAmv4pZpN5Q1z8nZWvfIz3ZFQLwB7EQ&s",
},  { title: "Wind Of Change ", artist: "Scorpions", src: "Scorpions - Wind Of Change (Official Music Video) - ScorpionsVEVO.mp3",  duration: "4:43",
    cover: "https://i.ytimg.com/vi/n4RjJKxsamQ/maxresdefault.jpg",
    background: "https://i.ytimg.com/vi/n4RjJKxsamQ/maxresdefault.jpg",
},  { title: "La Boda", artist: "Aventura", src: "Aventura - La Boda (Letra) - TED SAD.mp3",  duration: "4:50",
    cover: "https://www.cmtv.com.ar/tapas-cd/aventurakingsofbachata.webp",
    background: "https://www.cmtv.com.ar/tapas-cd/aventurakingsofbachata.webp",
},  { title: "Self Control ", artist: "Laura Branigan", src: "Laura Branigan - Self Control (Official Music Video) - RHINO.mp3",  duration: "5:08",
    cover: "https://i.ytimg.com/vi/RP0_8J7uxhs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAh5cjExe_rIogpcPUy3zC9Zto_Lw",
   background: "https://i.ytimg.com/vi/RP0_8J7uxhs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAh5cjExe_rIogpcPUy3zC9Zto_Lw",
},
{ title: " Total Eclipse of the Heart", artist: "Bonnie Tyler", src: "Bonnie Tyler - Total Eclipse of the Heart (Turn Around) (Official Video) - bonnietylerVEVO.mp3",  duration: "5:34",
    cover: "https://i.ytimg.com/vi/lcOxhH8N3Bo/maxresdefault.jpg",
    background: "https://i.ytimg.com/vi/lcOxhH8N3Bo/maxresdefault.jpg",
},  { title: "Entre dos tierras ", artist: "Héroes del Silencio", src: "Héroes del Silencio - Entre dos tierras (videoclip oficial) - Heroes Del Silencio Catálogo.mp3",  duration: "6:10",
    cover: "https://i.ytimg.com/vi/SzimletXB7M/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGOBYAC4AOKAgwIABABGH8gMigtMA8=&rs=AOn4CLCinJRCVO4nEVp5Z-ePmKf-bUz_iw",
    background: "https://i.ytimg.com/vi/SzimletXB7M/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGOBYAC4AOKAgwIABABGH8gMigtMA8=&rs=AOn4CLCinJRCVO4nEVp5Z-ePmKf-bUz_iw",
},  { title: " Bed Of Roses", artist: "BonJovi", src: "Bon Jovi - Bed Of Roses (Official Music Video) - BonJoviVEVO.mp3",  duration: "6:43",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLOPnoFbg2OaGotjiOg-uINe3PcxWG1fGWQ&s",
   background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLOPnoFbg2OaGotjiOg-uINe3PcxWG1fGWQ&s",
},  { title: "Knockin' On Heaven'", artist: "Guns N' Roses", src: "Guns N' Roses - Knockin' On Heaven's Door (Visualizer) - GunsNRosesVEVO.mp3",  duration: "5:36",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizfpqveNPVF4JPnP7_qZlE_Udqh6U4F2cfg&s",
   background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizfpqveNPVF4JPnP7_qZlE_Udqh6U4F2cfg&s",
 },

     // Agrega más canciones según necesites
 ];
 
 // Elementos del DOM
 const audioPlayer = document.getElementById('audio-player');
 const playBtn = document.getElementById('play-btn');
 const prevBtn = document.getElementById('prev-btn');
 const nextBtn = document.getElementById('next-btn');
 const shuffleBtn = document.getElementById('shuffle-btn');
 const repeatBtn = document.getElementById('repeat-btn');
 const progressBar = document.getElementById('progress-bar');
 const currentTimeEl = document.getElementById('current-time');
 const durationEl = document.getElementById('duration');
 const songTitle = document.getElementById('song-title');
 const artistEl = document.getElementById('artist');
 const coverImage = document.getElementById('cover-image');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const body = document.body;
 
 // Variables de estado
 let currentSongIndex = 0;
 let isPlaying = false;
 let isShuffled = false;
 let isRepeated = false;
 let originalPlaylist = [...songs];
 let currentPlaylist = [...songs];
 
 // Inicializar el reproductor
 function initPlayer() {
     loadSong(currentPlaylist[currentSongIndex]);
     renderPlaylist();
 }
 
 // Cargar canción
 function loadSong(song) {
     songTitle.textContent = song.title;
     artistEl.textContent = song.artist;
     coverImage.src = song.cover;
     audioPlayer.src = song.src;
     durationEl.textContent = song.duration;
     body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${song.background}')`;
     
     // Actualizar la clase 'playing' en la lista
     updatePlayingClass();
 }
 
 // Reproducir canción
 function playSong() {
     isPlaying = true;
     audioPlayer.play();
     playBtn.innerHTML = '<i class="fas fa-pause"></i>';
     document.querySelector('.player').classList.add('playing');
 }
 
 // Pausar canción
 function pauseSong() {
     isPlaying = false;
     audioPlayer.pause();
     playBtn.innerHTML = '<i class="fas fa-play"></i>';
     document.querySelector('.player').classList.remove('playing');
 }
 
 // Siguiente canción
 function nextSong() {
     currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
     loadSong(currentPlaylist[currentSongIndex]);
     if (isPlaying) playSong();
 }
 
 // Canción anterior
 function prevSong() {
     currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
     loadSong(currentPlaylist[currentSongIndex]);
     if (isPlaying) playSong();
 }
 
 // Barra de progreso
 function updateProgress() {
     const { currentTime, duration } = audioPlayer;
     const progressPercent = (currentTime / duration) * 100;
     progressBar.value = progressPercent;
     
     // Formatear tiempo
     const currentMinutes = Math.floor(currentTime / 60);
     const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
     currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
 }
 
 // Establecer progreso
 function setProgress(e) {
     const width = this.clientWidth;
     const clickX = e.offsetX;
     const duration = audioPlayer.duration;
     audioPlayer.currentTime = (clickX / width) * duration;
 }
 
 // Renderizar lista de reproducción
 function renderPlaylist() {
     playlistEl.innerHTML = '';
     currentPlaylist.forEach((song, index) => {
         const li = document.createElement('li');
         li.innerHTML = `
             <span>${song.title} - ${song.artist}</span>
             <span class="song-duration">${song.duration}</span>
         `;
         li.addEventListener('click', () => {
             currentSongIndex = index;
             loadSong(song);
             playSong();
         });
         playlistEl.appendChild(li);
     });
     updatePlayingClass();
 }
 
 // Actualizar clase 'playing' en la lista
 function updatePlayingClass() {
     const items = playlistEl.querySelectorAll('li');
     items.forEach((item, index) => {
         if (index === currentSongIndex) {
             item.classList.add('playing');
         } else {
             item.classList.remove('playing');
         }
     });
 }
 
 // Barajar lista
 function shufflePlaylist() {
     isShuffled = !isShuffled;
     shuffleBtn.style.color = isShuffled ? '#1db954' : 'white';
     
     if (isShuffled) {
         currentPlaylist = [...originalPlaylist].sort(() => Math.random() - 0.5);
     } else {
         currentPlaylist = [...originalPlaylist];
     }
     
     // Encontrar la canción actual en la nueva lista
     const currentSong = originalPlaylist[currentSongIndex];
     currentSongIndex = currentPlaylist.findIndex(song => 
         song.title === currentSong.title && song.artist === currentSong.artist);
     
     renderPlaylist();
 }
 
 // Repetir canción
 function toggleRepeat() {
     isRepeated = !isRepeated;
     repeatBtn.style.color = isRepeated ? '#1db954' : 'white';
 }
 
 // Buscar canción
 function searchSong() {
     const searchTerm = searchInput.value.toLowerCase();
     if (searchTerm === '') {
         currentPlaylist = [...originalPlaylist];
     } else {
         currentPlaylist = originalPlaylist.filter(song => 
             song.title.toLowerCase().includes(searchTerm) || 
             song.artist.toLowerCase().includes(searchTerm)
         );
     }
     renderPlaylist();
 }
 
 // Event listeners
 playBtn.addEventListener('click', () => {
     isPlaying ? pauseSong() : playSong();
 });
 
 nextBtn.addEventListener('click', nextSong);
 prevBtn.addEventListener('click', prevSong);
 
 audioPlayer.addEventListener('timeupdate', updateProgress);
 audioPlayer.addEventListener('ended', () => {
     if (isRepeated) {
         audioPlayer.currentTime = 0;
         playSong();
     } else {
         nextSong();
     }
 });
 
 progressBar.addEventListener('input', (e) => {
     const seekTime = (e.target.value / 100) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 shuffleBtn.addEventListener('click', shufflePlaylist);
 repeatBtn.addEventListener('click', toggleRepeat);
 
 searchBtn.addEventListener('click', searchSong);
 searchInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') searchSong();
 });
 
 // Inicializar
 initPlayer();
 
 // sonido de button play 
 document.getElementById('play-btn').addEventListener('click', function() {
     var audio = document.getElementById('myAudio');
     audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
     audio.play();});
   document.getElementById('menu').addEventListener('click', function() {
            var audio = document.getElementById('myAudio');
            audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
            audio.play();
            setTimeout(() => {
                // Cambia esta URL por la de tu sistema real
                window.location.href = "indexx.html";
            }, 2000);
        });
       
 
 // ocultar lista de musica
 document.addEventListener('DOMContentLoaded', function() {
     const toggleDiv = document.getElementById('toggleDiv');
     const showButton = document.getElementById('toggleButton');
     const countdownEl = document.getElementById('countdown');
     
     let countdown;
     let secondsLeft = 59;
     
     // Función para iniciar el contador de ocultado automático
     function startCountdown() {
         secondsLeft = 59;
         countdownEl.textContent = ` ${secondsLeft}`;
         
         clearInterval(countdown);
         
         countdown = setInterval(function() {
             secondsLeft--;
             countdownEl.textContent =  `${secondsLeft} `;
             
             if (secondsLeft <= 0) {
                 clearInterval(countdown);
                 hideDiv();
             }
         }, 1000);
     }
     
     // Función para ocultar el div
     function hideDiv() {
         toggleDiv.classList.remove('visible');
         toggleDiv.classList.add('hidden');
         showButton.disabled = false;
         countdownEl.textContent = '';
     }
     
     // Función para mostrar el div
     function showDiv() {
         toggleDiv.classList.remove('hidden');
         toggleDiv.classList.add('visible');
         showButton.disabled = true;
         
         // Iniciar el contador para ocultar automáticamente
         startCountdown();
     }
     
     // Configurar el evento click para el botón
     showButton.addEventListener('click', showDiv);
     
     // Iniciar el contador inicial
     startCountdown();
 });
 
 
 class OnlineStatus {
     constructor() {
         this.statusDot = document.getElementById('statusDot');
         this.statusText = document.getElementById('statusText');
         this.init();
     }
 
     init() {
         // Verificar estado inicial
         this.checkOnlineStatus();
         
         // Escuchar cambios en la conexión
         window.addEventListener('online', () => this.handleOnline());
         window.addEventListener('offline', () => this.handleOffline());
         
         // Verificar periódicamente (cada 30 segundos)
         setInterval(() => this.checkOnlineStatus(), 90000);
     }
 
     checkOnlineStatus() {
         if (navigator.onLine) {
             this.handleOnline();
         } else {
             this.handleOffline();
         }
     }
 
     handleOnline() {
         this.statusDot.className = 'status-doyo status-online';
         this.statusText.textContent = 'En línea';
         this.showNotification('Vuelves a tener conexión', 'success');
     }
 
     handleOffline() {
         this.statusDot.className = 'status-doyo status-offline';
         this.statusText.textContent = 'Sin conexión';
         this.showNotification('No hay conexión', 'error');
     }
 
     showNotification(message, type) {
         // Crear notificación temporal
         const notification = document.createElement('div');
         notification.style.cssText = `
             position: fixed;
             top: 20px;
             right: 20px;
             padding: 15px 20px;
             background: ${type === 'success' ? '#28a745' : '#dc3545'};
             color: white;
             border-radius: 5px;
             z-index: 1000;
             transition: opacity 0.3s ease;
         `;
         notification.textContent = message;
         
         document.body.appendChild(notification);
         
         // Remover después de 3 segundos
         setTimeout(() => {
             notification.style.opacity = '0';
             setTimeout(() => notification.remove(), 300);
         }, 3000);
     }
 }
 
 // Función para simular cambios de conexión (solo para pruebas)
 function simulateConnectionChange() {
     if (navigator.onLine) {
         // Simular offline
         const offlineEvent = new Event('offline');
         window.dispatchEvent(offlineEvent);
     } else {
         // Simular online
         const onlineEvent = new Event('online');
         window.dispatchEvent(onlineEvent);
     }
 }
 
 // Inicializar cuando el DOM esté listo
 document.addEventListener('DOMContentLoaded', () => {
     new OnlineStatus();
 });
 

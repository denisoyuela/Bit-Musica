// Lista de canciones (puedes agregar más)
const songs = [
      {title: "MySpace ", artist: "Don Omar-Wisin & Yandel", src: "MySpace (feat. Wisin & Yandel) - Don Omar.mp3",  duration: "3:42",
        cover: "https://cdn-images.dzcdn.net/images/cover/51e43fe6e66950acc58d364c338ccd4c/500x500.jpg",
        background: "https://cdn-images.dzcdn.net/images/cover/51e43fe6e66950acc58d364c338ccd4c/500x500.jpg",
       }, { title: "Sensacion Del Bloque", artist: "Randy & De La Ghetto", src: "Randy & De La Ghetto - Sensacion Del Bloque - GerN2K.mp3",  duration: "3:14",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkE5TEv1fC4YLDHV0ZzPQ7g4zTO05PMhY3Q&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkE5TEv1fC4YLDHV0ZzPQ7g4zTO05PMhY3Q&s",
       }, {
        title: "El Teléfono", artist: "Hector Bambino EL Father", src: " Hector Bambino EL Father, Wisin & Yandel - El Teléfono (Official Video) - Wisin & Yandel Fans.mp3",  duration: "3:58",
        cover: "https://i.ytimg.com/vi/5ensVGQU9Xg/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHOBYAC0AWKAgwIABABGDIgWyhyMA8=&rs=AOn4CLAaYl86L9_OImznLECFE4UXvZUY-A",
        background: "https://i.ytimg.com/vi/5ensVGQU9Xg/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHOBYAC0AWKAgwIABABGDIgWyhyMA8=&rs=AOn4CLAaYl86L9_OImznLECFE4UXvZUY-A",
     },  { title: "Me Niegas", artist: "Baby Rasta y Gringo", src: "Baby Rasta y Gringo - Me Niegas (Official Video) - BabyRastaGringoVEVO.mp3",  duration: "3:27",
        cover: "https://i.ytimg.com/vi/xfHZOY03y2w/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/xfHZOY03y2w/maxresdefault.jpg",
       },  { title: "Dices", artist: "De la Ghetto", src: "De la Ghetto - Dices [Official Video] - De La Ghetto.mp3",  duration: "3:41",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZpCNDL_WC5WbI6Mb6m__SvIOpx4NdYZgAg&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZpCNDL_WC5WbI6Mb6m__SvIOpx4NdYZgAg&s",
       },  { title: "Intimidad", artist: "Farruko", src: "Farruko - Intimidad (Cover Audio) - FARRUKOVEVO.mp3",  duration: "4:05",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEj_IBcOuINgtZzJQu4v_wo46sEfNWPB0Jg&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEj_IBcOuINgtZzJQu4v_wo46sEfNWPB0Jg&s",
       },  { title: "Cositas Que Haciamos", artist: "Farruko", src: "Farruko - Cositas Que Haciamos (Official Video) - FARRUKOVEVO.mp3",  duration: "4:17",
        cover: "https://i.ytimg.com/vi/B4uUmhAhc6A/maxresdefault.jpg",
       background: "https://i.ytimg.com/vi/B4uUmhAhc6A/maxresdefault.jpg",
       },  { title: "Chulo Sin H ft.", artist: "De La Ghetto", src: "De La Ghetto - Chulo Sin H ft. Jowell & Randy [Official Video] - De La Ghetto.mp3",  duration: "4:25",
        cover: "https://i.ytimg.com/vi/o9jTh9Rs6b0/mqdefault.jpg",
        background: "https://i.ytimg.com/vi/o9jTh9Rs6b0/mqdefault.jpg",
       },  { title: "Algo Me Gusta De Ti", artist: "WisinYYandel", src: "Algo Me Gusta De Ti (Official Video) - WisinYYandelVEVO.mp3",  duration: "4:56",
        cover: "https://i.ytimg.com/vi/Vb5hquFJ988/maxresdefault.jpg",
      background: "https://i.ytimg.com/vi/Vb5hquFJ988/maxresdefault.jpg",
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

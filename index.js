var sounds = [
    { name: "Waves", src: "./waves.ogg", image: "./img/waves.svg" },
    { name: "Storm", src: "./storm.ogg", image: "./img/storm.svg" },
    { name: "Rain", src: "./rain.ogg", image: "./img/rain.svg" },
    { name: "Stream", src: "./stream.ogg", image: "./img/stream.svg" },
    { name: "Bird", src: "./birds.ogg", image: "./img/birds.svg" },
    { name: "Boat", src: "./boat.ogg", image: "./img/boat.svg" },
    { name: "City", src: "./city.ogg", image: "./img/city.svg" },
    { name: "Coffe-shop", src: "./coffee-shop.ogg", image: "./img/coffee.svg" },
    { name: "Fireplace", src: "./fireplace.ogg", image: "./img/fireplace.svg" },
    { name: "Pink-Noise", src: "./pink-noise.ogg", image: "./img/pink.svg" },
    { name: "Summer-night", src: "./summer-night.ogg", image: "./img/night.svg" },
    { name: "Train.ogg", src: "./train.ogg", image: "./img/train.svg" },
    { name: "White-noise", src: "./white-noise.ogg", image: "./img/white.svg" },
    { name: "Wind", src: "./wind.ogg", image: "./img/wind.svg" }
];

var loadedSounds = 4   ; // Contador de sonidos cargados hasta ahora

// Función para cargar los sonidos
// Función para cargar los sonidos
function loadSounds(containerId, sounds, start, end) {
    var container = document.getElementById(containerId);
    for (var i = start; i < end; i++) {
        var sound = sounds[i];
        var soundElement = document.createElement('div');
        soundElement.classList.add('sound');
        soundElement.innerHTML = '<img src="' + sound.image + '" alt="Icono de Sonido">' +
            '<audio loop>' +
            '  <source src="' + sound.src + '" type="audio/mpeg">' +
            '  Your browser does not support the audio element.' +
            '</audio>' +
            '<input class="volume-bar" type="range" min="0" max="100" value="0">';
        
        // Añadir el botón de eliminación solo para sonidos adicionales
        if (i >= loadedSounds) {
            soundElement.innerHTML += '<button class="remove-sound">Quitar</button>';
        }
        
        container.appendChild(soundElement);
    }
    attachRemoveSoundListeners(); // Adjuntar oyentes para quitar sonidos
}


// Cargar los 4 sonidos principales
loadSounds('main-sounds', sounds, 0, loadedSounds);

// Manejador de cambio de volumen
document.querySelectorAll('.volume-bar').forEach(function(volumeBar) {
    volumeBar.addEventListener('input', function(event) {
        var audio = event.target.parentNode.querySelector('audio');
        audio.volume = event.target.value / 100;
        if (event.target.value > 0 && audio.paused) {
            audio.play();
        }
    });
});

// Cargar opciones de sonidos adicionales en el desplegable
var moreSoundsDropdown = document.getElementById('more-sounds-dropdown');
for (var i = loadedSounds; i < sounds.length; i++) {
    var option = document.createElement('option');
    option.text = sounds[i].name;
    moreSoundsDropdown.add(option);
}

// Manejador de cambio en el desplegable
moreSoundsDropdown.addEventListener('change', function(event) {
    var selectedIndex = event.target.selectedIndex;
    // Si el índice seleccionado es 0 (primer elemento), no hacer nada
    if (selectedIndex === 0) return;
    // Ajustar el índice para obtener el sonido correcto del array sounds
    var selectedSound = sounds[loadedSounds + selectedIndex - 1];
    addSound(selectedSound);
});


// Agregar sonido al div de sonidos adicionales
function addSound(sound) {
    var extraSoundsContainer = document.getElementById('extra-sounds');
    var soundElement = document.createElement('div');
    soundElement.classList.add('sound');
    soundElement.innerHTML = '<img src="' + sound.image + '" alt="Icono de Sonido">' +
        '<audio loop>' +
        '  <source src="' + sound.src + '" type="audio/mpeg">' +
        '  Your browser does not support the audio element.' +
        '</audio>' +
        '<input class="volume-bar" type="range" min="0" max="100" value="0">' +
        '<button class="remove-sound">Quitar</button>';
    extraSoundsContainer.appendChild(soundElement);
    attachRemoveSoundListeners(); // Adjuntar oyentes para quitar sonidos
}

// Adjuntar oyentes para quitar sonidos
function attachRemoveSoundListeners() {
    document.querySelectorAll('.remove-sound').forEach(function(removeButton) {
        removeButton.addEventListener('click', function(event) {
            var soundToRemove = event.target.parentNode;
            soundToRemove.parentNode.removeChild(soundToRemove);
        });
    });
}

// Agregar sonido al div de sonidos adicionales
function addSound(sound) {
    var extraSoundsContainer = document.getElementById('extra-sounds');
    var soundElement = document.createElement('div');
    soundElement.classList.add('sound');
    soundElement.innerHTML = '<img src="' + sound.image + '" alt="Icono de Sonido">' +
        '<audio loop>' +
        '  <source src="' + sound.src + '" type="audio/mpeg">' +
        '  Your browser does not support the audio element.' +
        '</audio>' +
        '<input class="volume-bar" type="range" min="0" max="100" value="0">' +
        '<button class="remove-sound">Quitar</button>';
    extraSoundsContainer.appendChild(soundElement);
    attachVolumeChangeEvent(soundElement); // Adjuntar oyente para el cambio de volumen
    attachRemoveSoundListeners(); // Adjuntar oyentes para quitar sonidos
}

// Adjuntar oyente para el cambio de volumen
function attachVolumeChangeEvent(soundElement) {
    soundElement.querySelector('.volume-bar').addEventListener('input', function(event) {
        var audio = soundElement.querySelector('audio');
        audio.volume = event.target.value / 100;
        if (event.target.value > 0 && audio.paused) {
            audio.play();
        }
    });
}


const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
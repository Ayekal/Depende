document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicUntoggle = document.getElementById('musicUntoggle');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // Set initial volume
    backgroundMusic.volume = 0.5;

    // Start playing music when page loads
    backgroundMusic.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });

    // Music toggle functionality
    musicToggle.addEventListener('click', () => {
        backgroundMusic.pause();
        musicToggle.classList.add('hidden');
        musicUntoggle.classList.remove('hidden');
    });

    // Music untoggle functionality
    musicUntoggle.addEventListener('click', () => {
        backgroundMusic.play();
        musicUntoggle.classList.add('hidden');
        musicToggle.classList.remove('hidden');
    });

    // Volume slider functionality
    volumeSlider.addEventListener('input', () => {
        backgroundMusic.volume = volumeSlider.value;
    });
});
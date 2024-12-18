document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicUntoggle = document.getElementById('musicUntoggle');
    const volumeSlider = document.getElementById('volumeSlider');
    
    const imageGallery = document.getElementById('imageGallery');
    const images = [
        './images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', 
        './images/img5.jpg', './images/img6.jpg', './images/img7.jpg', './images/img8.jpg', 
        './images/img9.jpg', './images/img10.jpg', './images/img11.jpg', './images/img12.jpg', 
        './images/img13.jpg', './images/img14.jpg', './images/img15.jpg'
    ];

    // Duplicate images to fill more space and create a fuller gallery
    const fullImages = [...images, ...images, ...images];

    // Shuffle images to create a more dynamic layout
    const shuffledImages = fullImages.sort(() => 0.5 - Math.random());

    // Create a masonry-like grid layout
    shuffledImages.forEach((imageName, index) => {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');
        
        // Add varying sizes to create visual interest
        const sizeClasses = ['small', 'medium', 'large'];
        const randomSizeClass = sizeClasses[index % sizeClasses.length];
        imgWrapper.classList.add(randomSizeClass);
        
        const img = document.createElement('img');
        img.src = imageName;
        img.alt = `Memory ${imageName}`;
        img.loading = 'lazy'; // Improve performance
        
        const overlay = document.createElement('div');
        overlay.classList.add('image-overlay');
        
        // Add a subtle zoom effect on hover
        img.addEventListener('mouseenter', () => {
            img.classList.add('img-zoom');
        });
        
        img.addEventListener('mouseleave', () => {
            img.classList.remove('img-zoom');
        });
        
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(overlay);
        imageGallery.appendChild(imgWrapper);
    });

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

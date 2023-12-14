// gallery.js

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const closeBtn = overlay.querySelector('.close-btn');

gallery.addEventListener('click', (e) => {
    // alert("worjking gallery");
    if (e.target.classList.contains('image')) {
        const imgSrc = e.target.querySelector('img').src;
        overlayImage.src = imgSrc;
        overlay.style.display = 'flex';
    }
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});
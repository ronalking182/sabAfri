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






/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

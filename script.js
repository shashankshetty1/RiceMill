
const scriptURL = 'https://script.google.com/macros/s/AKfycbxmDNHOSiN4OkaGUYGCtypIf3SpIzX4Z8fuzFNlJi_fLUCUQoAsHuXKugK-yfTevnPL/exec';

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors', // Important for Google Apps Script!
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => alert("Fetch Error: " + error.message));
});



// Hero Section Slider
const heroImages = [
    'images/rice.jpeg',
    'images/rice2.jpg',
    'images/rice3.jpg'
];

let heroIndex = 0;
const heroSection = document.querySelector('.hero');

function showHeroSlide(index) {
    heroSection.style.transition = 'background 1s ease-in-out';
    heroSection.style.background = `url('${heroImages[index]}') no-repeat center center/cover`;
}

function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    showHeroSlide(heroIndex);
}

// Auto slide hero background every 4 seconds
setInterval(nextHeroSlide, 4000);


// Gallery Section Slider
const galleryImages = document.querySelectorAll('.gallery-images img');
let galleryIndex = 0;

function slideGalleryImages() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    const offset = -galleryIndex * 100;
    document.querySelector('.gallery-images').style.transform = `translateX(${offset}%)`;
}

// Auto slide gallery images every 4 seconds
setInterval(slideGalleryImages, 4000);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}








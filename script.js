function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}
const images = [
    "images/p3.png",
    "images/p4.png",
    "images/p5.png",
    "images/p6.png"
];

let currentImageIndex = 0;


function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slideshow-image").src = images[currentImageIndex];
}


setInterval(changeImage, 2000);

function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting in the default way
    alert("Form submitted successfully!"); // Shows alert
    window.location.href = "index.html"; // Redirects to index.html
}

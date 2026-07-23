// ==============================
// Smooth Scroll for Navigation
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ==============================
// Navbar Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
        header.style.background = "rgba(248,244,239,.98)";

    } else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.05)";
        header.style.background = "rgba(248,244,239,.95)";

    }

});


// ==============================
// Fade In Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// Hero Parallax Effect
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.5 + "px";

});


// ==============================
// Gallery Lightbox
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.id = "lightbox";

        lightbox.innerHTML = `
            <img src="${img.src}">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {

            lightbox.remove();

        });

    });

});


// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    const email = form.querySelector('input[type="email"]').value.trim();

    if(name === "" || email === ""){

        alert("Please complete all required fields.");

        return;

    }

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ==============================
// Scroll To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#8E6E53";
topButton.style.color = "white";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

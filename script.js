/*==================================================
        FOREVER LINKED
        script.js
==================================================*/

/*=========================
        MOBILE MENU
=========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show-menu");

        });

    });

}


/*=========================
      STICKY HEADER
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*=========================
    SCROLL TO TOP BUTTON
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================
      SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================
    ACTIVE NAVIGATION
=========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================
      SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
    ".about, .features, .collections, .gallery, .testimonials, .booking, .contact, .instagram"
);

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/*=========================
      GALLERY LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.id = "lightbox";

        const img = document.createElement("img");

        img.src = image.src;

        img.alt = image.alt;

        lightbox.appendChild(img);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {

            lightbox.remove();

        });

    });

});


/*=========================
    SIMPLE FADE-IN HERO
=========================*/

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";

        heroContent.style.transform = "translateY(40px)";

        setTimeout(() => {

            heroContent.style.transition = "all .9s ease";

            heroContent.style.opacity = "1";

            heroContent.style.transform = "translateY(0)";

        }, 300);

    }

});


/*=========================
      CURRENT YEAR
=========================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Forever Linked Permanent Jewelry. All Rights Reserved.`;

}

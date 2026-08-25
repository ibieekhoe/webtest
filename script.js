//====================================
// MOBILE MENU
//====================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

    if(nav.classList.contains("show")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

//====================================
// CLOSE MENU WHEN LINK IS CLICKED
//====================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("show");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

//====================================
// STICKY HEADER
//====================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        header.style.background = "#050505";
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";

    }

});

//====================================
// ACTIVE NAVIGATION
//====================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

//====================================
// SCROLL REVEAL
//====================================

const reveals = document.querySelectorAll(
".service-box, .dog-card, .process-box, .gallery-item, .testimonial-card, .about-image, .about-text, .booking-content, .booking-form, .contact-info, .contact-form"
);

function revealElements(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

//====================================
// BACK TO TOP
//====================================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backTop.style.opacity="1";
        backTop.style.pointerEvents="auto";

    }else{

        backTop.style.opacity="0";
        backTop.style.pointerEvents="none";

    }

});

//====================================
// SMOOTH SCROLL
//====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
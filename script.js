// ===== PAGE LOADER =====
const loader = document.getElementById("loader");
document.body.classList.add("hidden");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    loader.style.transition = "0.8s ease";

    document.body.classList.remove("hidden");

    setTimeout(() => {
      loader.remove();
      revealHero();
    }, 800);
  }, 1800);
});

// ===== HERO REVEAL =====
function revealHero() {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 1;
  hero.style.transform = "translateY(0)";
  hero.style.transition = "1s ease";
}

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "0.8s ease";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// ===== PARALLAX HERO TEXT =====
const heroText = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  heroText.style.transform = `translateY(${value * 0.3}px)`;
});

// ===== TYPING EFFECT =====
const text = "Frontend Web Developer";
let index = 0;
const target = document.querySelector(".hero-content h2");

target.textContent = "";

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

setTimeout(typeEffect, 2300);


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));



// ===== 3D CARD EFFECT =====
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// ===== MOBILE NAVBAR =====
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

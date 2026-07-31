/* ==========================================================
   Zandile Cuban Mayisela — Virtual CV
   script.js — mobile navigation + scroll-based active link
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile menu toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Close the menu automatically once a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = '☰';
      });
    });
  }

  /* ---- Highlight the current section in the nav while scrolling ---- */
  const sections = document.querySelectorAll('main section[id], header[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const highlightActiveLink = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120; // offset for sticky nav height

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    navAnchors.forEach(anchor => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // run once on load

  /* ---- Fade sections in as they enter the viewport ---- */
  const revealTargets = document.querySelectorAll('section, .contact-box');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(target => {
      target.classList.add('pre-reveal');
      observer.observe(target);
    });
  }

});

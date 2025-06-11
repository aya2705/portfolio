document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const blurOverlay = document.getElementById('blurOverlay');
    const contactForm = document.getElementById('contactForm');

    // Ouvrir la modal
    contactBtn.addEventListener('click', function () {
        contactModal.classList.add('show');
        blurOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêche le défilement
    });

    // Fermer la modal
    closeModal.addEventListener('click', function () {
        contactModal.classList.remove('show');
        blurOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Rétablit le défilement
    });

    // Fermer en cliquant à l'extérieur
    blurOverlay.addEventListener('click', function () {
        contactModal.classList.remove('show');
        blurOverlay.style.display = 'none';
        document.body.style.overflow = '';
    });
});




    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('bx-x'); // change l’icône en croix
      menuIcon.classList.toggle('bx-menu'); // bascule entre menu et croix
    });
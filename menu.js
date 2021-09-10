const hamburgerButton = document.querySelector('#hamburger');
function displayMobileMenu() {
  const mobileMenuDiv = document.querySelector('.menu-hidden');
    mobileMenuDiv.classList.add('menu-content');
    hamburgerButton.style.display = 'none';
}

hamburgerButton.addEventListener('click', displayMobileMenu);

function closeMobileMenu() {
  const mobileMenuDiv = document.querySelector('.menu-hidden');
  mobileMenuDiv.classList.remove('menu-content');
  hamburgerButton.style.display = 'block';
}

const closeButton = document.querySelector('#close-icon');
closeButton.addEventListener('click', closeMobileMenu);

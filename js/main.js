window.onload = function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
      initializeNav(); // Llama a la función de inicialización después de cargar el navbar
    });
};

function initializeNav() {
  const navButton = document.querySelector('.nav-button');
  const nav = document.getElementById('nav');
  const navBackground = document.getElementById('nav-background');
  const subNavBackground = document.getElementById('sub-nav-background');
  let navVisible = false;
  let subNavVisible = false;

  function toggleNav() {
    navVisible = !navVisible;
    nav.setAttribute('data-visible', navVisible ? 'true' : 'false');
    navButton.setAttribute('aria-expanded', navVisible ? 'true' : 'false');
  }

  function toggleSubNav() {
    subNavVisible = !subNavVisible;
    navBackground.style.display = subNavVisible ? 'none' : 'block';
    subNavBackground.style.display = subNavVisible ? 'block' : 'none';
  }

  function toggleMainNav() {
    subNavVisible = false;
    navBackground.style.display = 'block';
    subNavBackground.style.display = 'none';
  }

  navButton.addEventListener('click', toggleNav);

  document.querySelectorAll('a.toggle-nav').forEach(link => {
    link.addEventListener('click', toggleNav);
  });

  document.querySelectorAll('a.toggle-subnav').forEach(link => {
    link.addEventListener('click', toggleSubNav);
  });

  document.querySelectorAll('a.toggle-main-nav').forEach(link => {
    link.addEventListener('click', toggleMainNav);
  });

  console.log("funciona bien:)");
}
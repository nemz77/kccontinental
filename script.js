// Theme switcher
document.addEventListener('DOMContentLoaded', function() {

  const defaultThemeButton = document.getElementById('default-theme');
  const eggshellThemeButton = document.getElementById('eggshell-theme');
  const minimalThemeButton = document.getElementById('minimal-theme');
  const peachThemeButton = document.getElementById('peach-theme');
  const greenThemeButton = document.getElementById('green-theme');
  const burgundyThemeButton = document.getElementById('burgundy-theme');

  // Check if there's a theme already stored
  const savedTheme = localStorage.getItem('kccsTheme');
  if (savedTheme) {
    document.body.className = savedTheme;

    document.querySelectorAll('.theme-button').forEach(btn => {
      btn.classList.remove('active');
    });

    if (savedTheme === 'theme-eggshell') {
      eggshellThemeButton.classList.add('active');
    } else if (savedTheme === 'theme-minimal') {
      peachThemeButton.classList.add('active');
    } else if (savedTheme === 'theme-peach') {
      peachThemeButton.classList.add('active');
    } else if (savedTheme === 'theme-green') {
      greenThemeButton.classList.add('active');
    } else if (savedTheme === 'theme-burgundy') {
      burgundyThemeButton.classList.add('active');
    } else {
      defaultThemeButton.classList.add('active');
    }
  }

  defaultThemeButton.addEventListener('click', function() {
    document.body.className = '';
    localStorage.setItem('kccsTheme', '');
    updateActiveButton(this);
  });

  eggshellThemeButton.addEventListener('click', function() {
    document.body.className = 'theme-eggshell';
    localStorage.setItem('kccsTheme', 'theme-eggshell');
    updateActiveButton(this);
  });

  minimalThemeButton.addEventListener('click', function() {
    document.body.className = 'theme-minimal';
    localStorage.setItem('kccsTheme', 'theme-minimal');
    updateActiveButton(this);
  });

  peachThemeButton.addEventListener('click', function() {
    document.body.className = 'theme-peach';
    localStorage.setItem('kccsTheme', 'theme-peach');
    updateActiveButton(this);
  });

  greenThemeButton.addEventListener('click', function() {
    document.body.className = 'theme-green';
    localStorage.setItem('kccsTheme', 'theme-green');
    updateActiveButton(this);
  });

  burgundyThemeButton.addEventListener('click', function() {
    document.body.className = 'theme-burgundy';
    localStorage.setItem('kccsTheme', 'theme-burgundy');
    updateActiveButton(this);
  });

  function updateActiveButton(activeButton) {
    document.querySelectorAll('.theme-button').forEach(btn => {
      btn.classList.remove('active');
    });
    activeButton.classList.add('active');
  }
});

// Mobile Drop Down Menu
// Referenced mobile navigation bar code from:
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
  function toggleMenu() {
    const x = document.getElementById("nav-links");
    if (x.style.display === "flex") {
  x.style.display = "none";
} else {
  x.style.display = "flex";
}
}

// Clicking to Enlarge Image
document.querySelectorAll('.image-note-map').forEach(img => {
  img.addEventListener('click', function(event) {
    event.stopPropagation();

    // If the image is already enlarged, reset it
    if (this.classList.contains('enlarged')) {
      this.classList.remove('enlarged');
    } else {
      document.querySelectorAll('.image-note-map').forEach(i => {
        i.classList.remove('enlarged');
      });

      this.classList.add('enlarged');
    }
  });
});

// Reset image when clicking outside
document.addEventListener('click', function() {
  const images = document.querySelectorAll('.image-note-map');
  images.forEach(img => {
    img.classList.remove('enlarged');
  });
});

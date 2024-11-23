// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};


//Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector('.typing-effect');
  const texts = [
    "Hello Everyone 👋, I am",
    "Estomihi Pangaribuan"
  ]; 

  let textIndex = 0; 
  let charIndex = 0; 

  const typeText = () => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex][charIndex]; 
        charIndex++;
        setTimeout(typeText, 100); 
      } else {
        charIndex = 0; 
        textIndex++; 
        if (textIndex < texts.length) {
          setTimeout(() => {
            typingElement.textContent += " "; 
            typeText();
          }, 500); 
        }
      }
    }
  };

  typeText();
});



// Inisialisasi tema dari localStorage atau preferensi sistem
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Setup dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// Set posisi toggle sesuai tema saat ini
darkToggle.checked = document.documentElement.classList.contains('dark');

// Event listener untuk toggle
darkToggle.addEventListener('change', function () {
  if (this.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});


// Setup dark mode toggle
const darkToggle2 = document.querySelector('#dark-toggle2'); 
const html2 = document.querySelector('html');

// Set posisi toggle sesuai tema saat ini
darkToggle2.checked = document.documentElement.classList.contains('dark');

// Event listener untuk toggle
darkToggle2.addEventListener('change', function() {
  if (this.checked) {
      html2.classList.add('dark');
      localStorage.theme = 'dark';
  } else {
      html2.classList.remove('dark');
      localStorage.theme = 'light';
  }
});



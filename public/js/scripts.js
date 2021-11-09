const theme = document.querySelector('.theme');
const logo = document.querySelectorAll('.logo');
const links = document.querySelectorAll('a');
const bars = document.querySelectorAll('.label');

theme.addEventListener('click', darkTheme);

if (localStorage.getItem('theme')) {
} else {
  localStorage.setItem('theme', 'false');
}
if (localStorage.theme === 'true') {
  changeTheme();
}

function darkTheme() {
  localStorage.theme = localStorage.theme === 'false' ? 'true' : 'false';
  changeTheme();
}

function changeTheme() {
  for (let elem of bars) {
    elem.classList.toggle('dark-bg');
  }
  for (let elem of links) {
    elem.classList.toggle('dark-link');
  }
  for (let elem of logo) {
    elem.classList.toggle('dark-logo');
  }
  theme.classList.toggle('dark-bg');
}

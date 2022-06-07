import clear from './clear';
import home from './home'
import menu from './menu'
import contact from './contact'

home();

let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
}

let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
}

let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
}
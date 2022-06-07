let nav = () => {
  // Creating nav
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  // nav: Logo
  const logo = document.createElement('div')
  logo.classList.add('logo')
  logo.innerHTML = "Vary Good Restaurant"

  // nav: Home
  const home = document.createElement('button')
  home.classList.add('home')
  home.id = 'home'
  home.innerHTML = "Home"

  // nav: Menu
  const menu = document.createElement('button')
  menu.classList.add('menu')
  menu.id = 'menu'
  menu.innerHTML = "Menu"

  // nav: Contact
  const contact = document.createElement('button')
  contact.classList.add('contact')
  contact.id = 'contact'
  contact.innerHTML = "Contact Us"
  
  // Append to nav
  nav.appendChild(logo)
  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(contact)

  return nav;
}

export default nav;
let contact = () => {
  let content = document.getElementById('content')
  content.classList.add('contact');

  // Change contact button to active
  let contactBtn = document.getElementById('contact');
  contactBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Contact Us!';
  container.appendChild(headline);

  let contact = document.createElement('p');
  contact.innerHTML = "Main Telephone: 1234 5678"
  container.appendChild(contact)

  content.appendChild(container)
}

export default contact;
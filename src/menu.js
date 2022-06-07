let menu = () => {
  let content = document.getElementById('content')
  content.classList.add('menu');

  // Change menu button to active
  let menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Seasonal Menu';
  container.appendChild(headline);

  let menu = document.createElement('ul');
  let items = ['Spicy Bamboo Shoots', 'Sweet Potato Leaves', 'Sugar Cane Drinks']

  for (let i=0; i< items.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = items[i];
    menu.appendChild(item);
  }

  container.appendChild(menu);

  content.appendChild(container)
}

export default menu;
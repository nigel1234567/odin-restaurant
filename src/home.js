import Icon from './icon.png'
import Food from './food.png'
import nav from './nav'

let home = () => {
  const content = document.getElementById("content")

  const container = document.createElement('div')
  container.classList.add('container')

  // Append Navbar to container
  if (!document.querySelector('nav')) {
    let navbar = nav()
    content.appendChild(navbar);
  }

  // Creating Welcome
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');

  // Welcome: Title
  const title = document.createElement('div')
  title.id = title
  title.innerHTML = "Welcome to Vary Good!"

  // Welcome: Text-body
  const text = document.createElement('div')
  text.classList.add('text-body')
  title.innerHTML = "This restaurant has a variety of food (hence the 'Vary') that caters to all diets and foodies!"

  // Append Welcome
  welcome.appendChild(title)
  welcome.appendChild(text)

  // Append Welcome to container
  container.appendChild(welcome)

  // Creating container body
  const containerBody = document.createElement('div')
  containerBody.classList.add('container-body')

  // container-body: Creating Chef
  const chef = document.createElement('div')
  chef.classList.add('chef')

  // Chef: Our chef
  const ourChef = document.createElement('p')
  ourChef.classList.add('our-chef')
  ourChef.innerHTML = "Our Chef"

  // Chef: Image
  const chefImage = document.createElement('img')
  chefImage.src = Icon;
  chefImage.alt = "Our chef"
  chefImage.width = 400;
  chefImage.height = 400;

  // Append to chef
  chef.appendChild(ourChef)
  chef.appendChild(chefImage)

  // Append chef to container body
  containerBody.appendChild(chef);

  // container-body: Creating food
  const food = document.createElement('div')
  food.classList.add('food')

  // Food: Our food
  const ourFood = document.createElement('p')
  ourFood.classList.add('our-food')
  ourFood.innerHTML = "Our Food"

  // Food: Image
  const foodImage = document.createElement('img')
  foodImage.src = Food;
  foodImage.alt = "Our food"
  foodImage.width = 400;
  foodImage.height = 400;

  // Append to food
  food.appendChild(ourFood)
  food.appendChild(foodImage)

  // Append food to container body
  containerBody.appendChild(food);

  // Append container body to container
  container.appendChild(containerBody);

  content.appendChild(container);
}

export default home
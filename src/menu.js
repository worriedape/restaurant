/* import lavender from "./images/lavender-honeycomb-dream.png";
import mango from "./images/mango-sticky-rice-swirl.png";
import midnight from "./images/midnight-mint-mocha.png";
import salted from "./images/salted-caramel-pretzel-crunch.png";
import spiced from "./images/spiced-pear-and-ginger-snap.png";
import strawberry from "./images/strawberry-basil-bliss.png";

const images = {
  "Midnight Mint Mocha": midnight,
  "Strawberry Basil Bliss": strawberry,
  "Salted Caramel Pretzel Crunch": salted,
  "Lavender Honeycomb Dream": lavender,
  "Spiced Pear & Ginger Snap": spiced,
  "Mango Sticky Rice Swirl": mango,
};

const specialtyIceCreams = [
  {
    name: "Midnight Mint Mocha",
    ingredients: [
      "Dark chocolate ice cream",
      "Peppermint extract",
      "Espresso swirl",
      "Chocolate shavings",
      "Mini chocolate chips",
    ],
    price: 6.99,
    description:
      "A rich and decadent blend of dark chocolate, mint, and coffee.",
  },
  {
    name: "Strawberry Basil Bliss",
    ingredients: [
      "Fresh strawberry ice cream",
      "Chopped fresh basil",
      "Balsamic glaze drizzle",
      "Candied lemon peel",
    ],
    price: 7.49,
    description:
      "A surprisingly refreshing and sophisticated flavor combination.",
  },
  {
    name: "Salted Caramel Pretzel Crunch",
    ingredients: [
      "Salted caramel ice cream",
      "Crushed pretzel pieces",
      "Caramel sauce swirl",
      "Toffee bits",
    ],
    price: 6.49,
    description:
      "Sweet, salty, and crunchy – a perfect balance of textures and flavors.",
  },
  {
    name: "Lavender Honeycomb Dream",
    ingredients: [
      "Lavender infused ice cream",
      "Honeycomb candy pieces",
      "Honey drizzle",
      "Edible flower petals",
    ],
    price: 7.99,
    description: "Floral and sweet, a delicate and aromatic treat.",
  },
  {
    name: "Spiced Pear & Ginger Snap",
    ingredients: [
      "Pear ice cream with cinnamon and nutmeg",
      "Crumbled ginger snap cookies",
      "Caramelized pear pieces",
      "Ginger syrup swirl",
    ],
    price: 6.75,
    description: "Warm and comforting, perfect for fall or winter.",
  },
  {
    name: "Mango Sticky Rice Swirl",
    ingredients: [
      "Coconut milk ice cream",
      "Mango puree swirl",
      "Sticky rice pieces",
      "Toasted coconut flakes",
    ],
    price: 7.25,
    description:
      "Inspired by the classic Thai dessert, a tropical and creamy delight.",
  },
];

export function displayMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const title = document.createElement("h2");
  title.textContent = "Specialty Ice Cream Menu";
  content.appendChild(title);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("menu-grid");
  content.appendChild(gridContainer);

  specialtyIceCreams.forEach((iceCream) => {
    const card = document.createElement("div");
    card.classList.add("ice-cream-card");

    const img = document.createElement("img");
    img.src = images[iceCream.name];
    img.alt = iceCream.name;

    const name = document.createElement("h3");
    name.textContent = iceCream.name;

    const price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = `$${iceCream.price}`;

    const description = document.createElement("p");
    description.textContent = iceCream.description;

    const ingredients = document.createElement("ul");
    iceCream.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredients.appendChild(li);
    });

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(ingredients);

    gridContainer.appendChild(card);
  });
}
 */

// Constants
const MENU_TITLE = 'Specialty Ice Cream Menu';
const IMAGE_PATHS = {
  lavender: new URL('./images/lavender-honeycomb-dream.png', import.meta.url),
  mango: new URL('./images/mango-sticky-rice-swirl.png', import.meta.url),
  midnight: new URL('./images/midnight-mint-mocha.png', import.meta.url),
  salted: new URL('./images/salted-caramel-pretzel-crunch.png', import.meta.url),
  spiced: new URL('./images/spiced-pear-and-ginger-snap.png', import.meta.url),
  strawberry: new URL('./images/strawberry-basil-bliss.png', import.meta.url)
};

// Data model
const SPECIALTY_ICE_CREAMS = [
  {
    id: 'midnight-mint',
    name: 'Midnight Mint Mocha',
    ingredients: [
      'Dark chocolate ice cream',
      'Peppermint extract',
      'Espresso swirl',
      'Chocolate shavings',
      'Mini chocolate chips'
    ],
    price: 6.99,
    description: 'A rich and decadent blend of dark chocolate, mint, and coffee.',
    image: IMAGE_PATHS.midnight
  },
  {
    id: 'strawberry-basil',
    name: 'Strawberry Basil Bliss',
    ingredients: [
      'Fresh strawberry ice cream',
      'Chopped fresh basil',
      'Balsamic glaze drizzle',
      'Candied lemon peel'
    ],
    price: 7.49,
    description: 'A surprisingly refreshing and sophisticated flavor combination.',
    image: IMAGE_PATHS.strawberry
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel Pretzel Crunch',
    ingredients: [
      'Salted caramel ice cream',
      'Crushed pretzel pieces',
      'Caramel sauce swirl',
      'Toffee bits'
    ],
    price: 6.49,
    description: 'Sweet, salty, and crunchy – a perfect balance of textures and flavors.',
    image: IMAGE_PATHS.salted
  },
  {
    id: 'lavender',
    name: 'Lavender Honeycomb Dream',
    ingredients: [
      'Lavender infused ice cream',
      'Honeycomb candy pieces',
      'Honey drizzle',
      'Edible flower petals'
    ],
    price: 7.99,
    description: 'Floral and sweet, a delicate and aromatic treat.',
    image: IMAGE_PATHS.lavender
  },
  {
    id: 'spiced-pear',
    name: 'Spiced Pear & Ginger Snap',
    ingredients: [
      'Pear ice cream with cinnamon and nutmeg',
      'Crumbled ginger snap cookies',
      'Caramelized pear pieces',
      'Ginger syrup swirl'
    ],
    price: 6.75,
    description: 'Warm and comforting, perfect for fall or winter.',
    image: IMAGE_PATHS.spiced
  },
  {
    id: 'mango',
    name: 'Mango Sticky Rice Swirl',
    ingredients: [
      'Coconut milk ice cream',
      'Mango puree swirl',
      'Sticky rice pieces',
      'Toasted coconut flakes'
    ],
    price: 7.25,
    description: 'Inspired by the classic Thai dessert, a tropical and creamy delight.',
    image: IMAGE_PATHS.mango
  }
];

// Helper functions
const createElement = (tag, className = '', textContent = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

const formatPrice = (price) => `$${price.toFixed(2)}`;

const createIceCreamCard = (iceCream) => {
  const card = createElement('div', 'ice-cream-card');

  const img = createElement('img');
  img.src = iceCream.image;
  img.alt = iceCream.name;
  img.loading = 'lazy';

  const name = createElement('h3', '', iceCream.name);
  const price = createElement('h3', 'price', formatPrice(iceCream.price));
  const description = createElement('p', '', iceCream.description);
  
  const ingredients = createElement('ul');
  iceCream.ingredients.forEach(ingredient => {
    ingredients.appendChild(createElement('li', '', ingredient));
  });

  card.append(img, name, price, description, ingredients);
  return card;
};

/**
 * Displays the ice cream menu in the specified container
 * @param {string} containerId - The ID of the container element
 * @returns {void}
 * @throws {Error} If the container element is not found
 */
export const displayMenu = (containerId = 'content') => {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container element with id "${containerId}" not found`);
  }

  // Clear existing content
  container.replaceChildren();

  // Create menu structure
  const title = createElement('h2', '', MENU_TITLE);
  const gridContainer = createElement('div', 'menu-grid');
  
  // Create and append all ice cream cards
  const cards = SPECIALTY_ICE_CREAMS.map(createIceCreamCard);
  gridContainer.append(...cards);
  
  // Add everything to the container
  container.append(title, gridContainer);
};

// Export data for potential reuse
export const menuData = {
  title: MENU_TITLE,
  items: SPECIALTY_ICE_CREAMS
};
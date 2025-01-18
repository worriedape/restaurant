/* const heroMessage = ` This ice cream shop is a real treat! The flavors are unique and delicious,
      with unexpected combinations that are surprisingly good. The quality of
      the ice cream is top-notch, it's creamy and flavorful. The service is
      friendly and welcoming, making the whole experience enjoyable. I highly
      recommend this place to any ice cream lover!`;

const weeklyHours = [
  {
    day: "Sunday",
    open: "12:00 PM",
    close: "8:00 PM",
  },
  {
    day: "Monday",
    open: "11:00 AM",
    close: "9:00 PM",
  },
  {
    day: "Tuesday",
    open: "11:00 AM",
    close: "9:00 PM",
  },
  {
    day: "Wednesday",
    open: "11:00 AM",
    close: "9:00 PM",
  },
  {
    day: "Thursday",
    open: "11:00 AM",
    close: "10:00 PM",
  },
  {
    day: "Friday",
    open: "11:00 AM",
    close: "11:00 PM",
  },
  {
    day: "Saturday",
    open: "12:00 PM",
    close: "11:00 PM",
  },
];

export function info() {
  const content = document.getElementById("content");
  content.textContent = "";

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "The Scoopful";
  content.append(logo);

  const hero = document.createElement("div");
  hero.classList.add("hero");
  hero.textContent = heroMessage;
  content.appendChild(hero);
  ///
  const title = document.createElement("h2");
  title.textContent = "Hours";
  content.appendChild(title);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("menu-grid");
  content.appendChild(gridContainer);

  weeklyHours.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("hours-card");

    const day = document.createElement("h3");
    day.classList.add("day");
    day.textContent = `${obj.day}`;

    const open = document.createElement("div");
    open.classList.add("open");
    open.textContent = `${obj.open}`;

    const close = document.createElement("div");
    close.classList.add("close");
    close.textContent = `${obj.close}`;

    card.appendChild(day);
    card.appendChild(open);
    card.appendChild(close);

    gridContainer.appendChild(card);
  });
}
 */

// Constants
const SHOP_NAME = 'The Scoopful';
const HOURS_TITLE = 'Hours';

const HERO_MESSAGE = `This ice cream shop is a real treat! The flavors are unique and delicious,
with unexpected combinations that are surprisingly good. The quality of
the ice cream is top-notch, it's creamy and flavorful. The service is
friendly and welcoming, making the whole experience enjoyable. I highly
recommend this place to any ice cream lover!`;

const WEEKLY_HOURS = [
  {
    id: 'sun',
    day: 'Sunday',
    open: '12:00 PM',
    close: '8:00 PM'
  },
  {
    id: 'mon',
    day: 'Monday',
    open: '11:00 AM',
    close: '9:00 PM'
  },
  {
    id: 'tue',
    day: 'Tuesday',
    open: '11:00 AM',
    close: '9:00 PM'
  },
  {
    id: 'wed',
    day: 'Wednesday',
    open: '11:00 AM',
    close: '9:00 PM'
  },
  {
    id: 'thu',
    day: 'Thursday',
    open: '11:00 AM',
    close: '10:00 PM'
  },
  {
    id: 'fri',
    day: 'Friday',
    open: '11:00 AM',
    close: '11:00 PM'
  },
  {
    id: 'sat',
    day: 'Saturday',
    open: '12:00 PM',
    close: '11:00 PM'
  }
];

// Helper functions
const createElement = (tag, className = '', textContent = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

const createHourCard = ({ day, open, close }) => {
  const card = createElement('div', 'hours-card');
  
  const dayElement = createElement('h3', 'day', day);
  const openElement = createElement('div', 'open', open);
  const closeElement = createElement('div', 'close', close);
  
  card.append(dayElement, openElement, closeElement);
  return card;
};

/**
 * Displays the shop information in the specified container
 * @param {string} containerId - The ID of the container element
 * @returns {void}
 * @throws {Error} If the container element is not found
 */
export const displayInfo = (containerId = 'content') => {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container element with id "${containerId}" not found`);
  }

  // Clear existing content
  container.replaceChildren();

  // Create main elements
  const logo = createElement('h1', 'logo', SHOP_NAME);
  const hero = createElement('div', 'hero', HERO_MESSAGE);
  const hoursTitle = createElement('h2', '', HOURS_TITLE);
  const hoursGrid = createElement('div', 'menu-grid');

  // Create and append all hour cards
  const hourCards = WEEKLY_HOURS.map(createHourCard);
  hoursGrid.append(...hourCards);

  // Add everything to the container
  container.append(logo, hero, hoursTitle, hoursGrid);
};

// Export data for potential reuse
export const shopData = {
  name: SHOP_NAME,
  description: HERO_MESSAGE,
  hours: WEEKLY_HOURS
};
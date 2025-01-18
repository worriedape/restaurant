/* const representatives = [
  {
    name: "Patty Praline",
    phone: "555-NUTTY-MIX",
    email: "patty.d@thescoopful.com"
  },
  {
    name: "Cherry Sundae",
    phone: "555-CHERRY-TOP",
    email: "cherry.s@thescoopful.com",
  },
  {
    name: "Barry Banana Split",
    phone: "555-SPLIT-TIME",
    email: "barry.b@thescoopful.com",
  },
];

export function displayContacts() {
  const content = document.getElementById("content");
  content.textContent = "";

  const title = document.createElement("h2");
  title.textContent = "Contact us:";
  content.appendChild(title);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("contact-grid");
  content.appendChild(gridContainer);

  representatives.forEach((representative) => {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = `${representative.name}`;

    const phoneNumber = document.createElement("div");
    phoneNumber.classList.add("phone");
    phoneNumber.textContent = `${representative.phone}`;

    const email = document.createElement("a");
    email.classList.add("email");
    email.href = representative.email;
    email.textContent = representative.email

    card.appendChild(name);
    card.appendChild(phoneNumber);
    card.appendChild(email);

    gridContainer.appendChild(card);
  });
}
 */

// Constants
const CONTACTS_TITLE = 'Contact us:';

const REPRESENTATIVES = [
  {
    id: 'patty',
    name: 'Patty Praline',
    phone: '555-NUTTY-MIX',
    email: 'patty.d@thescoopful.com'
  },
  {
    id: 'cherry',
    name: 'Cherry Sundae',
    phone: '555-CHERRY-TOP',
    email: 'cherry.s@thescoopful.com'
  },
  {
    id: 'barry',
    name: 'Barry Banana Split',
    phone: '555-SPLIT-TIME',
    email: 'barry.b@thescoopful.com'
  }
];

// Helper functions
const createElement = (tag, className = '', textContent = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

const createContactCard = ({ name, phone, email }) => {
  const card = createElement('div', 'contact-card');
  
  const nameElement = createElement('div', 'name', name);
  const phoneElement = createElement('div', 'phone', phone);
  
  const emailElement = createElement('a', 'email', email);
  emailElement.href = `mailto:${email}`;
  
  card.append(nameElement, phoneElement, emailElement);
  return card;
};

/**
 * Displays the contact information in the specified container
 * @param {string} containerId - The ID of the container element
 * @returns {void}
 * @throws {Error} If the container element is not found
 */
export const displayContacts = (containerId = 'content') => {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container element with id "${containerId}" not found`);
  }

  // Clear existing content
  container.replaceChildren();

  // Create contact section structure
  const title = createElement('h2', '', CONTACTS_TITLE);
  const gridContainer = createElement('div', 'contact-grid');
  
  // Create and append all contact cards
  const cards = REPRESENTATIVES.map(createContactCard);
  gridContainer.append(...cards);
  
  // Add everything to the container
  container.append(title, gridContainer);
};

// Export data for potential reuse
export const contactsData = {
  title: CONTACTS_TITLE,
  representatives: REPRESENTATIVES
};
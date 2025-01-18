import "./styles.css";
import banana from "./logo-bananas.svg";
import { displayInfo } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContacts } from "./contact.js";

const nav = document.getElementById("nav");

if (nav) {
  const image = document.createElement("img");
  image.classList.add("banana");
  image.src = banana; 
  nav.before(image); 
}

/* document.addEventListener("DOMContentLoaded", () => {
  info();
  setupButtonToggle();
  document.querySelector(".home").id = "active";
});

function setupButtonToggle() {
  const buttons = document.querySelectorAll(".home, .menu, .about");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.removeAttribute("id")); 
      button.id = "active"; 
    });
  });
}

document.querySelector(".home").addEventListener("click", () => info());
document.querySelector(".menu").addEventListener("click", () => displayMenu());
document
  .querySelector(".about")
  .addEventListener("click", () => displayContacts());
 */

// Constants for DOM selectors and state
const NAVIGATION_CONFIG = {
  home: {
    selector: ".home",
    handler: displayInfo,
  },
  menu: {
    selector: ".menu",
    handler: displayMenu,
  },
  about: {
    selector: ".about",
    handler: displayContacts,
  },
};

const ACTIVE_CLASS = "active";

class NavigationManager {
  constructor(config) {
    this.config = config;
    this.buttons = null;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.setupButtons();
    this.setupEventListeners();
    this.setInitialState();
  }

  setupButtons() {
    const selectors = Object.values(this.config)
      .map((item) => item.selector)
      .join(", ");
    this.buttons = document.querySelectorAll(selectors);
  }

  setupEventListeners() {
    // Setup click handlers for each button
    Object.entries(this.config).forEach(([key, { selector, handler }]) => {
      const element = document.querySelector(selector);
      if (element && handler) {
        element.addEventListener("click", () => {
          this.handleNavigation(element);
          handler();
        });
      }
    });
  }

  handleNavigation(activeButton) {
    // Remove active state from all buttons and set it on the clicked button
    this.buttons.forEach((button) => button.classList.remove(ACTIVE_CLASS));
    activeButton.classList.add(ACTIVE_CLASS);
  }

  setInitialState() {
    // Set initial active state and run home handler
    const homeButton = document.querySelector(this.config.home.selector);
    if (homeButton) {
      homeButton.classList.add(ACTIVE_CLASS);
      this.config.home.handler();
    }
  }
}

// Initialize navigation
const navigation = new NavigationManager(NAVIGATION_CONFIG);

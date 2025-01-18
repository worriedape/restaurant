import "./styles.css";
import banana from "./logo-bananas.svg";
import { info } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContacts } from "./contact.js";

const nav = document.getElementById("nav");

const image = document.createElement("img");
image.classList.add("banana");
image.src = banana;
nav.parentNode.insertBefore(image, nav);

document.addEventListener("DOMContentLoaded", () => {
  info();
});
document.querySelector(".home").addEventListener("click", () => info());
document.querySelector(".menu").addEventListener("click", () => displayMenu());
document
  .querySelector(".about")
  .addEventListener("click", () => displayContacts());

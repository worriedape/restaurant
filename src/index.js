import "./styles.css";
import banana from "./logo-bananas.svg";
import { displayMenu } from "./menu.js";

const nav = document.getElementById("nav");

const image = document.createElement("img");
image.classList.add("banana");
image.src = banana;

nav.parentNode.insertBefore(image, nav);

/* const contentwWrapper = document.getElementById("content"); */

/* const button = document.createElement("button");
button.textContent = "Menu";
button.className("menu");
contentwWrapper.appendChild(button); */

/* contentwWrapper.textContent = ""; */

document.querySelectorAll("menu").addEventListener("click", displayMenu);



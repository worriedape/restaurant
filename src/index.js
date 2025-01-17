import "./styles.css";

import banana from "./logo-bananas.svg";

const nav = document.getElementById("nav");

const image = document.createElement("img");
image.classList.add("banana")
image.src = banana;

nav.parentNode.insertBefore(image, nav);

const contentwWrapper = document.getElementById("content");

const button = document.createElement("button");
button.textContent = "Menu";
button.classList.add("menu");
contentwWrapper.appendChild(button);

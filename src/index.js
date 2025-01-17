import "./styles.css";

import odinImage from "./logo-bananas.svg";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);



const contentwWrapper = document.getElementById("content");

const button = document.createElement("button");
button.textContent = "Click me!";
button.classList.add("my-button");
contentwWrapper.appendChild(button);
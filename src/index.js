import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import odinImage from "./logo-bananas.svg";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
import lavender from "./images/lavender-honeycomb-dream.png";
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

export function displayMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const title = document.createElement("h2");
  title.textContent = "Specialty Ice Cream Menu";
  content.appendChild(title);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("menu-grid");
  content.appendChild(gridContainer);

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

  specialtyIceCreams.forEach((iceCream) => {
    const card = document.createElement("div");
    card.classList.add("ice-cream-card");

    const img = document.createElement("img");
    img.src = images[iceCream.name];
    img.alt = iceCream.name;

    const namePrice = document.createElement("h3");
    namePrice.textContent = `${iceCream.name} - $${iceCream.price.toFixed(2)}`;

    const description = document.createElement("p");
    description.textContent = iceCream.description;

    const ingredients = document.createElement("ul");
    iceCream.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredients.appendChild(li);
    });

    card.appendChild(img);
    card.appendChild(namePrice);
    card.appendChild(description);
    card.appendChild(ingredients);

    gridContainer.appendChild(card);
  });
}


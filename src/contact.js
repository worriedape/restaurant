const representatives = [
  {
    name: "Patty Praline",
    phone: "555-NUTTY-MIX",
    email: "patty.p@pralineparadise.net" /* ,
    notes:
      "Passionate about pralines and all things nutty. Often seen carrying a bag of roasted pecans."
   */,
  },
  {
    name: "Cherry Sundae",
    phone: "555-CHERRY-TOP",
    email: "cherry.s@sundaesolutions.com" /* ,
    notes:
      "Enthusiastic about sundaes and all the fixings. Always has a cherry on top (literally)."
   */,
  },
  {
    name: "Barry Banana Split",
    phone: "555-SPLIT-TIME",
    email: "barry.b@banana.biz" /* ,
    notes:
      "Loves banana splits more than anything. Can split a banana in record time.",
   */,
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

    const email = document.createElement("div");
    email.classList.add("email");
    email.textContent = `${representative.email}`;

    card.appendChild(name);
    card.appendChild(phoneNumber);
    card.appendChild(email);

    gridContainer.appendChild(card);
  });
}

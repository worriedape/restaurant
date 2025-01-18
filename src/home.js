const heroMessage = ` This ice cream shop is a real treat! The flavors are unique and delicious,
      with unexpected combinations that are surprisingly good. The quality of
      the ice cream is top-notch, it's creamy and flavorful. The service is
      friendly and welcoming, making the whole experience enjoyable. I highly
      recommend this place to any ice cream lover!`;

/* export function displayHome() {
  const content = document.getElementById("content");
  content.textContent = "";

  const hero = document.createElement("div");
  hero.classList.add("hero");
  hero.textContent = heroMessage;
  content.appendChild(hero);
} */

const weeklyHours = [
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
  {
    day: "Sunday",
    open: "12:00 PM",
    close: "8:00 PM", 
  },
];

export function info() {
  const content = document.getElementById("content");
  content.textContent = "";

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

    const day = document.createElement("div");
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

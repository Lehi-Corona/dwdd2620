import { snowboards } from "./data/snowboards.js";

const container = document.getElementById("card-container");

snowboards.forEach(board => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = board.image;
  img.alt = board.name;
  img.className = "card-image";
  card.appendChild(img);

  const text = document.createElement("div");
  text.className = "card-text";

  const title = document.createElement("h2");
  title.textContent = board.name;
  title.className = "card-title";

  const desc = document.createElement("p");
  desc.textContent = board.description;
  desc.className = "card-desc";

  const price = document.createElement("p");
  price.textContent = board.price;
  price.className = "card-price";

  text.append(title, desc, price);
  card.appendChild(text);

  const buttons = document.createElement("div");
  buttons.className = "card-buttons";
  buttons.innerHTML = `
    <a href="#" class="btn btn-itinerary">Details</a>
    <a href="#" class="btn btn-book">Buy Now</a>
  `;
  card.appendChild(buttons);

  container.appendChild(card);
});

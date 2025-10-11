import { snowboards } from "./data/snowboards.js";
import { header } from "./modules/header.mjs";
import { footer } from "./modules/footer.mjs";
import { navbar } from "./modules/navigation.mjs";
import { myReviews } from "./data/reviews.mjs";
import { links } from './data/links.js';

// Insert header into html
header();

// Insert footer into html
footer('2025');

// List of links & navigation
navbar(links);

setTimeout(() => {
  const htmlEl = document.querySelector('#customer-reviews');

if (!htmlEl) {
  console.log('Could not find #customer-reviews element - skipping reviews');
} else {
  console.log('Found #customer-reviews element:', htmlEl);
  
  // For loop for myReviews
  myReviews.forEach((r, index) => {
    console.log(index);
    console.log(r.rating);
    
    // Section for reviews
    const reviewSection = document.createElement('section');
    reviewSection.className = "p-4 border border-gray-60 rounded bg-gray-20";
    
    // Review name
    const theName = document.createElement('h2');
    theName.className = "text-sky-dark text-xl font-semibold mb-2";
    theName.textContent = r.reviewer;
    reviewSection.appendChild(theName);
    
    // Product name
    const productName = document.createElement('p');
    productName.className = "text-gray-70 text-sm font-medium mb-2";
    productName.textContent = r.product;
    reviewSection.appendChild(productName);
    
    // Star container
    const starContainer = document.createElement('div');
    starContainer.className = "flex gap-1 mb-3";
    
    // Create 5 stars
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('img');
      star.className = "w-5 h-5";
      
      // If i is less than rating, use colored star, otherwise use gray star
      if (i < r.rating) {
        star.src = "./images/star-colored.svg";
        star.alt = "Colored star";
      } else {
        star.src = "./images/star-gray.svg";
        star.alt = "Gray star";
      }
      
      starContainer.appendChild(star);
    }
    
    reviewSection.appendChild(starContainer);
    
    // Comment
    const comment = document.createElement('p');
    comment.className = "text-gray-70 text-sm leading-relaxed";
    comment.textContent = r.comment;
    reviewSection.appendChild(comment);
    
    // Add review section to container
    htmlEl.appendChild(reviewSection);
  });
}
}, 0);

const container = document.getElementById("card-container");

if (container) {
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
}
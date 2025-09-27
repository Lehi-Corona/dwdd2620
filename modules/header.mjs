export function header() {
 
    const headerElement = document.querySelector("header");
    headerElement.className =
      "grid p-2 border-b-2 grid-cols-[auto_44px_44px] items-center";
  
    // Build Logo Element
    const logo = document.createElement("img");
    logo.src = "images/2620logo.svg";
    logo.alt = "Explore More Logo";
    logo.className = "w-40 h-20";
  
    // Build the profile link
    const account = document.createElement("a");
    account.href = "profile.html";
    account.className = "w-11 h-11 flex justify-around";
    const accountImg = document.createElement("img");
    accountImg.src = "images/person-circle.svg";
    accountImg.className = "w-6";
    account.appendChild(accountImg);
  
    // Build the cart link
    const cart = document.createElement("a");
    cart.href = "cart.html";
    cart.className = "w-11 h-11 flex justify-around";
    const cartImg = document.createElement("img");
    cartImg.src = "images/cart-fill.svg";
    cartImg.className = "w-6";
    cart.appendChild(cartImg);
  
    // Add pieces to the header
    headerElement.appendChild(logo);
    headerElement.appendChild(account);
    headerElement.appendChild(cart);
  }
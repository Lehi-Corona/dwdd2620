export function header() {
  const headerElement = document.querySelector("header");
  headerElement.className =
    "flex justify-between items-center p-2 border-b-2 border-gray-30";

  // Logo 
  const logo = document.createElement("img");
  logo.src = "images/2620logo.svg";
  logo.alt = "Explore More Logo";
  logo.className = "w-40 h-20";

  // Right Section
  const rightSection = document.createElement("div");
  rightSection.className = "flex items-center gap-4";

  // Profile Link
  const account = document.createElement("a");
  account.href = "profile.html";
  account.className = "w-11 h-11 flex justify-center items-center";
  const accountImg = document.createElement("img");
  accountImg.src = "images/person-circle.svg";
  accountImg.className = "w-6";
  account.appendChild(accountImg);

  // Cart Link
  const cart = document.createElement("a");
  cart.href = "cart.html";
  cart.className = "w-11 h-11 flex justify-center items-center";
  const cartImg = document.createElement("img");
  cartImg.src = "images/cart-fill.svg";
  cartImg.className = "w-6";
  cart.appendChild(cartImg);

  // Hamburger Menu
  const hamburger = document.createElement("img");
  hamburger.src = "images/burger-menu-svgrepo-com.svg";
  hamburger.className = "w-6 h-6 cursor-pointer md:hidden";

  rightSection.appendChild(account);
  rightSection.appendChild(cart);
  rightSection.appendChild(hamburger);
  headerElement.appendChild(logo);
  headerElement.appendChild(rightSection);

  const nav = document.createElement("nav");
  nav.className =
    "hidden flex-col gap-4 bg-sky-light p-4 border-b-2 border-gray-30 md:flex md:flex-row md:items-center md:gap-8";

  const navLinks = [
    { name: "Home", href: "index.html" },
    { name: "Tents", href: "tents.html" },
    { name: "Snowboards", href: "snowboards.html" },
    { name: "Cart", href: "cart.html" },
    { name: "Color Docs", href: "color-documentation.html" },
  ];

  let currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  if (currentPage === "home.html") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    const a = document.createElement("a");
    a.textContent = link.name;
    a.href = link.href;
    a.className = "text-lg font-semibold transition";
    
    // Add active class
    if (link.href === currentPage) {
      a.classList.add("active");
    }
    
    nav.appendChild(a);
  });
  

  headerElement.insertAdjacentElement("afterend", nav);

  // nav visibility
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });
}
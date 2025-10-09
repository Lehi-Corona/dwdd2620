export function navbar(links) {
    const navElement = document.querySelector("nav");
    if (!navElement) return;
  
    navElement.innerHTML = ""; 
  
    const navUl = document.createElement("ul");
    navUl.className =
      "flex flex-col md:flex-row md:gap-6 text-[var(--color-gray-10)] md:text-[var(--color-gray-80)]";
  
    const currentPage = window.location.pathname.split("/").pop();
  
    links.forEach((link) => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = link.name;
      anchor.href = link.href;
  
      anchor.className =
        "block py-2 px-3 hover:text-[var(--color-sky-light)] md:hover:text-[var(--color-sky-dark)] transition";
  
      if (currentPage === link.href) {
        anchor.classList.add("text-[var(--color-sky)]", "font-semibold");
      }
  
      li.appendChild(anchor);
      navUl.appendChild(li);
    });
  
    navElement.appendChild(navUl);
  }
  
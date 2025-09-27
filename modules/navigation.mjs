
export function navbar(links) {
    const navElement = document.querySelector("nav");
    navElement.className = "bg-sky-950";

    const navUl = document.createElement("ul");
    navUl.className = "flex flex-col sm:flex-row sm:border-b";

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const listItem = document.createElement("li");
        listItem.className = "border-b border-neutral-700 sm:border-b-0 hover:bg-slate-400";

        const anchor = document.createElement("a");
        anchor.textContent = link.name;
        anchor.href = link.href;
        anchor.className = "block py-2 px-3";

        // Apply ternary operator
        currentPage === link.href
            ? (listItem.classList.add("bg-slate-400"), anchor.classList.add("text-white"))
            : anchor.classList.add("text-slate-300", "hover:text-white");

        listItem.appendChild(anchor);
        navUl.appendChild(listItem);
    });

    navElement.appendChild(navUl);
}
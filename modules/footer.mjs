export function footer(y) {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = `<p class='text-center text-xs py-4'>&copy; Lehi Corona ${y} &bull; DWDD 2620</p>`;
}

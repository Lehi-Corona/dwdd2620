    // ./tailwindcss -i input.css -o styles.css --watch
let x = new Date();
console.log(x);
let y = x.getFullYear();
console.log (y);
document.querySelector('#theYear').textContent = y;
 Module.exports = {content:'./index.html'}
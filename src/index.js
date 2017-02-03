require("./app/app.style.scss");
require("exports?VanillaTilt!../node_modules/vanilla-tilt/dist/vanilla-tilt.min.js");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('introduction-card').addEventListener("mouseover", () => {
        document.getElementById('home').className += ' active';
    });
    document.getElementById('introduction-card').addEventListener("mouseout", () => {
        document.getElementById('home').className = '';
    });
});
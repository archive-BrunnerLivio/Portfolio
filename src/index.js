require('./app/app.style.scss');
require('./app/components/IntroductionCard/IntroductionCard');
const Loader = require('./app/components/Loader/Loader.js');
let components = [];

components.push(new Loader());

document.addEventListener('DOMContentLoaded', () => {
    components.forEach(component => {
        component.$onInit();
    });
});
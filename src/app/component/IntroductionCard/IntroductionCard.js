require('exports?VanillaTilt!../../../../node_modules/vanilla-tilt/dist/vanilla-tilt.min.js');
const LineMaker = require('../LineMaker/LineMaker');

document.addEventListener('DOMContentLoaded', function () {
    let $introductionCard = document.getElementById('introduction-card'),
        $home = document.getElementById('home'),
        isIntroductionCardActive = false;
    preloadImages(() => {
        window.setTimeout(() => {
            animateLines();
        }, 400);
    });


    function preloadImages(resolve) {
        let percentage = 0;
        window.setInterval(() => {
            percentage += 1;
            let opacity = 1 - (percentage / 100);
            document.getElementById('home-background-0').style.opacity = opacity;
            if (percentage === 100) {
                resolve();
            }
        }, 50);
    }

    function animateLines() {
        var lines = [];
        for (var i = 0; i < 10; i++) {
            lines.push({
                top: 0,
                left: i * 10 + 'vw',
                width: '10vw',
                height: '100%',
                color: 'white',
                hidden: true,
                animation: {
                    duration: 1000,
                    easing: 'easeInOutSine',
                    delay: 100 * i,
                    direction: 'TopBottom'
                }
            });
        }
        var lineMaker = new LineMaker({
            position: 'fixed',
            lines: lines
        });
        lineMaker.animateLinesIn();
    }
});
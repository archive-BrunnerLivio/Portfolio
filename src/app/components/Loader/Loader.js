const LineMaker = require('../LineMaker/LineMaker');
class Loader {
    $onInit() {
        this.preloadImages(() => {
            window.setTimeout(() => {
                this.animateLines();
            }, 400);
        });
    }

    animateLines() {
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

    preloadImages(resolve) {
        let percentage = 0;
        window.setInterval(() => {
            percentage += 1;
            let opacity = 1 - (percentage / 100);
            document.getElementsByClassName('loader-background-0')[0].style.opacity = opacity;
            if (percentage === 100) {
                resolve();
            }
        }, 50);
    }
}
module.exports = Loader;
import Carousel from './js/carousel.js';
import SplashScreen from './js/splash.js';

class App {
    constructor(props) {
        this.resetThrottle = true;

        this.splash = new SplashScreen();
        this.carousel = new Carousel();
        this.addEvents();
        this.resize();
    }

    addEvents() {
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('mousewheel', this.onScroll.bind(this));
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.carousel.resize(width, height);
    }

    onScroll(e){
        if (this.isScrolling) return;
        this.scroDir = Math.sign(e.deltaY);

        this.isScrolling = true;
        setTimeout(() => {
            this.isScrolling = false;
        }, 300)

        if (this.scroDir > 0) {
            this.carousel.next();
        } else {
            this.carousel.previous();
        }
    }

    onKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.carousel.previous();
                break;

            case 'ArrowRight':
                this.carousel.next();
                break;
        }
    }
}

const app = new App();
window.app = app
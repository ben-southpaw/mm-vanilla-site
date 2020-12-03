import Carousel from './js/carousel.js';
import SplashScreen from './js/splash.js';

class App {
    constructor(props) {
        this.splash = new SplashScreen();
        this.carousel = new Carousel();
        this.addEvents();
        this.resize();

    }


    addEvents() {
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('mousewheel', this.onScroll.bind(this));
        window.addEventListener('load', this.onSplash.bind(this));
        window.addEventListener('keydown', this.onKeyDown.bind(this));

    }

    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.carousel.resize(width, height);
    }

    onScroll(e){
        console.log(e);
    }



    onSplash(e){
        console.log(e,'loaded');
        this.splash.onLoad();
    }


    //register clicks then set index based on this
    onKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.carousel.previous();
                break;

            case 'ArrowRight':
                this.carousel.next();
                break;
        }
        // this.carousel.setIndex(7);

    }

}

const app = new App();

window.app = app
import Carousel from './carousel.js';
import SplashScreen from './splash.js';

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
        window.addEventListener('load', this.onLoad.bind(this))

    }

    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.carousel.resize(width, height);
    }

    onScroll(e){
        console.log(e);
    }



    onLoad(e){
        console.log(e,'loaded');
        this.splash.onLoad();
    }

    /*
    onclick
    * app.carousel.setIndex(7)
    * */

}

const app = new App();

window.app = app
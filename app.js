import Carousel from './carousel.js';

class App {
    constructor(props) {
        console.log('here');
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
    }

    /*
    onclick
    * app.carousel.setIndex(7)
    * */

}

const app = new App();

window.app = app
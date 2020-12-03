import CarouselItem from "./carousel-item.js";
import NavItem from "./nav-item.js";
import Carousel from './carousel.js'

export default class CarouselNav {
    constructor(el, setNavIndex = () => {}) {
        this.el = el;
        this.setNavIndex = setNavIndex;
        // this.navValues = this.el.querySelectorAll('.nav-value');

        this.createItems()
    }

    createItems(){
        const navItems = this.el.querySelectorAll('.nav-item');
        this.items = [...navItems].map((el, index)=> {
            const navItem = new NavItem(el, index, this.onItemClick.bind(this));
            return navItem;
        })
        // console.log(navItem, 'whatup');
    }

    setIndex(clickedIndex) {
        this.items.forEach((item, index) => {
            if (clickedIndex === index) {
                item.activate();
            } else {
                item.deactivate();
            }
        })
    }

    onItemClick(clickedIndex) {
        this.setNavIndex(clickedIndex);
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
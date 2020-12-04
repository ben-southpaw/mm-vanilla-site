import CarouselItem from "./carousel-item.js";
import NavItem from "./nav-item.js";
import Carousel from './carousel.js'

export default class CarouselNav {
    constructor(el, setNavIndex = () => {}) {
        this.el = el;
        this.setNavIndex = setNavIndex;
        this.createItems()
    }

    createItems(){
        const navItems = this.el.querySelectorAll('.nav-item');
        this.items = [...navItems].map((el, index)=> {
            const navItem = new NavItem(el, index, this.onItemClick.bind(this));
            return navItem;
        })
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
}
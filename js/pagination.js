import CarouselItem from "./carousel-item.js";
import NavItem from "./nav-item.js";

export default class Pagination {
    constructor(el, index, clickCb = () => {}) {


    }

    // addEvents() {
    //     this.navValue.addEventListener('click', this.setIndexFromNav.bind(this));
    // }

    setIndexFromNav() {

        const clickedIndex = document.querySelector('.nav-value').textContent;

    }




    onclick() {

        this.clickCb(index)
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
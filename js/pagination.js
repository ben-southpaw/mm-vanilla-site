

export default class Pagination {
    constructor(el, index, clickCb = () => {}) {
        console.log('log carousel');
        this.el = document.querySelector('.carousel');
        this.bg = document.querySelector('.carousel-bg');


        this.clickCb = cb;
    }

    onclick() {
        this.clickCb(index)
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
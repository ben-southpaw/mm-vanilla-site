
export default class CarouselItem {
    constructor(el) {
        this.el = el;
        this.active = false;
        this.navItem = document.querySelector('.nav-item');
        this.deactivate();
    }

    activate(){
        this.active = true;
        this.el.classList.add('isActive');
        this.navItem.classList.add('isActive');
    }

    deactivate(){
        this.active = false;
        this.el.classList.remove('isActive');
        this.navItem.classList.remove('isActive');
    }

};

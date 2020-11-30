
export default class CarouselItem {
    constructor(el) {
        this.el = el;
        this.active = false;
        this.deactivate();
    }

    activate(){
        this.active = true;
        this.el.classList.add('isActive');

    }

    deactivate(){
        this.active = false;
        this.el.classList.remove('isActive');
    }



};

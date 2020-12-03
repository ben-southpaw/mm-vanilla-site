
export default class NavItem {
    constructor(el) {
        this.el = el;
        this.active = false;
    }

    itemClicked(){
        this.active = true;
        this.el.classList.add('isActive');

    }

    itemReset(){
        this.active = false;
        this.el.classList.remove('isActive');
    }

};
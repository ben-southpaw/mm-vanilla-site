
export default class NavItem {
    constructor(el, index, clickCb) {
        this.el = el;
        this.index = index;
        this.active = false;
        this.clickCb = clickCb;
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        this.clickCb(this.index);
    }

    activate() {
        this.active = true;
        this.el.classList.add('isActive');

    }

    deactivate(){
        this.active = false;
        this.el.classList.remove('isActive');
    }

};
import CarouselItem from "./carousel-item.js";
import CarouselNav from "./carousel-nav.js"
import {clamp} from './utils.js';
import NavItem from './nav-item.js'

export default class Carousel {
    constructor(props) {
        this.el = document.querySelector('.carousel');
        this.bg = this.el.querySelector('.carousel-bg');
        this.carouselList = this.el.querySelector('.carousel-list');
        this.initialFooterText = this.el.querySelector('.footer-text-intro');
        this.arrowLeft = this.el.querySelector('.arrow-left');
        this.arrowRight = this.el.querySelector('.arrow-right');
        this.footerText = this.el.querySelector('.footer-text');
        this.footerIndex = this.el.querySelector('.footer-text-index');
        this.lastSlide = this.el.querySelector('.contact-container');
        //get paginations els
        this.addEvents();
        this.createItems();
        this.createPaginationItems();
        this.currentIndex = 0;
        this.setIndex(this.currentIndex);
    }

    addEvents() {
        this.arrowLeft.addEventListener('click', this.previous.bind(this));
        this.arrowRight.addEventListener('click', this.next.bind(this));
    }

    createItems() {
        const listItems = this.el.querySelectorAll('.carousel-item');
        this.items = [...listItems].map((el) => {
            const carouselItem = new CarouselItem(el)
            return carouselItem;
        })
    }

    onNavIndex(index){
       this.setIndex(index);
        console.log(index, 'index here')
    }

    createPaginationItems(){
        const el = this.el.querySelector('.carousel-nav');
        this.carouselNav = new CarouselNav(el, this.onNavIndex.bind(this));

    }

    resize(width, height) {
        // console.log(width, height,'resizeMe');
        this.clientWidth = this.el.clientWidth;
        const clientHeight = this.el.clientHeight;
        this.bgClientWidth = this.bg.clientWidth;
        this.bgClientHeight = this.bg.clientHeight;
        this.bgOffsetValue = (this.bgClientWidth - this.clientWidth) / (this.items.length - 2);

        this.setBackgroundPosition(true);
    }
    
    setIndex(index) {
        this.currentIndex = clamp(index, 0, this.items.length - 1);
        this.items.forEach((item, i)=>{
            if(i === this.currentIndex){
                    item.activate();
            } else {
                item.deactivate();
            }
        })

        this.setFooterTextIndex(this.currentIndex)

        this.carouselNav.setIndex(this.currentIndex)

        this.setBackgroundPosition();

        if (this.currentIndex === this.items.length - 1) {
            this.arrowRight.style.display = 'none';
            this.footerText.style.display  = 'none';
            this.lastSlide.classList.add('isActive');
        } else if (this.currentIndex === 0) {
            this.arrowLeft.style.display = 'none';
            this.footerText.style.display  = 'none';
            this.initialFooterText.style.opacity  = '1';
        } else {
            this.arrowRight.style.display = 'block';
            this.arrowLeft.style.display = 'block';
            this.footerText.style.display  = 'block';
            this.initialFooterText.style.opacity  = '0';
        }
    }

    setFooterTextIndex(index){
        this.footerIndex.innerText = index;
        this.footerText.classList.remove('isActive');

        if (this.footerTextTimout) clearTimeout(this.footerTextTimout);
        this.footerTextTimout = setTimeout(() => {
                this.footerText.classList.add('isActive');
        }, 200)
    }

    setBackgroundPosition(force) {
        const isLast = this.currentIndex === this.items.length - 1;
        let bgOffset = this.bgOffsetValue * this.currentIndex;

        if (isLast) bgOffset -= this.bgClientHeight * 0.3;

        if (force) this.bg.style.transition = 'none';
        this.bg.style.transform = `translateX(${-(bgOffset)}px)`;
        if (force) {
            requestAnimationFrame(() => {
                this.bg.style.transition = '';
            })
        }
    }



    previous(e){
        this.setIndex(this.currentIndex -1);
    }



    next(e){
        this.setIndex(this.currentIndex +1);
    }



};

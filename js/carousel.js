import CarouselItem from "./carousel-item.js";
import {clamp} from './utils.js';
import NavItem from './nav-item.js'

export default class Carousel {
    constructor(props) {
        this.el = document.querySelector('.carousel');
        this.bg = document.querySelector('.carousel-bg');
        this.carouselList = document.querySelector('.carousel-list');

        this.arrowLeft = document.querySelector('.arrow-left');
        this.arrowRight = document.querySelector('.arrow-right');
        //get paginations els
        this.addEvents();
        this.createItems();
        this.createPaginationItems();
        this.currentIndex = 0;
        this.setIndex(this.currentIndex);
    }

    addEvents() {
        this.arrowLeft.addEventListener('click', this.onLeftArrowClick.bind(this));
        this.arrowRight.addEventListener('click', this.onRightArrowClick.bind(this));
    }

    createItems() {
        const listItems = this.el.querySelectorAll('.carousel-item');
        this.items = [...listItems].map((el) => {
            const carouselItem = new CarouselItem(el)
            return carouselItem;
        })
    }
    createPaginationItems(){
        const navItems = document.querySelectorAll('.nav-value');
        this.navValues = [...navItems].map((el)=> {
            const navItem = new NavItem(el);
            return navItem;
        })
    }

    resize(width, height) {
        // console.log(width, height,'resizeMe');
        const clientWidth = this.el.clientWidth;
        const clientHeight = this.el.clientHeight;
        this.bgClientWidth = this.bg.clientWidth;
        this.bgClientHeight = this.bg.clientHeight;
        this.bgOffsetValue = (this.bgClientWidth - clientWidth) / (this.items.length - 2);

    }
    
    setIndex(index) {
        this.currentIndex = clamp(index, 0, this.items.length - 1);
        this.items.forEach((item, i)=>{
            if(i === this.currentIndex){
                setTimeout(()=> {
                    item.activate();
                }, 500)

                /*transition fadein needs to matcg bg fadein*/

            } else {
                item.deactivate();
            }
        })
        this.navValues.forEach((value, i)=>{
            if(i === this.currentIndex){
                setTimeout(()=> {
                    value.itemClicked();
                }, 500)
            } else {
                value.itemReset();
            }
        })
        const bgOffset = this.bgOffsetValue * this.currentIndex;
        this.bg.style.transform = `translateX(${-(bgOffset)}px)`;


        //if current index  = last then add width?
        //transform: translateX(-7100.61px)
        if (this.currentIndex === this.items.length - 1) {
            // this.bg.style.display = 'none';
            // this.bg.style.width -= 2600;

            this.bg.style.transform = `translateX(${-(bgOffset + 750)}px)`;
            console.log(this.bgOffsetValue,'reached');


        }
    }


    onLeftArrowClick(e){
        this.setIndex(this.currentIndex -1);
    }



    onRightArrowClick(e){
        this.setIndex(this.currentIndex +1);
    }

    // removeArrows(index){
    //     console.log(index.length, 'index length here');
    //     if(index === 0){
    //         this.arrowLeft.style.display = 'none';
    //     } else if (index === index.length) {
    //         this.arrowRight.style.display = 'none';
    //     } else {
    //         this.arrowLeft.style.display = 'block';
    //     }
    // }


};

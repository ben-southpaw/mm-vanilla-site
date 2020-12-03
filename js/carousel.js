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
        let bgOffset = this.bgOffsetValue * this.currentIndex;
        this.bg.style.transform = `translateX(${-(bgOffset)}px)`;


        if (this.currentIndex === this.items.length - 1) {
            bgOffset += 750;
            this.arrowRight.style.display = 'none';

            this.bg.style.transform = `translateX(${-(bgOffset)}px)`;
            
        } else if (this.currentIndex === 0) {
            this.arrowLeft.style.display = 'none';
        } else {
            this.arrowRight.style.display = 'block';
            this.arrowLeft.style.display = 'block';
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

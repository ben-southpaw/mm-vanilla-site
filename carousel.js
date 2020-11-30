import CarouselItem from "./carousel-item.js";
import {clamp} from './utils.js';
import Pagination from './pagination.js';

export default class Carousel {
    constructor(props) {
        console.log('log carousel');
        this.el = document.querySelector('.carousel');
        this.bg = document.querySelector('.carousel-bg');
        this.arrowLeft = document.querySelector('.arrow-left');
        this.arrowRight = document.querySelector('.arrow-right');
        //get paginations els
        this.addEvents();
        this.createItems();
        //this.createPaginationItems();
        this.currentIndex = 0;
        this.setIndex(this.currentIndex);

    }

    addEvents() {
        this.arrowLeft.addEventListener('click', this.onLeftArrowClick.bind(this));
        this.arrowRight.addEventListener('click', this.onRightArrowClick.bind(this));
    }

    createItems() {
        const listItems = this.el.querySelectorAll('.carousel-item');
        this.items = [...listItems].map((el)=> {
            const carouselItem = new CarouselItem(el)
            return carouselItem;
        })
        console.log(listItems, 'lists ehre')
    }

    resize(width, height) {
        console.log(width, height,'resizeMe');
        const clientWidth = this.el.clientWidth;
        const clientHeight = this.el.clientHeight;
        this.bgClientWidth = this.bg.clientWidth;
        this.bgClientHeight = this.bg.clientHeight;
        this.bgOffsetValue = (this.bgClientWidth - clientWidth) / (this.items.length - 1);
        console.log(this.bgOffsetValue, 'here ````');
    }
    
    setIndex(index) {
        this.currentIndex = clamp(index, 0, this.items.length - 1);
        console.log(this.currentIndex)
        this.items.forEach((item, i)=>{
            if(i === this.currentIndex){
                setTimeout(()=> {
                    item.activate();
                }, 2000)

                /*transition fadein needs to matcg bg fadein*/

            } else {
                item.deactivate();
            }
        })
        const bgOffset = this.bgOffsetValue * this.currentIndex;
        this.bg.style.transform = `translateX(${-bgOffset}px)`;
    }

    onLeftArrowClick(e){
        this.setIndex(this.currentIndex -1);

    }



    onRightArrowClick(e){
        this.setIndex(this.currentIndex +1);
    }


};

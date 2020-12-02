export default class SplashScreen {
    constructor(props) {
        this.splash = document.querySelector('.splash');
        this.initialText = document.querySelector('.initial-text');
        this.leftText = document.querySelector('.left-text');
        this.rightText = document.querySelector('.right-text');
        this.onLoad();


    }

    onLoad() {
        document.addEventListener('DOMContentLoaded', (e)=> {
            setTimeout(()=>{
                // this.splash.classList.add('display-none');
                console.log('reached here');
            }, 4000); //timeout should be other transition times summed.
        })
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
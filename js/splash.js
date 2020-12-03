export default class SplashScreen {
    constructor(props) {
        this.splash = document.querySelector('.splash');
        // this.initialText = document.querySelector('.initial-text');
        // this.secondaryText = document.querySelector('.secondary-text');
        this.onLoad();


    }

    onLoad() {
        document.addEventListener('DOMContentLoaded', (e)=> {
            setTimeout(()=>{
                this.splash.classList.add('fade-out');
                setTimeout(()=>{
                    this.splash.style.display = 'none';
                },500)
            }, 4500);
        })
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
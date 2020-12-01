export default class SplashScreen {
    constructor(props) {
        this.splash = document.querySelector('.splash');
        this.loadingText = document.querySelector('.splash-text');
        this.onLoad();


    }

    onLoad() {
        document.addEventListener('DOMContentLoaded', (e)=> {
            setTimeout(()=>{
                // this.splash.classList.add('display-none');
                console.log('reached here');
            }, 2000);
        })
    }

    /*Get onclick value of index pass to parent and set currentIndex from c*/
}
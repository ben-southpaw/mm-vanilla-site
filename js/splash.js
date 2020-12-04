export default class SplashScreen {
    constructor() {
        this.splash = document.querySelector('.splash');
        this.monk = document.querySelector('.monk-container');
        this.text = document.querySelector('.splash-text');

        this.startAnimation();
    }

    startAnimation() {
         const monkDelay = 100;
         const textScaleDelay = 900;
         const textTransitionDelay = 800;
         const fadeOutDelay = 1500;
        const hideDelay = 500;

         setTimeout(() => {
             this.monk.classList.add('scale');
         }, monkDelay);

        setTimeout(() => {
            this.text.classList.add('scale');

            setTimeout(() => {
                this.text.classList.add('transition');

                setTimeout(() => {
                    this.splash.classList.add('fade-out');
                     setTimeout(()=>{
                            this.splash.style.display = 'none';
                        },hideDelay);

                }, fadeOutDelay);

            }, textTransitionDelay);

        }, textScaleDelay);

    }
}
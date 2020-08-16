import { r as registerInstance } from './index-1f198cf0.js';

const StellarAutoScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 2;
        this.startPosition = 0;
        this.loop = false;
        this.autoplay = false;
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    async play() {
        this.scroll();
    }
    async stop() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    }
    scroll() {
        window.scrollBy(0, 1);
        this.timeout = setTimeout(this.scroll.bind(this), this.speed);
        if ((document.body.scrollHeight - window.innerHeight) == window.pageYOffset) {
            if (this.loop) {
                window.scrollTo(this.startPosition, 0);
            }
            else {
                this.stop();
            }
        }
    }
};

export { StellarAutoScroll as midwest_auto_scroll };

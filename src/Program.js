import FeedParser from './FeedParser';
import MangleHandler from './MangleHandler';
import UITweaker from './UITweaker';

class FacebookZucksProgram {

    constructor() {
        this.parser = new FeedParser();
        this.mangler = new MangleHandler(this.parser.feed);
        this.ticking = false;
    }

    initialise() {
        console.log('Initializing FacebookZucksProgram');     
        document.addEventListener('scroll', e => {
            if (!this.ticking) { // this garbage is to throttle the rate at which onScroll is called
                window.requestAnimationFrame(() => {
                    this.onScroll();
                    this.ticking = false;
                });
            }
        });
        const uiTweaker = new UITweaker();
        uiTweaker.run();
        setTimeout(() => uiTweaker.run(), 500);
        setTimeout(() => uiTweaker.run(), 1000);
        setTimeout(() => uiTweaker.run(), 2000);
        setTimeout(() => uiTweaker.run(), 5000);
    }

    onScroll() {
        this.parser.parseFeed();
        this.mangler.parseNewPosts();
    }

    start () {
        console.log('Starting FacebookZucksProgram');
    }

}

export default FacebookZucksProgram;
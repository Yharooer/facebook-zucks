import FeedParser from './FeedParser'


class FacebookZucksProgram {

    constructor() {
        this.parser = new FeedParser();
        this.feed = [];
        this.lowestScrollPosition = 0;
    }

    initialise() {
        console.log('Initializing FacebookZucksProgram');
        let ticking = false;        
        document.addEventListener('scroll', (e) => {
            if (this.lowestScrollPosition < window.scrollY) { // only run on new content
                this.lowestScrollPosition = window.scrollY;
                if (!ticking) { // this garbage is to throttle the rate at which onScroll is called
                    window.requestAnimationFrame(() => {
                        this.onScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            }
        });
    }

    onScroll() {
        console.log('onScroll');
        const newFeed = this.parser.parseFeed();
        if (newFeed.length > this.feed.length) {
            this.feed = newFeed;
        }
    }

    start () {
        console.log('Starting FacebookZucksProgram');
    }

}

export default FacebookZucksProgram;
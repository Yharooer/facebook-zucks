import FeedParser from './FeedParser'


class FacebookZucksProgram {

    constructor() {
        this.parser = new FeedParser();
        this.feed = [];
    }

    initialise() {
        console.log('Initializing FacebookZucksProgram');

        document.addEventListener('scroll', (e) => {
            if (!ticking) { // this garbage is to throttle the rate at which onScroll is called
                window.requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    onScroll() {
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
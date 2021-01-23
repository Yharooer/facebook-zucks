class FeedParser {

    constructor() {

    }

    parseFeed() {
        this.parseWholeFeed();
    }

    parseWholeFeed() {
        const posts = Array.from(document.querySelectorAll('[role=feed]')[0].children).filter(e => e.hasAttribute('data-pagelet'));
    }

}

export default FeedParser;
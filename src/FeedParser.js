class FeedParser {

    constructor() {

    }

    parseFeed() {
        return this.parseWholeFeed();
    }

    parseWholeFeed() {
        const posts = Array.from(document.querySelectorAll('[role=feed]')[0].children).filter(e => e.hasAttribute('data-pagelet'));
        return posts;
    }

}

export default FeedParser;
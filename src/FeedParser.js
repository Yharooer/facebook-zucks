import Post from './Post';

class FeedParser {

    constructor() {

    }

    parseFeed() {
        return this.parseWholeFeed();
    }

    parseWholeFeed() {
        const posts = Array.from(document.querySelectorAll('[role=feed]')[0].children).filter(e => e.hasAttribute('data-pagelet'));
        console.log(posts);
        return posts.map(p => new Post(p));
    }

}

export default FeedParser;
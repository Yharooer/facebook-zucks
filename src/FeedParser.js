import Post from './Post';

class FeedParser {

    constructor() {
        this.feed = [];
    }

    parseFeed() {
        const posts = Array.from(document.querySelectorAll('[role=feed]')[0].children).filter(e => e.hasAttribute('data-pagelet'));
        for (let i=this.feed.length; i<posts.length; i++) {
            this.feed.push(new Post(posts[i]));
        }
    }

}

export default FeedParser;
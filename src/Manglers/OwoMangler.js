const owoify = require('owoify-js').default;

class OwoMangler {

    constructor(post) {
        this.post = post;
        this.cost = 10;
    }

    manglePost() {
        this.post.header.title.innerHTML = owoify(this.post.header.title.innerHTML);
        // Content;
    }

}

export default OwoMangler;
import BaseMangler from './BaseMangler';


const owoify = require('owoify-js').default;

class OwoMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 10;
    }

    manglePost() {
        this.post.header.title.innerHTML = owoify(this.post.header.title.innerHTML);
        // Content;
        return this.cost;
    }

}

export default OwoMangler;
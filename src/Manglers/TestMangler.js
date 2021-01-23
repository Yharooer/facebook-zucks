import BaseMangler from "./BaseMangler";

class TestMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 1;
    }

    manglePost() {
        if (this.post.header.title) {
            this.post.header.title.innerHTML = 'lmao';
        }
        return this.cost;
    }

}

export default TestMangler;
class TestMangler {

    constructor(post) {
        this.post = post;
        this.cost = 10;
    }

    manglePost() {
        if (this.post.header.title) {
            this.post.header.title.innerHTML = 'lmao';
        }
    }

}

export default TestMangler;
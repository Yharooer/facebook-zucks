class TestMangler {

    constructor(post) {
        this.post = post;
        this.cost = 10;
    }

    manglePost() {
        this.post.header.innerHTML = 'lmao';
    }

}

export default TestMangler;
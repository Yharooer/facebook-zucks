class TestMangler {

    constructor(post) {
        this.post = post;
        this.cost = 10;
    }

    manglePost() {
        this.post.header.title.innerHTML = 'lmao';
    }

}

export default TestMangler;
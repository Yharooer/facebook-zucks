const owoify = require('owoify-js').default;

class UvuMangler {

    constructor(post) {
        this.post = post;
        this.cost = 40;
    }

    manglePost() {
        process = (e) => {
            if (e) {
                e.innerHTML = owoify(e.innerHTML, 'uvu');
            }
        };

        [
            this.post.header.title,
            this.post.footer.likes,
            this.post.footer.comments,
            this.post.footer.shares,
        ].forEach(process);
        this.post.middle.text?.forEach(process);
    }

}

export default UvuMangler;
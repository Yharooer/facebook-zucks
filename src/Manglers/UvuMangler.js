const owoify = require('owoify-js').default;

class UvuMangler {

    constructor(post) {
        this.post = post;
        this.cost = 40;
    }

    manglePost() {
        this.post.header.title.innerHTML = owoify(this.post.header.title.innerHTML, 'uvu');
        this.post.middle.text.forEach(e => e.innerHTML = owoify(e.innerHTML, 'uvu'));
        console.log(this.post.footer);
        this.post.footer.likes.innerHTML = owoify(this.post.footer.likes.innerHTML, 'uvu');
        this.post.footer.comments.innerHTML = owoify(this.post.footer.comments.innerHTML, 'uvu');
        this.post.footer.shares.innerHTML = owoify(this.post.footer.shares.innerHTML, 'uvu');
    }

}

export default UvuMangler;
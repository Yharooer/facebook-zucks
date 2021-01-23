import BaseMangler from './BaseMangler';

const owoify = require('owoify-js').default;

class UvuMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 40;
    }

    manglePost(amount) {
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
        return this.cost;
    }

}

export default UvuMangler;
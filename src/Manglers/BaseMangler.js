class BaseMangler {

    constructor(post) {
        this.post = post;
        this.cost = 1;
    }

    manglePost(amount) {
        return this.cost;
    }

    doMangle(amount) {
        if (this.cost > amount) {
            return this.cost;
        }
        return this.manglePost(amount);
    }

}

export default BaseMangler;

import BaseMangler from "./BaseMangler";

class FlipMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 15;
    }

    manglePost() {
        process = (e) => {
            if (e) {
                console.log('rotating');
                e.style.transform = "rotate(45deg)";
            }
        };

        [
            this.post.header.image,
            this.post.middle.media,
        ].forEach(process);
        this.post.footer.buttons?.forEach(process);
        return this.cost;
    }

}

export default FlipMangler;
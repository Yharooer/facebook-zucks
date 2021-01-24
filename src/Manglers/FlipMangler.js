import BaseMangler from "./BaseMangler";

const random_select = (array) => array[Math.floor(Math.random() * array.length)];

class FlipMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 1;
    }

    rotate(amount) {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const deg = direction * amount * 4;
        return `rotate(${deg}deg)`;
    }

    scale(amount) {
        amount = amount * 2;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const sf = 1 + direction * amount / 10;
        return `scale(${sf}, ${sf})`
    }

    manglePost(amount) {
        const options = [this.rotate, this.scale];
        let actual_amount = Math.random() * (amount - this.cost);
        actual_amount = 20*actual_amount**2;

        process = (e) => {
            if (e) {
                e.style.transform = random_select(options)(actual_amount);
            }
        };

        [
            this.post.header.image,
            this.post.middle.media,
        ].forEach(process);
        this.post.footer.buttons?.forEach(process);
        return actual_amount;
    }

}

export default FlipMangler;
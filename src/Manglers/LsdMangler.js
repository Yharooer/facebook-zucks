import BaseMangler from "./BaseMangler";

class LsdMangler extends BaseMangler {
    constructor(post) {
        super(post);
        this.cost = 1.5;
    }

    manglePost(amount) {
        amount = amount * (Math.random() + 0.5);

        if (amount < this.cost) return;

        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
        @keyframes lsd-anim {
            0% {
                -webkit-transform: scaleY(1);
                -moz-transform: scaleY(1);
                -ms-transform: scaleY(1);
                -o-transform: scaleY(1);
                transform: scaleY(1)
            }
        
            33% {
                -webkit-transform: scaleY(1.2) skewY(-2deg) scaleX(1.2) translateZ(0);
                -moz-transform: scaleY(1.2) skewY(-2deg) scaleX(1.2) translateZ(0);
                -ms-transform: scaleY(1.2) skewY(-2deg) scaleX(1.2) translateZ(0);
                -o-transform: scaleY(1.2) skewY(-2deg) scaleX(1.2) translateZ(0);
                transform: scaleY(1.2) skewY(-2deg) scaleX(1.2) translateZ(0)
            }
        
            66% {
                -webkit-transform: scaleY(1.2) skewY(2deg) translateZ(0);
                -moz-transform: scaleY(1.2) skewY(2deg) translateZ(0);
                -ms-transform: scaleY(1.2) skewY(2deg) translateZ(0);
                -o-transform: scaleY(1.2) skewY(2deg) translateZ(0);
                transform: scaleY(1.2) skewY(2deg) translateZ(0)
            }
        
            100% {
                -webkit-transform: scaleY(1.1) scaleX(1.1);
                -moz-transform: scaleY(1.1) scaleX(1.1);
                -ms-transform: scaleY(1.1) scaleX(1.1);
                -o-transform: scaleY(1.1) scaleX(1.1);
                transform: scaleY(1.1) scaleX(1.1)
            }
        }

        .lsd {
            position: absolute;
            left: 0;
            right: 0;
            display: block;
            filter: invert(1) brightness(.9) saturate(.8);
            top: 0;
            mix-blend-mode: difference;
            transition: opacity .6s ease;
            opacity: min(var(--i), 1);
            animation: lsd-anim 20s infinite alternate ease;
            animation-delay: 0s;
            pointer-events: none;
        }

        .lsd2 {
            position: absolute;
            left: 0;
            right: 0;
            display: block;
            filter: invert(0.7) brightness(1.1) saturate(1.8);
            top: 0;
            mix-blend-mode: difference;
            transition: opacity .6s ease;
            opacity: min(calc(var(--i) * 0.5), 1);
            animation: lsd-anim 25s infinite alternate ease;
            animation-delay: 0s;
            pointer-events: none;
        }

        .lsd3 {
            position: absolute;
            left: 0;
            right: 0;
            display: block;
            filter: invert(0.5) brightness(1.2) saturate(2.8);
            top: 0;
            mix-blend-mode: difference;
            transition: opacity .6s ease;
            opacity: min(calc(var(--i) * 0.3), 1);
            animation: lsd-anim 30s infinite alternate ease;
            animation-delay: 0s;
            pointer-events: none;
        }
        `;
        document.head.appendChild(styleElement);

        const lsdAmount = Math.max(0, amount - 1);

        const lsdElement = document.createElement('div');
        lsdElement.classList.add('lsd');
        lsdElement.innerHTML = this.post.root.innerHTML;
        lsdElement.style.setProperty('--i', lsdAmount);
        this.post.root.appendChild(lsdElement);

        if (amount > 3) {
            const lsdElement2 = document.createElement('div');
            lsdElement2.classList.add('lsd2');
            lsdElement2.innerHTML = this.post.root.innerHTML;
            lsdElement2.style.setProperty('--i', lsdAmount);
            this.post.root.appendChild(lsdElement2);
        }

        if (amount > 5) {
            const lsdElement3 = document.createElement('div');
            lsdElement3.classList.add('lsd3');
            lsdElement3.innerHTML = this.post.root.innerHTML;
            lsdElement3.style.setProperty('--i', lsdAmount);
            this.post.root.appendChild(lsdElement3);
        }

        return Math.min(amount, 5);
    }
}

export default LsdMangler;
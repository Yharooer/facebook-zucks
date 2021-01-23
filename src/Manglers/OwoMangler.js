import BaseMangler from './BaseMangler';

const owoify = require('owoify-js').default;

// TODO BUGS
// Breaks see more.
class OwoMangler extends BaseMangler {

    constructor(post) {
        super(post);
        this.cost = 20;
    }

    manglePost(amount) {
        // Do header and footer.
        const headFootType = (amount > 80) ? 'uvu' : (amount > 50) ? 'uwu' : 'owo';
        const headFootAmt = (amount > 80) ? 80 : (amount > 50) ? 50 : 20;

        const process = (e,type) => {
            if (e) {
                const spl = e.innerHTML.split(/<[^]+?>/g);
                spl.forEach(sp => {
                    e.innerHTML = e.innerHTML.replace(sp, owoify(sp, type));
                });
            }
        };

        [
            this.post.header.title,
            this.post.footer.likes,
            this.post.footer.comments,
            this.post.footer.shares,
        ].forEach(e => process(e, headFootType));

        // Do media section
        console.log(this.post.middle.media);
        const mediaText = Array.from(this.post.middle.media?.getElementsByTagName('span') ?? []).filter(e => e.childElementCount == 0 && e.innerText != '');
        console.log(mediaText);
        let mediaAmt = 0;
        if (mediaText.length > 0) {
            let mediaType = (amount-headFootAmt > 80) ? 'uvu' : (amount-headFootAmt > 50) ? 'uwu' : (amount-headFootAmt > 20) ? 'owo' : null;
            mediaAmt = (amount-headFootAmt > 80) ? 80 : (amount-headFootAmt > 50) ? 50 : (amount-headFootAmt > 20) ? 20 : 0;

            if (mediaType != null) {
                mediaText.forEach(e => process(e, mediaType));
            }
        }
        
        // Do body
        const bodyType = (amount-headFootAmt > 80) ? 'uvu' : (amount-headFootAmt > 50) ? 'uwu' : (amount-headFootAmt > 20) ? 'owo' : null;
        const bodyAmt = (amount-headFootAmt > 80) ? 80 : (amount-headFootAmt > 50) ? 50 : (amount-headFootAmt > 20) ? 20 : 0;

        if (bodyType != null) {
            this.post.middle.text?.forEach(e => process(e, bodyType));
        }

        return headFootAmt + mediaAmt + bodyAmt;
    }

}

export default OwoMangler;
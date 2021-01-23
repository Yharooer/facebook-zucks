import TestMangler from './Manglers/TestMangler';
import OwoMangler from './Manglers/OwoMangler';
import UvuMangler from './Manglers/UvuMangler';
import FlipMangler from './Manglers/FlipMangler';

class MangleHandler {

    constructor (feed) {
        this.resetPoint = 0; // The point at which the mangling resets.
        this.mangleValue = feed.length; // The 'score' for how mangled new posts should be.
        this.feed = feed;
        this.parsedLength = 0;

        this.allManglers = [UvuMangler, FlipMangler]; // Add new manglers here.
    }

    computeMangleValue() {
        this.mangleValue = (this.feed.length - this.resetPoint) * 10;
    }

    parseNewPosts() {
        this.computeMangleValue();

        const newPosts = this.feed.slice(this.parsedLength);
        this.parsedLength = this.feed.length;
        newPosts.forEach(p => this.manglePost(p));
    }

    manglePost(post) {
        let thisMangle = this.mangleValue * (Math.random()+1);

        const rand = Array.from(Array(this.allManglers.length).keys()).sort( () => .5-Math.random() ); // Generates indices of randomised manglers.
        for (let i=0; i<rand.length; i++) {
            const mangler = new this.allManglers[i](post);
            const actual_cost = mangler.manglePost(thisMangle);
            thisMangle -= actual_cost;
        }
    }

}

export default MangleHandler;
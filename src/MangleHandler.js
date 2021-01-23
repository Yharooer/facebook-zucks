import TestMangler from './Manglers/TestMangler';
import OwoMangler from './Manglers/OwoMangler';
import FlipMangler from './Manglers/FlipMangler';

class MangleHandler {

    constructor (feed, allowance, get_time) {
        this.resetPoint = 0; // The point at which the mangling resets.
        this.mangleValue = feed.length; // The 'score' for how mangled new posts should be.
        this.feed = feed;
        this.parsedLength = 0;
        this.allowance = allowance;
        this.current_time = 0;
        setInterval(() => get_time((time) => { // this is async, so won't be precise, but we don't care
            this.current_time = time;
        }), 3000);
        this.allManglers = [OwoMangler, FlipMangler]; // Add new manglers here.
    }

    computeMangleValue() {
        this.mangleValue = this.current_time / this.allowance;
        console.log(`Mangle value is ${this.mangleValue}.`);
    }

    parseNewPosts() {
        this.computeMangleValue();

        const newPosts = this.feed.slice(this.parsedLength);
        this.parsedLength = this.feed.length;
        newPosts.forEach(p => this.manglePost(p));
    }

    manglePost(post) {
        let thisMangle = this.mangleValue;

        const rand = Array.from(Array(this.allManglers.length).keys()).sort( () => .5-Math.random() ); // Generates indices of randomised manglers.
        for (let i=0; i<rand.length; i++) {
            const mangler = new this.allManglers[i](post);
            const actual_cost = mangler.doMangle(thisMangle);
            thisMangle -= actual_cost;
        }
    }

}

export default MangleHandler;
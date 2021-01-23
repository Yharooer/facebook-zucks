import TestMangler from './Manglers/TestMangler';

class MangleHandler {

    constructor (feed) {
        this.resetPoint = 0; // The point at which the mangling resets.
        this.mangleValue = 0; // The 'score' for how mangled new posts should be.
        this.feed = feed;
        this.parsedLength = 0;

        this.allManglers = [TestMangler]; // Add new manglers here.
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
            console.log('Mangling a post');
            const mangler = new this.allManglers[i](post);
            console.log(mangler);
            thisMangle -= mangler.cost;
            if (thisMangle < 0) { break; }
            mangler.manglePost();
        }
    }

}

export default MangleHandler;
class Post {
    constructor(content) {
        const content_depth = 10;
        const main_content = this.getNestedChildren(content, content_depth).children[1].children[0];
        this.header = this.parseHeader(main_content.children[1]);
        this.middle = this.parseMiddle(main_content.children[2]);
        this.footer = this.parseFooter(main_content.children[3]);
    }

    getNestedChildren(dom, n) {
        let result = dom;
        for (let i = 0; i < n; i++) {
            result = result.children[0];
        }
        return result;
    }

    parseHeader(dom) {
        let indices = [0, 1, 0, 0, 0];
        let result = dom;
        for (let i of indices) {
            result = result.children[indices[i]];
        }
        console.log(result);
        return result;
    }

    parseMiddle(dom) {

    }

    parseFooter(dom) {

    }
}

export default Post;

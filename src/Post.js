class Post {
    constructor(content) {
        const content_depth = 10;
        const main_content = this.getNestedChildren(content, content_depth).children[1].children[0];
        this.root = main_content;
        this.header = this.parseHeader(main_content.children[1]);
        this.middle = this.parseMiddle(main_content.children[2]);
        this.footer = this.parseFooter(main_content.children[3]);
    }

    getNestedChildren(dom, n) {
        let result = dom;
        for (let i = 0; i < n; i++) {
            result = result?.children[0];
        }
        return result;
    }

    parseHeader(root) {
        let image = root?.children[0]?.children[0]?.querySelector('a svg image');
        let title = root?.children[0]?.children[1]?.querySelector('h4 a span');
        // TODO: this doesn't work for posts to groups: eg. Jakub Priban > JCSU Group
        // will only select 'Jakub Priban' and not 'JCSU Group'
        return { root, image, title };
    }

    parseMiddle(root) {
        let text_content = root?.children[0]?.querySelector('div div span[dir="auto"]')?.children;
        let text = null;
        if (text_content) {
            text = []; // beware - can have null elements!
            Array.from(text_content).forEach(
                d => d?.querySelectorAll('div[dir="auto"]').forEach(
                    x => x ? text.push(x) : null
                )
            );
        }
        let media = null;
        if (text && root.children.length > 1) {
            // there is text and media in the post
            media = root?.children[1];
        } else if (!text) {
            // there is no text, so the first child is the media
            media = root?.children[0];
        }
        return { root, text, media };
    }

    parseFooter(root) {
        let thing = this.getNestedChildren(root, 6);
        const likes = thing?.children[0]?.children[1]?.querySelector('div span span span span');
        const comments_shares = thing?.children[thing.children.length - 1];
        const comments = comments_shares?.children[0]?.querySelector('div span[dir="auto"]');
        const shares = comments_shares?.children[1]?.querySelector('div span[dir="auto"]');
        const buttons = this.getNestedChildren(root, 4)?.children[1]?.children[0]?.children;
        return {
            likes, comments, shares,
            buttons: buttons ? Array.from(buttons) : null
        };
    }
}

export default Post;

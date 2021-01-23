class UITweaker {
    constructor() {

    }

    run() {
        document.querySelectorAll('[type=search]')[0].placeholder = 'Search FacebookZucks';
        document.querySelectorAll('[role=banner]')[0].querySelectorAll('[aria-label=Facebook]')[0].getElementsByTagName('path')[1].setAttribute('d',
        `M10.4,37.6l6.1,2.1c0.1,0,0.3,0.1,0.4,0.1c1,0.2,2.1,0.3,3.1,0.3c1,0,2-0.1,3-0.3c0.2,0,0.4-0.1,0.6-0.2
        l3.1-1.4c0.5-0.2,0.9-0.6,1.2-1.1l2.4-4.4c0-0.1,0.1-0.1,0.1-0.2L29,30.7c0.6-2-0.2-1.7-1.2-2.5l-2.7-5c-0.6-0.5-1.7-3.6-1.7-4.4
        l-8.6-3.4c0-1.5,4.9-0.8,6.9-0.7c0.2,0,4.1,0.9,4.3,0.9l7.9-2.3c0.8-0.4,0.3-2.2,0.2-2.9l-2.4-2.5c0-1.2-2.6-2.8-3.7-3.1
        c-6-1.4-20.5,10-21.5,10.8c-1.2,0.9,6.9,0.5,10.4,6.1c3.2,5,1.1,3.6,1.3,3.7l3.6,1.4c2.7,2.5,0.6,5-2.6,6.8L17,34.6`);
        Array.from(document.querySelectorAll('[aria-label="Create a post"]')[0].getElementsByTagName('span')).forEach(e => {
            if (e.innerHTML.includes('What\'s on your mind')) {
                e.innerHTML = e.innerHTML.replace('What\'s on your mind', 'You\'re on my mind').replace('?', '.');
            }
        })
    }
}

export default UITweaker;
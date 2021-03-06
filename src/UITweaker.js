class UITweaker {
    constructor() {

    }

    run() {
        document.querySelectorAll('[type=search]')[0].placeholder = 'Search ZuckMuck';
        document.querySelectorAll('[role=banner]')[0].querySelectorAll('[aria-label=Facebook]')[0].getElementsByTagName('path')[1].setAttribute('d',
        `M19.9,39.7l-1.4-0.1c-0.5-0.2-2,0.5-2.1,0.1c-0.1-0.4-0.1-1.1,0.2-2.1c0.3-1,0.7-2.3,1.5-3.7
		c0.7-1.5,1.7-3.1,3-4.9c1.3-1.8,2.8-3.6,4.6-5.5c-0.4-0.8-0.8-1.3-1.3-1.4s-1-0.1-1.8,0.2c-0.7,0.2-1.7,1-3.1,2.3
		c-1.4,1.3-2.5,2.6-3.4,4.1c-0.3,0.6-0.6,0.9-0.8,1c-0.2,0.1-0.4-0.1-0.5-0.4c-0.2-0.6-0.3-1.4-0.2-2.4c0.1-1,0.3-1.8,0.7-2.4
		c0.5-0.9,1.4-2,2.7-3.3c1.4-1.4,2.6-2.8,3.7-4.2c1-1.4,1.8-2.7,2.3-3.8s0.6-1.8,0.5-2.2c-0.2-0.4-0.7-0.5-1.5-0.2
		c-1.1,0.4-2.3,1.1-3.7,2.1c-1.3,1-2.7,2.4-4.2,4.1c-1.5,1.7-2.9,3.7-4.4,5.9c-0.5-1.6-0.8-2.9-0.9-3.9c-0.1-1-0.1-1.9,0.1-2.6
		c0.2-0.7,0.5-1.4,1-2.1c0.5-0.7,1.2-1.6,2.2-2.7c2.8-3.2,5.3-5.2,7.6-6c1.4-0.5,2.7-0.6,3.7-0.1c1.1,0.4,1.8,1.2,2.3,2.5
		c0.3,0.9,0.4,1.8,0.3,2.7c-0.1,0.9-0.4,1.8-0.9,2.7C25.4,14.1,24.7,15,24,16c-0.7,0.9-1.7,2-2.8,3.1c1.5-0.5,2.8-0.5,3.7-0.2
		s1.7,1.3,2.5,2.8l1.9-1.7l0.5,1.3l-2,1.9c0.2,2.1,0.1,4.2-0.5,6.2c-0.6,2-1.4,3.9-2.4,5.6c-1,1.7-1.5,2.9-2.6,4
		c0,0-0.9,0.6-1.5,0.8C20.4,39.8,20.2,39.8,19.9,39.7z M25.7,25.4c-1.1,1.1-2.2,2.3-3.1,3.7s-1.7,2.7-2.3,3.9
		c-0.6,1.2-1,2.4-1.4,3.3c-0.3,1-0.4,1.6-0.3,1.8c0.1,0.2,0.3,0.3,0.6,0.2c0.5-0.2,1.5-0.9,2.6-2.2c1-1.3,1.8-3,2.7-5.1
        c0.6-1.4,1-2.5,1.1-3.2C25.7,27,25.7,26.2,25.7,25.4z`);
        document.querySelectorAll('[role=banner]')[0].querySelectorAll('[aria-label=Facebook]')[0].getElementsByTagName('path')[1].style.transform = 'scale(0.9)';
        Array.from(document.querySelectorAll('[aria-label="Create a post"]')[0].getElementsByTagName('span')).forEach(e => {
            if (e.innerHTML.includes('What\'s on your mind')) {
                e.innerHTML = e.innerHTML.replace('What\'s on your mind', 'You\'re on my mind').replace('?', '.');
            }
        })
    }
}

export default UITweaker;
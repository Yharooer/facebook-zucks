import FacebookZucksProgram from './Program';

function get_allowance(cb) {
    chrome.storage.sync.get(['allowance'], (result) => cb(result.allowance)); 
}

function get_time(cb) {
    chrome.storage.sync.get(['time'], (result) => cb(result.time)); 
}

function set_time(value, cb) {
    chrome.storage.sync.set({time: value}, cb); 
}

function increment_time(value, cb) {
    get_time((time) => set_time(time + value, cb));
}

const interval = 3; // seconds

window.addEventListener('load', () => {
    get_allowance((allowance) => {
        const zucks = new FacebookZucksProgram(allowance, get_time);
        zucks.initialise();
        zucks.start();    
    });
    setInterval(() => increment_time(interval / 60), interval * 1000);
});

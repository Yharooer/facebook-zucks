import FacebookZucksProgram from './Program';

window.addEventListener('load', () => {
    const zucks = new FacebookZucksProgram();
    zucks.initialise();
    zucks.start();
});

import cre8bit from './cre8bit-reflection.js'

const setVersionAndYear = async () => {
    const res = await fetch('https://api.github.com/repos/daveknights/cre8bit/tags');
    const json = await res.json();
    const version =  json[0].name;

    document.querySelector('.v-btn').textContent = version;
    document.querySelector('.v-footer').textContent = version;
    document.querySelector('.year').textContent = new Date().getFullYear();
};

setVersionAndYear();

const getSize = size => {
    switch (true) {
        case window.innerWidth > 1099:
            return size * 2
        default:
            return size;
    }

}

window.onload = () => {
    // Header
    new cre8bit().create('ghost', {colour: 'red', size: getSize(3), flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {colour: 'pink', size: getSize(4), flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {size: getSize(5), flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {colour: 'orange', size: getSize(6), flip: true, reflection: true, parentClass: 'header-svgs'});
    // Colour
    new cre8bit().create('mario', {size: getSize(4), parentClass: 'mario'});
    new cre8bit().create('mario', {size: getSize(4), colour: 'green', parentClass: 'luigi'});
    // Animating
    new cre8bit().create('space invader', {size: getSize(12), animate: true, parentClass: 'animating-svg'});
    // Reflections
    new cre8bit().create('ufo', {size: getSize(9), reflection: true, wrapperClass: 'ufo-wrap', parentClass: 'reflection-svg'});
};
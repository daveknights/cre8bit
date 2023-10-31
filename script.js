import cre8bit from './cre8bit.min.js'

const getSize = size => window.innerWidth > 999 ? size * 2 : size;

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
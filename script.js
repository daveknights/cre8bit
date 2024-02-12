import cre8bit from './cre8bit.min.js'

window.onload = () => {
    // Header
    new cre8bit().create('ghost', {colour: 'red', responsive: [3, 3, 6], flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {colour: 'pink', responsive: [4, 4, 8], flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {responsive: [5, 5, 10], flip: true, reflection: true, parentClass: 'header-svgs'});
    new cre8bit().create('ghost', {colour: 'orange', responsive: [6, 6, 12], flip: true, reflection: true, parentClass: 'header-svgs'});
    // Colour
    new cre8bit().create('mario', {responsive: [4, 4, 8], parentClass: 'mario'});
    new cre8bit().create('mario', {responsive: [4, 4, 8], colour: 'green', parentClass: 'luigi'});
    // Animating
    new cre8bit().create('space invader', {responsive: [12, 12, 24], animate: true, parentClass: 'animating-svg'});
    // Reflections
    new cre8bit().create('ufo', {responsive: [9, 9, 18], reflection: true, wrapperClass: 'ufo-wrap', parentClass: 'reflection-svg'});
};
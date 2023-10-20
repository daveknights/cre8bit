import cre8bit from "../cre8bit.min.js";

new cre8bit().create('space invader', {parentClass: 'basic'});

new cre8bit().create('space invader', {size: 12, colour: 'slateblue', parentClass: 'options'});

const ufo = new cre8bit().create('ufo', { parentClass: 'helper-methods'});
ufo.setSize(12).setColour('#ff6461');

new cre8bit().create('space invader', {size: 12, colour: '#333', animate: true, parentClass: 'animate'});

new cre8bit().create('poke ball', {size: 10, outline: true, parentClass: 'outline'});

new cre8bit().create('pacman', {size: 9, wrapperClass: 'my-wrapper', parentClass: 'wrapper'});

new cre8bit().create('pacman', {size: 8, flip: 'horizontally', parentClass: 'parent'});
new cre8bit().create('ghost', {size: 8, flip: 'horizontally', parentClass: 'parent'});

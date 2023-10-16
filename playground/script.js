import cre8bit from "/cre8bit.min.js";

const state = {
    character: '',
    colour: null,
    size: 10,
    flip: false,
    animate: false,
    parentClass: 'character-container',
    outline: false
};
const specs = {
    'space invader': {xs: 24, sm: 28, lg: 40, col: '#00ff00', canAnimate: true},
    'ufo': {xs: 17, sm: 20, lg: 28, col: '#ff0000', canAnimate: false},
    'pacman': {xs: 20, sm: 22, lg: 34, col: '#ffff00', canAnimate: true},
    'ghost': {xs: 18, sm: 22, lg: 30, col: '#00ffff', canAnimate: true},
    'poke ball': {xs: 19, sm: 22, lg: 34, col: '#ff0000', canAnimate: false},
    'mario': {xs: 16, sm: 20, lg: 28, col: '#ff0000', canAnimate: false},
    'mushroom': {xs: 18, sm: 22, lg: 30, col: '#ff0000', canAnimate: false},
    'kirby': {xs: 18, sm: 22, lg: 30, col: '#ffc0cb', canAnimate: false}
}
let optionFields = {};
let character, characterArea, characterContainer, codeOutput, codeArea;
let codeDefaultText = '<pre><span class="new">new</span> <span class="method">cre8bit</span>().<span class="method">create</span>(';
let windowSize = 'sm';

const changeBackground = e => characterArea.style.background = e.target.value;

const setMaxSize = () => size.max = specs[state.character][windowSize];

const createCharacter = (data = state) => {
    characterContainer.innerHTML = '';

    if (data.size > specs[data.character][windowSize]) {
        data.size = specs[data.character][windowSize];
    }

    if (!data.colour) {
        data.colour = specs[data.character].col;
        optionFields.colour.value = specs[data.character].col;
    }

    character = new cre8bit().create(data.character, {colour: data.colour, size: parseInt(data.size), flip: data.flip, animate: data.animate, parentClass: data.parentClass, outline: data.outline});
};

const showCode = () => {
    codeOutput.hidden && (codeOutput.hidden = false);
    codeArea.innerHTML = '';

    const codeText = document.createElement('code');
    let codeString = `${codeDefaultText}<span class="string character-name">'${state.character}'</span>, {
    <span class="key">colour</span>: <span class="string">'${state.colour}'</span>,
    <span class="key">size</span>: <span class="number">${state.size}</span>${state.flip ? ',' : ''}`;
    codeString += state.flip ? `<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">flip</span>: <span class="boolean">${state.flip}</span>` : '';codeString += state.outline ? ',' : '';
    codeString += state.outline ? `<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">outline</span>: <span class="boolean">${state.outline}</span>` : '';codeString += state.animate ? ',' : '';
    codeString += state.animate ? `<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">animate</span>: <span class="boolean">${state.animate}</span>` : '';
    codeString += '<br>});</pre>';
    codeText.innerHTML = codeString;

    codeArea.appendChild(codeText);
};

const updateState = e => {
    const target = e.target;
    const targetId = target.id;
    const targetValue = target.value;

    character && character.stop();

    if (targetId === 'character') {
        if (targetValue === '') {
            return;
        }

        state.animate = false;
        state.outline = false;
        document.querySelector('#animate-false').checked = true;
        document.querySelector('#outline-false').checked = true;

        if (specs[targetValue].canAnimate) {
            document.querySelector('#animate-option').classList.remove('hide');
        } else {
            document.querySelector('#animate-option').classList.add('hide');
        }

        if (optionFields.colour.disabled === true) {
            Object.values(optionFields).forEach(field => field.disabled = false);
        }

        state.colour = null;
        state.flip = false;
        document.querySelector('#flip-false').checked = true;
    }

    switch (true) {
        case targetId.startsWith('animate'):
            state.animate = targetValue === 'true' ? true : false;
            break;
        case targetId.startsWith('outline'):
            state.outline = targetValue === 'true' ? true : false;
            break;
        case targetId.startsWith('flip'):
            state.flip = targetValue === 'true' ? true : false;
            break;
        default:
            state[targetId] = targetValue;
            break;
    }

    setMaxSize();
    createCharacter();
    showCode();
}

const init = () => {
    document.querySelector('#bg-colour').addEventListener('input', changeBackground);
    document.querySelector('#character-options').addEventListener('input', updateState);

    const colour = document.querySelector('#colour');
    optionFields.colour = colour;

    const size = document.querySelector('#size');
    optionFields.size = size;

    window.innerWidth < 321 && (windowSize = 'xs');

    window.innerWidth > 600 && (windowSize = 'lg');

    optionFields.flipTrue = document.querySelector('#flip-true');
    optionFields.flipFalse = document.querySelector('#flip-false');
    optionFields.outlineTrue = document.querySelector('#outline-true');
    optionFields.outlineFalse = document.querySelector('#outline-false');

    characterArea = document.querySelector('.character-area');
    characterContainer = document.querySelector('.character-container');
    codeOutput = document.querySelector('.code-output');
    codeArea = document.querySelector('.code-area');
}

window.onload = () => init();
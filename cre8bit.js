export default class Cre8bit {
    #svgns = 'http://www.w3.org/2000/svg';
    #id = null;
    #characterName = '';
    #useAnimatePoints = false;
    #animateInterval = 0;
    // default options
    #container = 'body';
    #colour = '#333';
    #size = 5;
    #flip = null;
    #outlineWidth = 0;

    #characters = {
        pacman: {
            rows: 13,
            columns: 12,
            colour: 'yellow',
            points: [[[4,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,4],[10,4],[10,5],[7,5],[7,6],[4,6],
                     [4,7],[7,7],[7,8],[10,8],[10,9],[12,9],[12,11],[11,11],[11,12],[9,12],[9,13],[4,13],
                     [4,12],[2,12],[2,11],[1,11],[1,9],[0,9],[0,4],[1,4],[1,2],[2,2],[2,1],[4,1]]],
            animatePoints: [[[4,0],[8,0],[8,1],[10,1],[10,2],[11,2],[11,4],[12,4],[12,9],[11,9],[11,11],[10,11],[10,12],[8,12],[8,13],
                            [4,13],[4,12],[2,12],[2,11],[1,11],[1,9],[0,9],[0,4],[1,4],[1,2],[2,2],[2,1],[4,1]]]
        },
        ghost: {
            rows: 14,
            columns: 14,
            colour: 'cyan',
            points: [[[5,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,3],[13,3],[13,6],[14,6],[14,13],[13,13],[13,14],
                     [11,14],[11,13],[10,13],[10,12],[9,12],[9,13],[8,13],[8,14],[6,14],[6,13],[5,13],[5,12],[4,12],
                     [4,13],[3,13],[3,14],[1,14],[1,13],[0,13],[0,6],[1,6],[1,3],[2,3],[2,2],[3,2],[3,1],[5,1]]],
            animatePoints: [[[5,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,3],[13,3],[13,6],[14,6],[14,14],[13,14],[13,13],
                            [12,13],[12,12],[11,12],[11,13],[10,13],[10,14],[8,14],[8,12],[6,12],[6,14],[4,14],[4,13],[3,13],
                            [3,12],[2,12],[2,13],[1,13],[1,14],[0,14],[0,6],[1,6],[1,3],[2,3],[2,2],[3,2],[3,1],[5,1]]],
            extraPoints: {
                white: [[[4,3],[6,3],[6,4],[7,4],[7,5],[5,5],[5,7],[6,7],[6,8],[4,8],[4,7],[3,7],[3,4],[4,4]],
                        [[10,3],[12,3],[12,4],[13,4],[13,5],[11,5],[11,7],[12,7],[12,8],[10,8],[10,7],[9,7],[9,4],[10,4]]],
                blue: [[[5,5],[7,5],[7,7],[5,7]],
                       [[11,5],[13,5],[13,7],[11,7]]]
            }
        },
        spaceInvader: {
            rows: 8,
            columns: 11,
            colour: 'lime',
            points: [[[2,0],[3,0],[3,1],[4,1],[4,2],[7,2],[7,1],[8,1],[8,0],[9,0],[9,1],[8,1],[8,2],[9,2],[9,3],[10,3],
                     [10,4],[11,4],[11,7],[10,7],[10,5],[9,5],[9,7],[8,7],[8,8],[6,8],[6,7],[8,7],[8,6],[3,6],[3,7],[5,7],
                     [5,8],[3,8,],[3,7],[2,7],[2,5],[1,5],[1,7],[0,7],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[2,1]]],
            animatePoints: [[[2,0],[3,0],[3,1],[4,1],[4,2],[7,2],[7,1],[8,1],[8,0],[9,0],[9,1],[8,1],[8,2],[9,2],[9,3],[10,3],[10,1],
                            [11,1],[11,5],[10,5],[10,6],[9,6],[9,7],[10,7],[10,8],[9,8],[9,7],[8,7],[8,6],[3,6],[3,7],[2,7],[2,8],
                            [1,8],[1,7],[2,7],[2,6],[1,6],[1,5],[0,5],[0,1],[1,1],[1,3],[2,3],[2,2],[3,2],[3,1],[2,1]]],
            mask: [[3,3],[7,3]]
        },
        ufo: {
            rows: 7,
            columns: 16,
            colour: 'red',
            points: [[[5,0],[11,0],[11,1],[13,1],[13,2],[14,2],[14,3],[15,3],[15,4],[16,4],[16,5],[14,5],[14,6],
                     [13,6],[13,7],[12,7],[12,6],[11,6],[11,5],[9,5],[9,6],[7,6],[7,5],[5,5],[5,6],[4,6],[4,7],
                     [3,7],[3,6],[2,6],[2,5],[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[5,1]]],
            mask: [[3,3],[6,3],[9,3],[12,3]]
        },
        pokeBall: {
            rows: 12,
            columns: 13,
            colour: 'red',
            points: [[[4,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,4],[13,4],[13,5],[12,5],[12,6],[11,6],[11,7],[9,7],
                     [9,6],[8,6],[8,5],[5,5],[5,6],[4,6],[4,7],[2,7],[2,6],[1,6],[1,5],[0,5],[0,4],[1,4],[1,2],[2,2],
                     [2,1],[4,1]]],
            extraPoints: {
                white: [[[0,6],[1,6],[1,7],[2,7],[2,8],[5,8],[5,6],[8,6],[8,8],[11,8],[11,7],[12,7],[12,6],[13,6],[13,8],
                         [12,8],[12,10],[11,10],[11,11],[9,11],[9,12],[4,12],[4,11],[2,11],[2,10],[1,10],[1,8],[0,8]]],
                black: [[[0,5],[1,5],[1,6],[2,6],[2,7],[4,7],[4,6],[5,6],[5,5],[8,5],[8,6],[9,6],[9,7],[11,7],[11,6],
                        [12,6],[12,5],[13,5],[13,6],[12,6],[12,7],[11,7],[11,8],[8,8],[8,6],[5,6],[5,8],[8,8],[8,9],
                        [5,9],[5,8],[2,8],[2,7],[1,7],[1,6],[0,6]]]
            }
        },
        mushroom: {
            rows: 14,
            columns: 14,
            colour: 'red',
            points: [[[6,0],[8,0],[8,2],[9,2],[9,3],[11,3],[11,2],[12,2],[12,4],[11,4],[11,7],[12,7],[12,8],[14,8],[14,10],
                     [12,10],[12,9],[9,9],[9,8],[10,8],[10,5],[9,5],[9,4],[5,4],[5,5],[4,5],[4,8],[5,8],[5,9],[2,9],[2,10],
                     [0,10],[0,8],[2,8],[2,7],[3,7],[3,4],[2,4],[2,2],[3,2],[3,3],[5,3],[5,2],[6,2]]],
            extraPoints: {
                white: [[[0,5],[1,5],[1,3],[2,3],[2,4],[3,4],[3,7],[2,7],[2,8],[0,8]],
                        [[5,0],[6,0],[6,2],[5,2],[5,3],[3,3],[3,1],[5,1]],
                        [[8,0],[9,0],[9,1],[11,1],[11,3],[9,3],[9,2],[8,2]],
                        [[12,3],[13,3],[13,5],[14,5],[14,8],[12,8],[12,7],[11,7],[11,4],[12,4]],
                        [[5,4],[9,4],[9,5],[10,5],[10,8],[9,8],[9,9],[5,9],[5,8],[4,8],[4,5],[5,5]],
                        [[3,10],[11,10],[11,11],[12,11],[12,13],[11,13],[11,14],[3,14],[3,13],[2,13],[2,11],[3,11]]],
                black: [[[2,9],[12,9],[12,11],[11,11],[11,10],[9,10],[9,12],[8,12],
                         [8,10],[6,10],[6,12],[5,12],[5,10],[3,10],[3,11],[2,11]]]
            }
        },
        mario: {
            rows: 16,
            columns: 12,
            colour: 'red',
            points: [[[3,0],[8,0],[8,1],[11,1],[11,2],[2,2],[2,1],[3,1]],
                     [[2,7],[4,7],[4,10],[3,10],[3,11],[2,11],[2,10],[0,10],[0,9],[1,9],[1,8],[2,8],[2,7]],
                     [[5,7],[7,7],[7,9],[5,9]],
                     [[8,7],[10,7],[10,8],[11,8],[11,9],[12,9],[12,10],[10,10],[10,11],[9,11],[9,10],[8,10]]],
            extraPoints: {
                brown: [[[2,2],[5,2],[5,3],[4,3],[4,4],[5,4],[5,5],[3,5],[3,3],[2,3]],
                        [[1,3],[2,3],[2,5],[3,5],[3,6],[2,6],[2,5],[1,5]],
                        [[1,14],[4,14],[4,16],[0,16],[0,15],[1,15]],
                        [[8,14],[11,14],[11,15],[12,15],[12,16],[8,16]]],
                black: [[[7,2],[8,2],[8,4],[9,4],[9,5],[11,5],[11,6],[7,6],[7,5],[8,5],[8,4],[7,4]]],
                bisque: [[[2,3],[3,3],[3,5],[5,5],[5,4],[4,4],[4,3],[5,3],[5,2],[7,2],[7,4],[8,4],[8,2],[9,2],[9,3],[11,3],[11,4],[12,4],
                          [12,5],[9,5],[9,4],[8,4],[8,5],[7,5],[7,6],[9,6],[9,7],[3,7],[3,5],[2,5]],
                         [[0,10],[2,10],[2,11],[3,11],[3,12],[2,12],[2,13],[0,13]],
                         [[10,10],[12,10],[12,13],[10,13],[10,12],[9,12],[9,11],[10,11]]],
                blue: [[[4,7],[5,7],[5,9],[7,9],[7,7],[8,7],[8,10],[7,10],[7,11],[8,11],[8,10],[9,10],[9,12],[10,12],[10,14],
                        [7,14],[7,13],[5,13],[5,14],[2,14],[2,12],[3,12],[3,10],[4,10],[4,11],[5,11],[5,10],[4,10]]],
                yellow: [[[4,10],[5,10],[5,11],[4,11]],
                         [[7,10],[8,10],[8,11],[7,11]]]
            }
        },
        kirby: {
            rows: 14,
            columns: 14,
            colour: 'pink',
            points: [[[1,0],[3,0],[3,1],[2,1],[2,2],[3,2],[3,1],[4,1],[4,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,4],[13,4],[13,5],[14,5],
                      [14,8],[11,8],[11,9],[10,9],[10,10],[9,10],[9,12],[8,12],[8,13],[5,13],[5,12],[3,12],[3,11],[2,11],[2,10],[1,10],
                      [1,7],[0,7],[0,1],[1,1]]],
            extraPoints: {
                crimson: [[[1,12],[3,12],[3,13],[5,13],[5,14],[0,14],[0,13],[1,13]],
                          [[11,9],[14,9],[14,12],[13,12],[13,13],[12,13],[12,14],[10,14],[10,13],[9,13],[9,12],[10,12],[10,10],[11,10]],
                          [[3,5],[5,5],[5,6],[3,6]],
                          [[8,5],[10,5],[10,6],[8,6]]],
                black: [[[5,2],[6,2],[6,5],[5,5]],
                        [[7,2],[8,2],[8,5],[7,5]],
                        [[6,6],[7,6],[7,8],[6,8]]]
            }
        },
    };

    constructor() {
        this.#id = `c8b-${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`;
    }

    #characterPath() {
        let charName = this.#characterName;

        switch (charName) {
            case 'space invader':
                return this.#characters['spaceInvader'];
            case 'poke ball':
                return this.#characters['pokeBall'];
            default:
                if (charName in this.#characters) {
                    return this.#characters[charName];
                } else {
                    console.log('Character not available');
                }
                break;
        }
    }

    #createPath(points) {
        let makePath = '';
        for (const [i, [x,y]] of points.entries()) {
            if (i === 0) {
                continue;
            }
            makePath += `L ${(x * this.#size) + this.#outlineWidth} ${(y * this.#size) + this.#outlineWidth} `;
        }
        makePath += 'z';

        return makePath;
    }

    #createSvgElement(name, tag) {
        return document.createElementNS(name, tag);
    }

    #makeSVG(svg, charPath) {
        const newGroup = this.#createSvgElement(this.#svgns, 'g');
        const pathPoints = this.#useAnimatePoints === false ? charPath.points : charPath.animatePoints;
        let newPath = null;

        newGroup.setAttribute('fill', this.#colour);
        if(this.#outlineWidth === 0.5) {
            newGroup.setAttribute('stroke', 'black');
            newGroup.setAttribute('stroke-width', this.#outlineWidth);
        }

        if (charPath.mask) {
            const newDefs = this.#createSvgElement(this.#svgns, 'defs');
            const newMask = this.#createSvgElement(this.#svgns, 'mask');
            const wholeMask = this.#createSvgElement(this.#svgns, 'rect');

            newMask.setAttribute('id', `${this.#id}-mask`);

            wholeMask.setAttribute('x', 0);
            wholeMask.setAttribute('y', 0);
            wholeMask.setAttribute('width', (this.#size * charPath.columns) + (this.#outlineWidth * 2));
            wholeMask.setAttribute('height', (this.#size * charPath.rows) + (this.#outlineWidth * 2));
            wholeMask.setAttribute('fill', 'white');

            newMask.appendChild(wholeMask);

            for (const [x,y] of charPath.mask.values()) {
                const newBlock = this.#createSvgElement(this.#svgns, 'rect');
                newBlock.setAttribute('x', (x * this.#size) + this.#outlineWidth);
                newBlock.setAttribute('y', (y * this.#size) + this.#outlineWidth);
                newBlock.setAttribute('width', this.#size);
                newBlock.setAttribute('height', this.#size);
                newBlock.setAttribute('fill', 'black');

                newMask.appendChild(newBlock);
            }
            newDefs.appendChild(newMask);
            svg.appendChild(newDefs);
        }

        svg.appendChild(newGroup);

        for (const points of pathPoints) {
            newPath = this.#createSvgElement(this.#svgns, 'path');
            newPath.setAttribute('d', `M ${(points[0][0] * this.#size) + this.#outlineWidth} ${(points[0][1] * this.#size) + this.#outlineWidth} ${this.#createPath(points)}`);
            newGroup.appendChild(newPath);
        }

        charPath.mask && newPath.setAttribute('mask', `url(#${this.#id}-mask)`);

        if (charPath.extraPoints) {
            for (const [colour, pointsArrays] of Object.entries(charPath.extraPoints)) {
                for (const points of pointsArrays) {
                    const extraPath = this.#createSvgElement(this.#svgns, 'path');
                    extraPath.setAttribute('d', `M ${(points[0][0] * this.#size) + this.#outlineWidth} ${(points[0][1] * this.#size) + this.#outlineWidth} ${this.#createPath(points)}`);
                    extraPath.setAttribute('fill', colour);

                    newGroup.appendChild(extraPath);
                }
            }
        }

        return svg;
    }

    #editSVG() {
        const charPath = this.#characterPath();
        const svgEdit = document.getElementById(this.#id);
        svgEdit.innerHTML = '';
        svgEdit.setAttributeNS(null, 'width', `${(charPath.columns * this.#size) + (this.#outlineWidth * 2)}`);
        svgEdit.setAttributeNS(null, 'height', `${(charPath.rows * this.#size) + (this.#outlineWidth * 2)}`);

        this.#makeSVG(svgEdit, charPath);

        this.#flip && this.setFlip(this.#flip);
    }

    #animate() {
        this.#animateInterval = setInterval(() => {
            this.#useAnimatePoints = !this.#useAnimatePoints;
            this.#editSVG();
        }, 500);
    }

    stop() {
        if (this.#animateInterval) {
            clearInterval(this.#animateInterval);
        }
    }
     /**
     * @param {string} className
     */
    set #parentClass(className) {
        this.#container = `.${className}`;
    }
    /**
     * @param {string} colour
     * @param {boolean} [option]
     */
    setColour(colour, option) {
        if (CSS.supports('color', colour)) {
            this.#colour = colour;

            !option && this.#editSVG();
        } else {
            console.log(`${colour} is not a valid CSS colour`);
        }

        return this;
    }
    /**
     * @param {number} size
     * @param {boolean} [option]
     */
    setSize(size, option) {
        if (typeof size === 'number') {
            if (size > 71) {
                console.log(`Max size is 70, ${size} was provided`);
                size = 70;
            }
            this.#size = size;

            !option && this.#editSVG();
        } else {
            console.log(`${size} is not a number type`);
        }

        return this;
    }
    /**
     * @param {string} direction - horizontally | vertically
     */
    setFlip(direction) {
        if (direction) {
            if (direction === 'horizontally') {
                this.#flip = direction;
                document.getElementById(this.#id).querySelector('g').setAttribute('transform', `scale(-1, 1) translate(-${(this.#characterPath().columns * this.#size) + (this.#outlineWidth * 2)}, 0)`);
            } else if ((direction === 'vertically')) {
                this.#flip = direction;
                document.getElementById(this.#id).querySelector('g').setAttribute('transform', `scale(1, -1) translate(0, -${(this.#characterPath().rows * this.#size) + (this.#outlineWidth * 2)})`);
            } else {
                console.log('Only horizontally or vertically allowed');
            }
        }

        return this;
    }

    /**
     * @param {string} character - character
     * @param {object} [options] - Optional string colour, number size, string flip, boolean animate, string parentClass, string wrapperClass, boolean outline
     */
    create(character, options) {
        this.#characterName = character.toLowerCase();
        const newCharPath = this.#characterPath();
        const svgElem = this.#createSvgElement(this.#svgns, 'svg');
        let shape = null;
        let child = null;

        this.#colour = newCharPath.colour;

        svgElem.id = this.#id;
        svgElem.classList.add('cre8bit', this.#characterName.replace(' ', '-'));

        if (options) {
            options.parentClass && (this.#parentClass = options.parentClass);
            options.colour && this.setColour(options.colour, true);
            options.size && this.setSize(options.size, true);
            options.outline && (this.#outlineWidth = 0.5);
        }

        svgElem.setAttributeNS(null, 'width', `${(newCharPath.columns * this.#size) + (this.#outlineWidth * 2)}`);
        svgElem.setAttributeNS(null, 'height', `${(newCharPath.rows * this.#size) + (this.#outlineWidth * 2)}`);

        shape = this.#makeSVG(svgElem, newCharPath);

        if (options && options.wrapperClass) {
            child = document.createElement('div');
            child.className = options.wrapperClass;

            child.appendChild(shape);
        } else {
            child = shape;
        }

        document.querySelector(this.#container).appendChild(child);

        if (options) {
            options.flip && this.setFlip(options.flip);

            if (options.animate) {
                this.#useAnimatePoints = true;
                this.#animate();
            }
        }

        return this;
    }
}

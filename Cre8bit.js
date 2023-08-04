export default class Cre8bit {
    #svgns = 'http://www.w3.org/2000/svg';
    #id;
    #characterName;
    // default options
    #container = 'body';
    #colour = '#333';
    #size = 5;

    #pacman = {
        rows: 13,
        columns: 12,
        points: [[4,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,4],[10,4],[10,5],[7,5],[7,6],[4,6],
                 [4,7],[7,7],[7,8],[10,8],[10,9],[12,9],[12,11],[11,11],[11,12],[9,12],[9,13],[4,13],
                 [4,12],[2,12],[2,11],[1,11],[1,9],[0,9],[0,4],[1,4],[1,2],[2,2],[2,1],[4,1]]
    };
    #ghost = {
        rows: 14,
        columns: 14,
        points: [[5,0],[9,0],[9,1],[11,1],[11,2],[12,2],[12,3],[13,3],[13,6],[14,6],[14,13],[13,13],[13,14],
                 [11,14],[11,13],[10,13],[10,12],[9,12],[9,13],[8,13],[8,14],[6,14],[6,13],[5,13],[5,12],[4,12],
                 [4,13],[3,13],[3,14],[1,14],[1,13],[0,13],[0,6],[1,6],[1,3],[2,3],[2,2],[3,2],[3,1],[5,1]],
        extraPoints: {
            white: [[[4,3],[6,3],[6,4],[7,4],[7,5],[5,5],[5,7],[6,7],[6,8],[4,8],[4,7],[3,7],[3,4],[4,4]],
                    [[10,3],[12,3],[12,4],[13,4],[13,5],[11,5],[11,7],[12,7],[12,8],[10,8],[10,7],[9,7],[9,4],[10,4]]],
            blue: [[[5,5],[7,5],[7,7],[5,7]],
                   [[11,5],[13,5],[13,7],[11,7]]]
        }
    };
    #spaceInvader = {
        rows: 8,
        columns: 11,
        points: [[2,0],[3,0],[3,1],[4,1],[4,2],[7,2],[7,1],[8,1],[8,0],[9,0],[9,1],[8,1],[8,2],[9,2],[9,3],[10,3],
                 [10,4],[11,4],[11,7],[10,7],[10,5],[9,5],[9,7],[8,7],[8,8],[6,8],[6,7],[8,7],[8,6],[3,6],[3,7],[5,7],
                 [5,8],[3,8,],[3,7],[2,7],[2,5],[1,5],[1,7],[0,7],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[2,1]],
        mask: [[3,3],[7,3]]
    };
    #ufo = {
        rows: 7,
        columns: 16,
        points: [[5,0],[11,0],[11,1],[13,1],[13,2],[14,2],[14,3],[15,3],[15,4],[16,4],[16,5],[14,5],[14,6],
                 [13,6],[13,7],[12,7],[12,6],[11,6],[11,5],[9,5],[9,6],[7,6],[7,5],[5,5],[5,6],[4,6],[4,7],
                 [3,7],[3,6],[2,6],[2,5],[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[5,1]],
        mask: [[3,3],[6,3],[9,3],[12,3]]
    };

    constructor() {
        this.#id = `c8b-${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`;
    }

    #characterBlocks() {
        switch (this.#characterName) {
            case 'pacman':
                return this.#pacman;
            case 'ghost':
                return this.#ghost;
            case 'space invader':
                return this.#spaceInvader;
            case 'ufo':
                return this.#ufo;
            default:
                console.log('Character not available');
                break;
        }
    }

    #createPath(points) {
        let path = '';
        for (const [i, [x,y]] of points.entries()) {
            if (i === 0) {
                continue;
            }
            path += `L ${x * this.#size} ${y * this.#size} `;
        }
        path += 'z';

        return path;
    }

    #makeSVG(svg, characterBlocks) {
        const newPath = document.createElementNS(this.#svgns, 'path');

        newPath.setAttribute('d', `M ${characterBlocks.points[0][0] * this.#size} ${characterBlocks.points[0][1] * this.#size} ${this.#createPath(characterBlocks.points)}`);
        newPath.setAttribute('fill', this.#colour);

        if (characterBlocks.mask) {
            const newDefs = document.createElementNS(this.#svgns, 'defs');
            const newMask = document.createElementNS(this.#svgns, 'mask');
            const maskId = `${this.#id}-mask`;
            const wholeMask = document.createElementNS(this.#svgns, 'rect');

            newMask.setAttribute('id', maskId);

            wholeMask.setAttribute('x', 0);
            wholeMask.setAttribute('y', 0);
            wholeMask.setAttribute('width', this.#size * characterBlocks.columns);
            wholeMask.setAttribute('height', this.#size * characterBlocks.rows);
            wholeMask.setAttribute('fill', 'white');

            newMask.appendChild(wholeMask);

            for (const [x,y] of characterBlocks.mask.values()) {
                const newBlock = document.createElementNS(this.#svgns, 'rect');
                newBlock.setAttribute('x', x * this.#size);
                newBlock.setAttribute('y', y * this.#size);
                newBlock.setAttribute('width', this.#size);
                newBlock.setAttribute('height', this.#size);
                newBlock.setAttribute('fill', 'black');

                newMask.appendChild(newBlock);
            }
            newDefs.appendChild(newMask);
            svg.appendChild(newDefs);
            newPath.setAttribute('mask', `url(#${maskId})`);
        }

        svg.appendChild(newPath);

        if (characterBlocks.extraPoints) {
            for (const [colour, pointsArrays] of Object.entries(characterBlocks.extraPoints)) {
                for (const points of pointsArrays) {
                    const extraPath = document.createElementNS(this.#svgns, 'path');
                    extraPath.setAttribute('d', `M ${points[0][0] * this.#size} ${points[0][1] * this.#size} ${this.#createPath(points)}`);
                    extraPath.setAttribute('fill', colour);

                    svg.appendChild(extraPath);
                }
            }
        }

        return svg;
    }

    #editSVG() {
        const characterBlocks = this.#characterBlocks();
        const svg = document.getElementById(this.#id);
        svg.innerHTML = '';
        svg.setAttributeNS(null, 'width', `${characterBlocks.columns * this.#size}`);
        svg.setAttributeNS(null, 'height', `${characterBlocks.rows * this.#size}`);

        this.#makeSVG(svg, characterBlocks);
    };
     /**
     * @param {string} className
     */
    set #parentClass(className) {
        this.#container = `.${className}`;
    };
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
                document.getElementById(this.#id).setAttribute('transform', 'scale(-1, 1)');
            } else if ((direction === 'vertically')) {
                document.getElementById(this.#id).setAttribute('transform', 'scale(1, -1)');
            } else {
                console.log('Only horizontally or vertically allowed');
            }
        }

        return this;
    }

    /**
     * @param {string} character - character
     * @param {object} [options] - Optional string colour, number size, string flip, string parentClass, string wrapperClass
     */
    create(character, options) {
        this.#characterName = character.toLowerCase();
        const characterBlocks = this.#characterBlocks();
        const svgElem = document.createElementNS(this.#svgns, 'svg');
        let shape = null;
        let child = null;

        svgElem.id = this.#id;
        svgElem.classList.add('cre8bit', this.#characterName.replace(' ', '-'));

        if (options) {
            options.parentClass && (this.#parentClass = options.parentClass);
            options.colour && this.setColour(options.colour, true);
            options.size && this.setSize(options.size, true);
        }

        svgElem.setAttributeNS(null, 'width', `${characterBlocks.columns * this.#size}`);
        svgElem.setAttributeNS(null, 'height', `${characterBlocks.rows * this.#size}`);

        shape = this.#makeSVG(svgElem, characterBlocks);

        if (options && options.wrapperClass) {
            child = document.createElement('div');
            child.className = options.wrapperClass;

            child.appendChild(shape);
        } else {
            child = shape;
        }

        document.querySelector(this.#container).appendChild(child);

        if (options && options.flip) {
            this.setFlip(options.flip);
        }

        return this;
    }
}

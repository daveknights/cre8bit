# ![Cre8bit logo](/logo.png) Cre8bitJS
![8bit Space Invader, Ufo, Pacman and Ghost](/cre8bitjs.gif)

Cre8bitJS is a lightweight Javascript library that adds 8bit style retro video game characters to your web page as svgs. These are created dynamically allowing for customisation.
## Setup
Via npm for use with a bundler.
```
$ npm install cre8bitjs --save
```
```javascript
import cre8bit from 'cre8bitjs';
```
**Or**

Download and include the [unminified](https://github.com/daveknights/cre8bit/blob/main/Cre8bit.js) or [minified](https://github.com/daveknights/cre8bit/blob/main/Cre8bit.min.js)* version in your project (or scripts folder) and specify the path.
```javascript
import cre8bit from "./cre8bit.js"; // "./cre8bit.min.js"; (For the minified version)
```
And set your own javascript file to `type="module"`.

_* At the time of writing, a minifier that could handle private properties & methods could not be found,
so a [custom node minifying script](https://gist.github.com/daveknights/7e6124184c5d49f8498d6fa91fb21181) was created, shaving nearly 40% (5kb) off the unminified version._
## Usage
```javascript
// The most basic usage of the library
new cre8bit().create('space invader');
```
### Examples
```javascript
// Create an svg with custom options
new cre8bit().create('pacman', {size: 12, parentClass: 'container'});

// Some helper methods are available if you need to modify the svg after creation
const pacman = new cre8bit().create('pacman');
pacman.setSize(20);
// Methods can be chained
pacman
  .setColour('#f9eb06')
  .setFlip('horizontally');

// Animation option available for certain characters
const ghost = new cre8bit().create('ghost', {animate: true});
// Cancel animation
ghost.stop();
```
### Character names
Pass one as the first argument to the **create** method.
- `'space invader'`
- `'ufo'`
- `'pacman'`
- `'ghost'`
- `'poke ball'`
- `'mushroom'`
### Options
Optional object passed as the second argument to the **create** method.

`(string) colour` - Any valid CSS colour name or hex value e.g: `red` or `#c8b`. Characters have a default colour.

`(number) size` - Up to a maximum size of **70**. The default is `5`.

`(string) flip` - One of **horizontally** or **vertically** only.

`(boolean) animate` - Only available currently with **space invader**, **pacman** & **ghost**. 

`(string) parentClass` - Use this to add the svg to an existing DOM element by providing the class name. If none is provided they are added to the document body.

`(string) wrapperClass` - Use this to wrap the svg in a div with the class name provided.

`(boolean) outline` - Add an outline to all paths of a character. Useful if there is not enough contrast between the character colour and your page background, or the character (parts of the character) are the same colour as your page.

### Helper methods
`setColour(string)` - Any valid CSS colour name or hex value e.g: `red` or `#c8b`. Characters have a default colour.

`setSize(number)` - Up to a maximum size of **70**. The default is `5`.

`setFlip(string)` - One of **horizontally** or **vertically** only.

`stop()` - Stop a currently animating character.
## In action
See some [examples](https://daveknights.github.io/cre8bit-examples/) of the library in use.

Try out the library in the [Cre8bitJS Playground](https://daveknights.github.io/cre8bit-playground/).


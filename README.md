# cre8bit
![8bit Space Invader, Ufo, Pacman and Ghost](/cre8bit.png)

Crea8bit is a tiny Javascript library that adds 8bit style retro video game characters to your web page as svgs. These are created dynamically allowing for customisation.
## Setup
Download Cre8bit.js and include in your project or scripts folder.
Then inside your own javascript file import the library and provide the path to it's location.
```javascript
// Include at the top of your javascript file
import cre8bit from "./Cre8bit.js";
```
Set your own javascript file to `type="module"`.
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
```
### Character names
Pass one as the first argument to the **create** method.
- `'space invader'`
- `'ufo'`
- `'pacman'`
- `'ghost'`
### Options
Optional object passed as the second argument to the **create** method.

`(string) colour` - Any valid CSS colour name or hex value e.g: `red` or `#c8b`. The default is `#333`.

`(number) size` - Up to a maximum size of **70**. The default is `5`.

`(string) flip` - One of **horizontally** or **vertically** only.

`(string) parentClass` - Use this to add the svg to an existing DOM element by providing the class name. If none is provided they are added to the document body.

`(string) wrapperClass` - Use this to wrap the svg in a div with the class name provided.
### Helper methods
`setColour(string)` - Any valid CSS colour name or hex value e.g: `red` or `#c8b`. The default is `#333`.

`setSize(number)` - Up to a maximum size of **70**. The default is `5`.

`setFlip(string)` - One of **horizontally** or **vertically** only.
## Examples
See some [examples](https://daveknights.github.io/cre8bit-examples/) of the library in use.

Try out the library in the [Cre8bit Playground](https://daveknights.github.io/cre8bit-playground/).


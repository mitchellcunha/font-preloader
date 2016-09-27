## font-preloader
A simple module which takes an array of font-family names as input, and quickly adds an empty span with each font-family to an invisible div in the body of your web page. This forces the web browser to preload those fonts, and then the module removes the div completely.

## Installation
`npm install --save font-preloader`

## Usage
Require and call this module when your css has been added to the page and you are about to start the application.

```javascript
const preloader = require('font-preloader');

// Font families in your css that you want to preload ahead of seeing them.
let fontFamilies = ['font-family-one', 'font-family-two'];
preloader(fontFamilies);
```

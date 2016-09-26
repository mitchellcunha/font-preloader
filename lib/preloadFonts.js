const _ = require('lodash');

module.exports = function preloadFonts (fontFamilies){
  let fontParent = document.createElement('div');
  fontParent.id = 'font-loader';
  document.getElementsByTagName('body')[0].appendChild(fontParent);
  _.each(fontFamilies, (name) => {
    let span = document.createElement('span');
    span.style.fontFamily = name;
    document.getElementById('font-loader').appendChild(span);
  });

  setTimeout(function () {
    document.getElementById('font-loader').parentNode.removeChild(
      document.getElementById('font-loader')
    );
  }, 2000);
};
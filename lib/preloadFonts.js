const _ = require('lodash');

module.exports = function preloadFonts (fontFamilies){
  let fontParent = document.createElement('div');
  fontParent.id = 'font-loader';
  fontParent.style.opacity = 0;
  fontParent.style.zIndex = -1;
  document.getElementsByTagName('body')[0].appendChild(fontParent);
  _.each(fontFamilies, function (name) {
    let span = document.createElement('span');
    span.style.fontFamily = name;
    span.textContent = name;
    document.getElementById('font-loader').appendChild(span);
  });

  setTimeout(function () {
    document.getElementById('font-loader').parentNode.removeChild(
      document.getElementById('font-loader')
    );
  }, 100);
};
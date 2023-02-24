const loaderIframe = document.getElementById('loader-iframe');
loaderIframe.addEventListener('load', function() {
  const loaderStyles = document.createElement('link');
  loaderStyles.rel = 'stylesheet';
  loaderStyles.href = 'loader.css';
  loaderIframe.contentDocument.head.appendChild(loaderStyles);
});

window.onload = function() {
  loaderIframe.parentNode.removeChild(loaderIframe);
};
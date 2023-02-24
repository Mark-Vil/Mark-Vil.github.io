const loaderIframe = document.getElementById('loader-iframe');
loaderIframe.addEventListener('load', function() {
  const loaderStyles = document.createElement('link');
  loaderStyles.rel = 'stylesheet';
  loaderStyles.href = 'loading.css';
  loaderIframe.contentDocument.head.appendChild(loaderStyles);
});

setTimeout(function() {
    loaderIframe.parentNode.removeChild(loaderIframe);
  }, 2000);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-PG98WLVP');

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  for (const [key, value] of urlParams.entries()) {
    window.dataLayer.push({'key': key, 'value': value});
  }
}

function sendGetRequest() {
  const gtmData = window.dataLayer[0];
  const queryString = Object.keys(gtmData).map(key => key + '=' + gtmData[key]).join('&');
  fetch('https://httpbin.org/get?' + queryString)
  .then(response => response.json())
  .then(data => console.log(data));
}

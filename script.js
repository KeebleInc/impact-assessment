// Send GET API request with query string parameters
function sendAPIRequest() {
    var queryStringParams = getQueryStringParams();

    // Build API URL with query string parameters
    var apiUrl = "https://httpbin.org/get";

    Object.keys(queryStringParams).forEach(function(key) {
        apiUrl += "?" + key + "=" + queryStringParams[key];
    });

   // Make the API request using fetch()
   fetch(apiUrl)
       .then(response => response.json())
       .then(data => console.log(data));
}

// Event listener for button click
document.getElementById("apiButton").addEventListener("click", function() {
    sendAPIRequest();
});

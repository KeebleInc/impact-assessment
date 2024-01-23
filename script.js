// Function to make API request
function sendApiRequest() {
  const gtmData = window.dataLayer[0];

  if (gtmData) {
    const apiUrl = `https://httpbin.org/get?key=${gtmData.key}&value=${gtmData.value}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  } else {
    console.error('No data in GTM data layer.');
  }
}

// Event listener for the button click
document.getElementById('apiButton').addEventListener('click', sendApiRequest);

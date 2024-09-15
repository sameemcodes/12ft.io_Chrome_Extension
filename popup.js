  // popup.js
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modifyUrl').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentUrl = tabs[0].url;
        let newUrl = 'https://12ft.io/' + currentUrl;
        chrome.tabs.update(tabs[0].id, {url: newUrl});
      });
    });
  });
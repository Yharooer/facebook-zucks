const main_script = 'bin/main.js'

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript({
      file: main_script
    });
});

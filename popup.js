// See the original creation of this at
// https://developer.chrome.com/extensions/examples/tutorials/getstarted/popup.js
//

function getCurrentTabUrl(callback) {
    // Query filter to be passed to chrome.tabs.Query
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;

        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url);
    });
}


function changeBackgroundColor(color) {
    var script = 'document.body.style.backgroundColor="' + color + '";';

    chrome.tabs.executeScript( {
        code: script
    });
}

function getSavedBackgroundColor(url, callback) {
    chrome.storage.sync.get(url, (items) => {
        callback(chrome.runtime.lastError ? null : items[url]);
    });
}

function saveBackgroundColor(url, color) {
    var items = {};
    items[url] = color;

    chrome.storage.sync.set(items);
}


// main
document.addEventListener('DOMContentLoaded', () => {


    
    getCurrentTabUrl((url) => {
        var dropdown = document.getElementById('dropdown');

        // load saved bg color for the page and modify dropdown if needed
        getSavedBackgroundColor(url, (savedColor) => {
            if(savedColor) {
                changeBackgroundColor(savedColor);
                dropdown.value = savedColor;
            }
        });

        dropdown.addEventListener('change', () => {
            changeBackgroundColor(dropdown.value);
            saveBackgroundColor(url, dropdown.value);
        });
    });
});

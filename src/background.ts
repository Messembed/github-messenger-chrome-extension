function polling() {
  console.log("polling");
  setTimeout(polling, 1000 * 30);
}

polling();

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.get(tabId, (tab) => {
      if(/https:\/\/github.com\/[a-zA-Z1-9\-]+(\/)?$/.test(tab.url)) {
        chrome.tabs.executeScript(tabId, {
          file: "js/github_messenger_payload.js",
        });
      }
    })
  }
});

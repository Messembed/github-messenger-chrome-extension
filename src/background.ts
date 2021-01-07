function polling() {
  console.log("polling");
  setTimeout(polling, 1000 * 30);
}

polling();

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.get(tabId, (tab) => {
      const url = new URL(tab.url);

      if (url.hostname === "github.com") {
        chrome.tabs.executeScript(tabId, {
          file: "js/github_messenger_payload.js",
        });
      }
    });
  }
});

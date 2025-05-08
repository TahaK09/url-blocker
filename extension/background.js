const blockedURL = ["x.com", "instagram.com", "facebook.com"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // I will only act when the tab is loading and has a valid URL
  if (changeInfo.status === "loading" && tab.url) {
    const match = tab.url.match(
      /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
    );

    if (match && match[1]) {
      const currentURL = match[1];

      if (blockedURL.includes(currentURL)) {
        // Redirect to a local page in your extension
        chrome.tabs.update(tabId, {
          url: chrome.runtime.getURL("blocked.html"),
        });
      }
    }
  }
});

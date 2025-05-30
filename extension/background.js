async function getBlockedURLs() {
  try {
    const res = await fetch("http://localhost:5000/api/urls/");
    const blockedURL = await res.json();
    return blockedURL;
  } catch (error) {
    console.error("Error fetching blocked URLs:", error);
    return [];
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading" && tab.url) {
    const match = tab.url.match(
      /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
    );

    if (match && match[1]) {
      const currentURL = match[1];

      getBlockedURLs().then((urls) => {
        //mapping the array of objects and returning the URL each time and making the array out of it
        const URLsArray = urls.map((entry) => {
          const match = entry.url.match(
            /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
          );
          return match && match[1];
        });

        if (URLsArray.includes(currentURL)) {
          chrome.tabs.update(tabId, {
            url: chrome.runtime.getURL("blocked.html"),
          });
        }
      });
    }
  }
});

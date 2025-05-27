document.addEventListener("DOMContentLoaded", () => {
  const blockListBtn = document.getElementById("blockListBtn");
  const startFocusBtn = document.getElementById("startFocusBtn");

  blockListBtn.addEventListener("click", () => {
    chrome.tabs.create({ url: "http://localhost:5173" });
  });
  startFocusBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "startFocusSession" });
  });
});

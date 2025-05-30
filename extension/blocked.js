document.addEventListener("DOMContentLoaded", () => {
  const closeSiteBtn = document.getElementById("close-text");
  if (closeSiteBtn) {
    closeSiteBtn.addEventListener("click", () => {
      window.close();
    });
  }
  const homeOpenBtn = document.getElementById("button-open");
  if (homeOpenBtn) {
    homeOpenBtn.addEventListener("click", () => {
      window.close();
      chrome.tabs.create({ url: "http://localhost:5173" });
    });
  }
});

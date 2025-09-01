chrome.action.onClicked.addListener((tab) => {
  const url = new URL(tab.url);

  let message = `Domain: ${url.hostname}\n`;

  if (url.protocol !== "https:") {
    message += "⚠️ Not secure (HTTP)\n";
    chrome.action.setBadgeText({ text: "!" });
    chrome.action.setBadgeBackgroundColor({ color: "red" });
  } else {
    message += "✅ Secure (HTTPS)\n";
    chrome.action.setBadgeText({ text: "✓" });
    chrome.action.setBadgeBackgroundColor({ color: "green" });
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (msg) => alert(msg),
    args: [message]
  });
});
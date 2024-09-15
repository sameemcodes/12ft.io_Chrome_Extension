chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith('http')) {
      const newUrl = `https://12ft.io/${tab.url}`;
      await chrome.tabs.update(tab.id, { url: newUrl });
    }
  });
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    // Redirect the original request without the g+
    // Note, this is called after redirect as well, so g+g+eazy won't work.
    return {redirectUrl: info.url.replace("q=g+", "q=")};
  },
  // filters
  {
    urls: [
      "*://*.google.com/search*"
    ]
  },
  // extraInfoSpec
  ["blocking"]
);

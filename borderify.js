function capture(el) {
  var a = document.createElement('a');
  a.href = el.originUrl;

  let host = a.hostname;
  console.log("page base url: " + host);
  if (!el.url.includes(host)) {
    console.log("request para url externa detectado! url alvo: " + el.url);
    browser.notifications
      .create("external-url", {
        type: "basic",
        title: "requisicao para URL externa encontrada!",
        message: el.url
      });
  } else {
    console.log("request interno para url " + el.url);
  }
}

browser.webRequest.onBeforeRequest.addListener(
  capture,
  {"urls": ["*://*/*.js"]});

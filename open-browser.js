/*
  Required external-browser gate for social-media in-app browsers.
  The ordering page stays blocked until the user attempts to open the page
  in a regular browser, because embedded browsers may not provide location
  reliably. Normal browsers are not affected.
*/
(function () {
  const ua = navigator.userAgent || "";
  const isInAppBrowser = /FB_IAB|FBAN|FBAV|Instagram|InstagramApp|Messenger|\bimo\b|; wv\)|\bWebView\b/i.test(ua);

  if (!isInAppBrowser) return;

  function getCurrentUrl() {
    return window.location.href;
  }

  function openExternalBrowser() {
    const url = getCurrentUrl();
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      try {
        const parsed = new URL(url);
        const fallback = encodeURIComponent(url);
        const intentUrl = `intent://${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}` +
          `#Intent;scheme=${parsed.protocol.replace(":", "")};package=com.android.chrome;` +
          `S.browser_fallback_url=${fallback};end`;
        window.location.href = intentUrl;
        return;
      } catch (error) {
        window.location.href = url;
        return;
      }
    }

    if (isIOS) {
      window.open(url, "_blank", "noopener");
      return;
    }

    window.open(url, "_blank", "noopener");
  }

  function createGate() {
    document.documentElement.classList.add("external-browser-required");

    const gate = document.createElement("div");
    gate.className = "external-browser-gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-label", "Open website in browser");
    gate.innerHTML = `
      <div class="external-browser-gate__backdrop"></div>
      <section class="external-browser-gate__card">
        <div class="external-browser-gate__icon" aria-hidden="true">🌐</div>
        <h2>Open in your browser</h2>
        <p>To place an order and share your location correctly, please open this website in your phone browser.</p>
        <button type="button" class="external-browser-gate__button">Open Browser</button>
      </section>
    `;

    gate.querySelector(".external-browser-gate__button").addEventListener("click", openExternalBrowser);
    document.body.appendChild(gate);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createGate, { once: true });
  } else {
    createGate();
  }
})();

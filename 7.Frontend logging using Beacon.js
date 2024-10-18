let logs = [];

async function logEvent(ev, force = false) {
  logs.push(ev);

  if (logs.length >= 5 || force) {
    payload = [...logs];
    logs = [];
    // fetch("http://localhost:5000/logging", {
    //   method: "POST",
    //   keepalive: true, // Even after the user closes the window, the connection will remain active.
    // but in http/2 http/3 will consider the request as malformed if it contains any connection specific headers.
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    navigator.sendBeacon("http://localhost:5000/logging", blob);
  }
}
window.addEventListener("click", (e) => {
  const { x, y } = e;
  logEvent({
    type: "INFO",
    value: `User clicked ${x} and ${y} coordinates `,
  });
});
window.addEventListener("unload", (e) => {
  logEvent(
    {
      type: "INFO",
      value: `User closed the window`,
    },
    true
  );
});

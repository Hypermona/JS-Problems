function logEvent() {
  navigator.sendBeacon(
    "http://localhost:5000/logging",
    new Blob([JSON.stringify([])], { type: "application/json" })
  );
}

function polling(api, interval) {
  api();
  setTimeout(() => {
    polling(api, interval);
  }, interval);
}

polling(logEvent, 5000);

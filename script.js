document.addEventListener("DOMContentLoaded", (event) => {
  function updateTime() {
    const currentTimeUTC = document.querySelector(
      '[data-testid="currentTimeUTC"]'
    );
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4];
  }
  updateTime();
  setInterval(updateTime, 1000);

  function updateDay() {
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    currentDay.textContent = days[now.getUTCDay()];
  }
  updateDay();
});

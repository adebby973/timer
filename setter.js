document.addEventListener("DOMContentLoaded", () => {
  const hoursInput = document.getElementById("hour");
  const minutesInput = document.getElementById("minute");
  const secondsInput = document.getElementById("second");
  const startBtn = document.getElementById("startbtn");
  const resetBtn = document.getElementById("resetbtn");
  const alarm = document.getElementById("alarmsound");

  let countdown = null;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateInputs(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursInput.value = pad(h);
    minutesInput.value = pad(m);
    secondsInput.value = pad(s);
  }

  function startTimer(hours, minutes, seconds) {
    clearInterval(countdown);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    updateInputs(totalSeconds);

    countdown = setInterval(() => {
      totalSeconds--;
      updateInputs(totalSeconds);

      if (totalSeconds <= 0) {
        clearInterval(countdown);

        // 🔔 Play sound immediately
        alarm.currentTime = 0;
        // restart from beginning
        alarm.loop = true;
        alarm.play();

        // alert("⏰ TIME UP!");
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(countdown);

    alarm.pause();
    alarm.currentTime = 0;
    alarm.loop = false;
    
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
  }

  startBtn.addEventListener("click", () => {
    const h = parseInt(hoursInput.value, 10) || 0;
    const m = parseInt(minutesInput.value, 10) || 0;
    const s = parseInt(secondsInput.value, 10) || 0;
    startTimer(h, m, s);
  });

  resetBtn.addEventListener("click", resetTimer);
});

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let second = String(now.getSeconds()).padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");

  document.getElementById("hour").value = hours;
  document.getElementById("minute").value = minutes;
  document.getElementById("second").value = second;
  document.getElementById("ampm").innerHTML = ampm;
}

setInterval(updateClock, 1000);
updateClock();

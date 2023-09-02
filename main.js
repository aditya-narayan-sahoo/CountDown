const endDate = "2 October 2023 00:00:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); //Days
  inputs[1].value = Math.floor(diff / 3600) % 24; //Hours
  inputs[2].value = Math.floor(diff / 60) % 60; //Minutes
  inputs[3].value = Math.floor(diff) % 60; //Seconds
};
clock();
setInterval(() => {
  clock();
}, 1000);

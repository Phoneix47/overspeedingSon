const speed = document.querySelector('#speed');
const long = document.querySelector('#longitude');
const lat = document.querySelector('#latitude');
const time = document.querySelector('#timestamp');
console.log(speed);

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  long.textContent = data.coords.longitude;
  lat.textContent = data.coords.latitude;
  time.textContent = data.timestamp;
});

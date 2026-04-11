function displayTime (){
let losAngelesTimeElement = document.querySelector("#los-angeles");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
let losAngelesDateElement = document.querySelector("#la-date");
losAngelesDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");

let durbanTimeElement = document.querySelector("#durban");
durbanTimeElement.innerHTML = moment()
  .tz("Africa/Johannesburg")
  .format("hh:mm:ss [<small>]A[</small>]");
let durbanDateElement = document.querySelector("#dbn-date");
durbanDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
}

let cityInterval = null;

function updateTime(event) {
    let cityTimeZone = event.target.value;
clearInterval(cityInterval);

function showCityTime(){
    if (!cityTimeZone) return;

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
   <div>
    <div class="cityTime">
    <div class="city"><h2>${cityName}</h2></div>
 <div class="time">${cityTime.format("hh:mm:ss")}<small>AM</small></div>   
</div>
<div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
</div>
</div>`;
}

showCityTime();
cityInterval = setInterval(showCityTime, 1000);
}

let cityNameElement = document.querySelector("#city");
cityNameElement.addEventListener("change", updateTime)


displayTime();
setInterval(displayTime, 1000);

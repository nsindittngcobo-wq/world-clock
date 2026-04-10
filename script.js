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
displayTime();
setInterval(displayTime, 1000);
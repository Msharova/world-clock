function handleCityChange(event) {
    if (event.target.value) {
        let cityTimezone = moment().tz(event.target.value).format("dddd, MMMM D, YYYY H:m A");
        alert(`It is ${cityTimezone} in ${event.target.value}`);
    }
}

let parisSelect = document.querySelector("#dropdown-cities");
parisSelect.addEventListener("change", handleCityChange);


function cityUpdate () {
let m = moment().format("MMMM Do YYYY");

let cityDateBrno = document.querySelector("#brno .city-date");
let cityTimeBrno = document.querySelector("#brno .city-current-time");
cityDateBrno.innerHTML = m;
cityTimeBrno.innerHTML = moment().tz("Europe/Prague").format("h:mm:ss a");

let cityDateSeattle = document.querySelector("#seattle .city-date");
let cityTimeSeattle = document.querySelector("#seattle .city-current-time");
cityDateSeattle.innerHTML = m;
cityTimeSeattle.innerHTML = moment().tz("America/Vancouver").format("h:mm:ss a");

let cityDateRaleigh = document.querySelector("#raleigh .city-date");
let cityTimeRaleigh = document.querySelector("#raleigh .city-current-time");
cityDateRaleigh.innerHTML = m;
cityTimeRaleigh.innerHTML = moment().tz("America/New_York").format("h:mm:ss a");

let cityDateMoscow = document.querySelector("#moscow .city-date");
let cityTimeMoscow = document.querySelector("#moscow .city-current-time");
cityDateMoscow.innerHTML = m;
cityTimeMoscow.innerHTML = moment().tz("Europe/Moscow").format("h:mm:ss a");
}

setInterval(cityUpdate, 1000);

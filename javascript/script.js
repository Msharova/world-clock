function handleCityChange(event) {
    let cityValue = event.target.value;
    let citiesElement = document.querySelector("#listed-cities");
    let cityName = cityValue.replace("_", " ").split("/")[1];
    let cityDate;
    let cityTime; 
    let mainTemplate = `
        <div id="brno">
            <div>
                <h2 class="city">Brno</h2>
                <p class="city-date">Loading</p>
            </div>
            <p class="city-current-time">Loading</p>
        </div>
        <div id="seattle">
            <div>
                <h2 class="city">Seattle</h2>
                <p class="city-date">Loading</p>
            </div>
            <p class="city-current-time">Loading</p>
        </div>
        <div id="raleigh">
            <div>
                <h2 class="city">Raleigh</h2>
                <p class="city-date">Loading</p>
            </div>
            <p class="city-current-time">Loading</p>
        </div>
        <div id="moscow">
            <div>
                <h2 class="city">Moscow</h2>
                <p class="city-date">Loading</p>
            </div>
            <p class="city-current-time">Loading</p>
        </div>
        `;
    switch (cityValue) {
        case "your-location":
            let cityTimeZone = moment.tz.guess();
            cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
            cityTime = moment().tz(cityTimeZone).format("h:mm:ss a");
            cityTimeZone = cityTimeZone.replace("_", " ").split("/")[1];
            citiesElement.innerHTML = `
                <div id="selected-city">
                    <div>
                        <h2 class="city">${cityTimeZone}</h2>
                        <p class="city-date">${cityDate}</p>
                    </div>
                    <p class="city-current-time">${cityTime}</p>
                </div>
                ${mainTemplate}`;
            break;        
        case "":
            citiesElement = document.querySelector("#listed-cities");
            citiesElement.innerHTML = mainTemplate;
            break;
        default:
            cityDate = moment().tz(cityValue).format("MMMM Do, YYYY");
            cityTime = moment().tz(cityValue).format("h:mm:ss a");
            citiesElement.innerHTML = `
            <div id="selected-city">
                <div>
                    <h2 class="city">${cityName}</h2>
                    <p class="city-date">${cityDate}</p>
                </div>
                <p class="city-current-time">${cityTime}</p>
            </div>
            ${mainTemplate}`;
            break;
    }
}
function cityUpdate () {
    let dropdownSelect = document.querySelector("#dropdown-cities");
    dropdownSelect.addEventListener("change", handleCityChange);

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

function handleCityChange(event) {
    let cityValue = event.target.value;
    let citiesElement = document.querySelector("#listed-cities");
    let cityName = cityValue.replace("_", " ").split("/")[1];
    let cityDate;
    let cityTime; 
    let mainTemplate = `
        <div id="prague">
            <div>
                <h2 class="city">Prague</h2>
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
        <div id="washington">
            <div>
                <h2 class="city">Washington</h2>
                <p class="city-date">Loading</p>
            </div>
            <p class="city-current-time">Loading</p>
        </div>
        <div id="london">
            <div>
                <h2 class="city">London</h2>
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

    let cityDatePrague = document.querySelector("#prague .city-date");
    let cityTimePrague = document.querySelector("#prague .city-current-time");
    cityDatePrague.innerHTML = m;
    cityTimePrague.innerHTML = moment().tz("Europe/Prague").format("h:mm:ss a");

    let cityDateSeattle = document.querySelector("#seattle .city-date");
    let cityTimeSeattle = document.querySelector("#seattle .city-current-time");
    cityDateSeattle.innerHTML = m;
    cityTimeSeattle.innerHTML = moment().tz("America/Vancouver").format("h:mm:ss a");

    let cityDateWashington = document.querySelector("#washington .city-date");
    let cityTimeWashington = document.querySelector("#washington .city-current-time");
    cityDateWashington.innerHTML = m;
    cityTimeWashington.innerHTML = moment().tz("America/New_York").format("h:mm:ss a");

    let cityDateLondon = document.querySelector("#london .city-date");
    let cityTimeLondon = document.querySelector("#london .city-current-time");
    cityDateLondon.innerHTML = m;
    cityTimeLondon.innerHTML = moment().tz("Europe/London").format("h:mm:ss a");
}

setInterval(cityUpdate, 1000);

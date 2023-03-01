function handleCityCHange(event) {
            if (event.target.value) {
                let cityTimezone = moment().tz(event.target.value).format("dddd, MMMM D, YYYY H:m A");
                alert(`It is ${cityTimezone} in ${event.target.value}`);
            }
        }

let parisSelect = document.querySelector("#countries");
parisSelect.addEventListener("change", handleCityCHange);
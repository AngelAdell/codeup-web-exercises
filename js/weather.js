const apiKey = "b06e2b56487d8b6b56828ca9b30fa8aa";
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYW5nZWx0YWxrcyIsImEiOiJjbHBsZ2llOGswM3ZuMmtwMXByZnVkdTc4In0.fQAKMzuLalygqP7v1u9ilA";
let map;
let marker;

document.addEventListener('DOMContentLoaded', function () {
    console.log("map is running");


    // Fetch weather for the user's location
    getUserLocationAndFetchWeather();

    // Fetch weather when submitted
    document.getElementById("search-form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const cityName = document.getElementById("city-input").value;
        clearWeatherData(); // Clear previous data
        fetchAndDisplayWeather(cityName);
    });

    function initMap(coordinates) {
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: coordinates,
            zoom: 10,
        });

        map.addControl(new mapboxgl.NavigationControl());

        map.on('style.load', function () {
            map.on('click', async function (e) {
                e.preventDefault();

                // Clear previous data
                clearWeatherData();

                let lngLat = e.lngLat;

                // Reverse geocode to get the city name
                reverseGeocode(lngLat)

                })
            });
    }

    document.addEventListener('DOMContentLoaded', function () {

        // Fetch weather for the user's location
        getUserLocationAndFetchWeather();
    });
    {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const userLocation = [longitude, latitude];
                    initMap(userLocation); // Initialize map with user's location
                },
                (error) => {
                    console.error("Error getting user's location:", error);
                    // Handle the error, e.g., show a default location
                    initMap([0, 0]);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    function reverseGeocode(coordinates) {
        const reverseGeocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

        fetch(reverseGeocodingApiUrl)
            .then(handleResponse)
            .then((data) => {
                const cityName = data.features[0].text;
                clearWeatherData(); // Clear previous data
                fetchAndDisplayWeather(cityName);
                // After reverse geocoding, fetch and display weather data
                fetchAndDisplayWeather(cityName);

                // Customize the marker
                marker = new mapboxgl.Marker({
                    draggable: true,
                    color: '#ff0000',
                    scale: 0.75,
                    rotation: 45,
                    anchor: 'bottom',
                })
                    .setLngLat(coordinates)
                    .addTo(map);

                marker.on('dragend', function () {
                    const newCoordinates = marker.getLngLat();
                    reverseGeocode(newCoordinates);
                });
                console.log("coordinates");

                map.flyTo({
                    center: coordinates,
                    zoom: 10, // Adjust the zoom level as needed
                });
            })
            .catch(handleError);
    }

    function getUserLocationAndFetchWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const reverseGeocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

                    fetch(reverseGeocodingApiUrl)
                        .then(handleResponse)
                        .then((data) => {
                            const cityName = data.features[0].text;
                            fetchAndDisplayWeather(cityName);
                        })
                        .catch(handleError);
                },
                (error) => {
                    console.error("Error getting user's location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }

        // Add an event listener to the form for manual searches
        document.getElementById("search-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting in the traditional way

            const cityName = document.getElementById("city-input").value;
            fetchAndDisplayWeather(cityName);
        });
    }


    function updateWeatherData(data) {
        const { main, wind, name } = data;
        const currentTemperature = main.temp;
        const currentWindSpeed = wind.speed;
        const currentHumidity = main.humidity;

        const today = new Date();
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formattedToday = today.toLocaleDateString(undefined, options);

        document.getElementById("current-search-term").textContent = `${name} (${formattedToday})`;
        document.getElementById("current-temp").textContent = `${currentTemperature}°F`;
        document.getElementById("current-wind").textContent = `${currentWindSpeed} m/s`;
        document.getElementById("current-humidity").textContent = `${currentHumidity}%`;
    }

    function fetchAndDisplayWeather(cityName) {
        const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

        fetch(geocodingApiUrl)
            .then(handleResponse)
            .then((data) => {
                const coordinates = data.features[0].geometry.coordinates;
                const lat = coordinates[1];
                const lon = coordinates[0];

                const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
                const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

                // Use Promise.all to fetch both current weather and forecast data
                return Promise.all([
                    fetch(currentWeatherApiUrl).then(handleResponse),
                    fetch(forecastApiUrl).then(handleResponse)
                ]);
            })
            .then(([currentWeatherData, forecastData]) => {
                // Update the current weather data in the DOM
                updateWeatherData(currentWeatherData);

                const forecastDataList = [];

                for (let i = 2; i <= forecastData.list.length; i += 8) {
                    const forecastDay = forecastData.list[i];
                    forecastDataList.push(forecastDay);
                }

                // Call the separate function to update the DOM with forecast data
                updateForecastDOM(forecastDataList);
            })
            .catch(handleError);
    }

// Function to update the DOM with forecast data
    function updateForecastDOM(forecastData) {
        const forecastContainer = document.getElementById("forecast-container");
        forecastContainer.innerHTML = "";

        forecastData.forEach((forecastDay) => {
            const { dt_txt, main, wind, weather } = forecastDay;

            const box = document.createElement("div");
            box.classList.add("box");
            const content = document.createElement("div");
            content.classList.add("content");
            const dateElement = document.createElement("h4");
            const iconElement = document.createElement("img");
            const ulElement = document.createElement("ul");

            const dateArray = dt_txt.split(" ");
            const forecastDate = dateArray[0];
            const forecastTemperature = main.temp;
            const forecastWindSpeed = wind.speed;
            const forecastHumidity = main.humidity;

            dateElement.textContent = forecastDate;
            const forecastIconCode = weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${forecastIconCode}.png`;

            iconElement.src = iconUrl;
            ulElement.innerHTML = `
            <li>Temp: <span>${forecastTemperature}°F</span></li>
            <li>Wind: <span>${forecastWindSpeed} m/s</span></li>
            <li>Humidity: <span>${forecastHumidity}%</span></li>
        `;

            content.appendChild(dateElement);
            content.appendChild(iconElement);
            content.appendChild(ulElement);
            box.appendChild(content);
            forecastContainer.appendChild(box);
        });
    }


        function clearWeatherData() {
        // Clear previous weather data from the DOM
        document.getElementById("current-search-term").textContent = "";
        document.getElementById("current-temp").textContent = "";
        document.getElementById("current-wind").textContent = "";
        document.getElementById("current-humidity").textContent = "";
        document.getElementById("forecast-container").innerHTML = "";

        // Remove the marker from the map
        if (marker) {
            marker.remove();
        }
    }

    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Network response was not ok - ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    function handleError(error) {
        console.error("Error:", error);
        // You can add user-friendly error handling here
    }


});


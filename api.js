const formItem = document.querySelector(".js-form");
const list = document.querySelector(".js-list");

formItem.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;

  generateWearter(query.value, days.value)
    .then((data) => (list.innerHTML = createMarcup(data.forecast.forecastday)))
    .catch((err) => console.log(err));
}

function generateWearter(city, days) {
  // http://api.weatherapi.com/v1/forecast.json?key=c4f148c9797645d389582445242402&q=Paris&days=5&lang=uk
  const BASE_URL = "http://api.weatherapi.com/v1/";
  const API_KEY = "c4f148c9797645d389582445242402";

  return fetch(
    `${BASE_URL}forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarcup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) =>
        ` <li>
  <img src="${icon}" alt="${text}">
  <p>${text}</p>
  <h2>${date}</h2>
  <h3>${avgtemp_c}</h3>
</li>
        `
    )
    .join("");
}

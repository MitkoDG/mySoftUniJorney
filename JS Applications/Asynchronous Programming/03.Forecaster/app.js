const baseUrl = `http://localhost:3030/jsonstore/forecaster`;
let forecastDiv = document.querySelector('#forecast');
let locationField = document.querySelector('#location');
let currentDiv;
let upcomingDiv;
let code = '';

function attachEvents() {
    let weatherBtn = document.querySelector('#submit');
    weatherBtn.addEventListener('click', getForecast);
};

async function getForecast() {
    
    if (locationField.value) {
        const specialSymbols = {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614;',
            'Degrees': '&#176;'
        };
       
        try {
            code = await getCode();
            locationField.value = '';

        } catch (error) {
            return clearPanels();
        }

        try {
            let currentForecast = await getTodaysForecast();  // Data
            currentDiv = document.querySelector('#current');
            currentDiv.replaceChildren();  // Remove all info

            let [condition, high, low] = Object.values(currentForecast.forecast);
            forecastDiv.style.display = 'block';

            let headDiv = createElement('div', 'label', "Current conditions", currentDiv);
            let forecastsDiv = createElement('div', 'forecasts', null, currentDiv);

            let symbolSpan = createElement('span', 'condition symbol', null, forecastsDiv);
            symbolSpan.innerHTML = specialSymbols[condition];  // No choise but to use innerHTML

            let conditionSpan = createElement('span', 'condition', null, forecastsDiv);
            let locationSpan = createElement('span', 'forecast-data', currentForecast.name, conditionSpan);
            let temperatureSpan = createElement('span', 'forecast-data', `${low}°/${high}°`, conditionSpan);
            let forecastSpan = createElement('span', 'forecast-data', condition, conditionSpan);

        } catch (error) {
            return clearPanels();
        }

        try {
            let futureForecast = await getUpcomingForecast();  // Data
            upcomingDiv = document.querySelector('#upcoming');
            upcomingDiv.replaceChildren();  // Remove all info

            let headDiv = createElement('div', 'label', "Three-day forecast", upcomingDiv);
            forecastsDiv = createElement('div', 'forecast-info', null, upcomingDiv);

            for (let info of Object.values(futureForecast.forecast)) {
                let upcomingSpan = createElement('span', 'upcoming', null, forecastsDiv);

                let symbolSpan = createElement('span', 'symbol', null, upcomingSpan);
                symbolSpan.innerHTML = specialSymbols[info.condition];

                let temperatureSpan = createElement('span', 'forecast-data', `${info.low}°/${info.high}°`, upcomingSpan);
                let forecastSpan = createElement('span', 'forecast-data', info.condition, upcomingSpan);
            }

        } catch (error) {
            return clearPanels();
        }
    }
}

async function getCode() {
    const response = await fetch(`${baseUrl}/locations`);
    let data = await response.json();
    code = '';

    Object.values(data).forEach(el => {
        if (locationField.value == el.name) {
            code = el.code;
        }
    })
    return code;
}

async function getTodaysForecast() {
    const response = await fetch(`${baseUrl}/today/${code}`);

    return await response.json();
}

async function getUpcomingForecast() {
    const response = await fetch(`${baseUrl}/upcoming/${code}`);

    return await response.json();
}

function clearPanels() {
    forecastDiv.style.display = 'block';
    forecastDiv.replaceChildren();
    let div1 = createElement('div', undefined, undefined, forecastDiv);
    div1.id = 'current';
    let div2 = createElement('div', undefined, undefined, forecastDiv);
    div2.id = 'upcoming';

    let attachError = createElement('div', 'label', "Error", div1);
}

function createElement(type, className, textCon, parent) {
    const element = document.createElement(type);

    if (textCon) {
        element.textContent = textCon;
    }
    if (className) {
        element.className = className;
    }
    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

attachEvents();



//alternative Desi
function attachEvents() {
    let input = document.getElementById('location');
    let button = document.getElementById('submit');
 
    let forecast = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
 
    let emojies = {
       'Sunny': `\u2600`, // ☀
       'Partly sunny': `\u26C5`, //⛅
       'Overcast': `\u2601`, // ☁
       'Rain': `\u2614`, // ☂
       'Degrees': `\u00B0`  // °
    }
 
    button.addEventListener('click', async () => {
 
       try {
          let url = `http://localhost:3030/jsonstore/forecaster/locations`;
          let response = await fetch(url);
          if (response.status != 200) {
             throw new Error(`${response.status}`);
          }
          let data = await response.json();
          let element = data.find(e => e.name === input.value);
 
          if (element) {
             try {
                let url2 = `http://localhost:3030/jsonstore/forecaster/today/${element.code}`;
                let response2 = await fetch(url2);
                let data2 = await response2.json();
 
                if (response2.status != 200) {
                   throw new Error('the server doesn\'t respond or the location name cannot be found')
                }
                current.innerHTML = '<div class="label">Current conditions</div>';
 
                forecast.style.display = 'block';
 
                let div = createElement('div', '', ['class', 'forecasts'], current);
                let currEmoji = `${emojies[data2.forecast.condition]}`;
 
                createElement('span', `${currEmoji}`, ['class', 'condition symbol'], div);
 
                let spanCondition = createElement('span', '', ['class', 'condition'], current);
                createElement('span', data2.name, ['class', 'forecast-data'], spanCondition);
                createElement('span', `${data2.forecast.low}${emojies.Degrees}/${data2.forecast.high}${emojies.Degrees}`, ['class', 'forecast-data'], spanCondition);
                createElement('span', data2.forecast.condition, ['class', 'forecast-data'], spanCondition);
 
                try {
                   let url3 = `http://localhost:3030/jsonstore/forecaster/upcoming/${element.code}`;
                   let response3 = await fetch(url3);
                   let data3 = await response3.json();
                   
                   if (response3.status != 200) {
                      throw new Error('the server doesn\'t respond or the location name cannot be found')
                   }
 
                   upcoming.innerHTML = '<div class="label">Three-day forecast</div>';
 
                   let div = createElement('div', '', ['class', 'forecasts-info'], upcoming);
                   let span1 = createSpan(data3.forecast[0])
                   let span2 = createSpan(data3.forecast[1])
                   let span3 = createSpan(data3.forecast[2])
 
 
                   [span1, span2, span3].foreach(x=> div.appendChild(x));
 
                } catch (error) {
                   console.log(error);
                }
             } catch (error) {
                console.log(error);
             }
          }
       } catch (error) {
          console.log(error);
       }
    });
 
    function createSpan(data) {
 
       let currEmoji = `${emojies[data.condition]}`;
       let spanCondition = createElement('span', '', ['class', 'upcoming'], upcoming);
       createElement('span', currEmoji, ['class', 'symbol'], spanCondition);
       createElement('span', `${data.low}${emojies.Degrees}/${data.high}${emojies.Degrees}`, ['class', 'forecast-data'], spanCondition);
       createElement('span', data.condition, ['class', 'forecast-data'], spanCondition);
 
       return spanCondition;
    }
 
    function createElement(type, content, attributes = [], appender) {
       const element = document.createElement(type);
 
       if (content) {
          element.textContent = content;
       }
 
       if (attributes.length > 0) {
          element.setAttribute(attributes[0], attributes[1]);
       }
 
       if (appender) {
          appender.appendChild(element);
       }
 
       return element;
    }
 }
 
 attachEvents();

// alternative Victor not finished
// function attachEvents() {
//     console.log("TODO...");
//     // add eventListener to the btn
// }

// attachEvents();


// async function getForecast(name) {
//     const code = await getLocationCode(name);

//     const [current, upcoming] = await Promise.all([
//         getCurrent(code),
//         getUpcoming(code)
//     ])

//     return { current, upcoming }
// }
// async function getLocationCode(name) {
//     const url = 'http://localhost:3030/jsonstore/forecaster/locations';
//     const res = await fetch(url);
//     const data = await res.json();

//     const location = data.find(l => l.name == name);

//     return location.code;

// }

// async function getCurrent(code) {
//     const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;

//     const res = await fetch(url);
//     const data = await res.json()

//     return data;
// }

// async function getUpcoming(code) {
//     const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;

//     const res = await fetch(url);
//     const data = await res.json()

//     return data;
// }
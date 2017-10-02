
let city = document.createElement('input'); // here you should enter your city
document.body.appendChild(city);
city.setAttribute('placeholder', 'Enter your city like: Amsterdam.NL'); //example in input box

let button = document.createElement ('button'); //Seartch button
document.body.appendChild(button);
let seartch = document.createTextNode ('Search'); 
button.appendChild(seartch);


let div = document.createElement('div'); // this div can control all the information those are element p 
document.body.appendChild(div);

let name = document.createElement('p');
div.appendChild(name);
name.setAttribute ('id', "invariable");
name.innerHTML = "City Name";
let nameValue = document.createElement('p');
nameValue.setAttribute ('id', "variable");
name.appendChild(nameValue);


let temperature = document.createElement('p');
div.appendChild(temperature);
temperature.setAttribute('id', "invariable");
temperature.innerHTML = "Temperature";
let temperatureValue = document.createElement('p');
temperatureValue.setAttribute ('id', "variable");
temperature.appendChild(temperatureValue);



let description = document.createElement('p');
div.appendChild(description);
description.setAttribute('id', "invariable");
description.innerHTML = "Description";
let descriptionValue = document.createElement('p');
descriptionValue.setAttribute ('id', "variable");
description.appendChild(descriptionValue);


let humidity = document.createElement('p');
div.appendChild(humidity);
humidity.setAttribute('id', 'invariable');
humidity.innerHTML = "Humidity";
let humidityValue = document.createElement('p');
humidityValue.setAttribute ('id', "variable");
humidity.appendChild(humidityValue);

let windSpeed = document.createElement('p');
div.appendChild(windSpeed);
windSpeed.setAttribute('id', "invariable");
windSpeed.innerHTML = "Wind Speed";
let windSpeedValue = document.createElement('p');
windSpeedValue.setAttribute ('id', "variable");
windSpeed.appendChild(windSpeedValue);

button.onclick = function(){
    
let nameCity = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=6d8108cde3bc437877134c8a14c900ad&units=metric'; // here get the city name and make from API a link to can get all the information weather for the city in the input box
    nameValue.innerHTML = city.value; // name of the city
    
let xReq = new XMLHttpRequest();
xReq.open('GET',nameCity);
  xReq.onload =function result(){
    let xData = JSON.parse(xReq.responseText);
    descriptionValue.innerHTML = xData.weather[0].main; 
    temperatureValue.innerHTML = xData.main.temp;  
    humidityValue.innerHTML = xData.main.humidity;  
    windSpeedValue.innerHTML = xData.wind.speed;
};
 xReq.send();
}
 
 

var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

var weatherTime = {
"apikey":"d31115b3271c8a36e1e9b1181053867c",
fetchweatherTime: function(city){
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + this.apikey + "&units=metric")
.then(Response => Response.json())
.then(data => this.displaycityname(data));

},
displaycityname: function(data){
    var {name} = data.city;
    var {coord} = data.city;
    var {temp} = data.list[0].main;
    var {speed} = data.list[0].wind;
    var {humidity} = data.list[0].main;
    var {icon} = data.list[0].weather[0];

   console.log(name, temp, coord, speed, humidity, icon)
   document.querySelector("#Name-city").innerHTML = name + " (" + todayDate + ")"; 
   document.querySelector("#daytemp").innerHTML ="Temp: " +  temp +"°" ; 
   document.querySelector("#daywind").innerHTML = "Wind: " +speed  ; 
   document.querySelector("#dayhumidity").innerHTML ="Humidity: " + humidity; 
   document.querySelector("#UVindex").innerHTML ="UVindex: " ; 
   document.querySelector("#imageicon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

   var {name} = data.city;
   var {coord} = data.city;
   var {temp} = data.list[1].main;
   var {speed} = data.list[1].wind;
   var {humidity} = data.list[1].main;
   var {icon} = data.list[1].weather[0];

  console.log(name, temp, coord, speed, humidity, icon)
  document.querySelector("#day1temp").innerHTML ="Temp: " +  temp +"°" ; 
  document.querySelector("#day1wind").innerHTML = "Wind: " +speed  ; 
  document.querySelector("#day1humidity").innerHTML ="Humidity: " + humidity; 
  document.querySelector("#imageicon1").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

  var {name} = data.city;
  var {coord} = data.city;
  var {temp} = data.list[2].main;
  var {speed} = data.list[2].wind;
  var {humidity} = data.list[2].main;
  var {icon} = data.list[2].weather[0];

 console.log(name, temp, coord, speed, humidity, icon)
 document.querySelector("#day2temp").innerHTML ="Temp: " +  temp +"°" ; 
 document.querySelector("#day2wind").innerHTML = "Wind: " +speed  ; 
 document.querySelector("#day2humidity").innerHTML ="Humidity: " + humidity; 
 document.querySelector("#imageicon2").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

 var {name} = data.city;
 var {coord} = data.city;
 var {temp} = data.list[3].main;
 var {speed} = data.list[3].wind;
 var {humidity} = data.list[3].main;
 var {icon} = data.list[3].weather[0];

console.log(name, temp, coord, speed, humidity, icon)
document.querySelector("#day3temp").innerHTML ="Temp: " +  temp +"°" ; 
document.querySelector("#day3wind").innerHTML = "Wind: " +speed  ; 
document.querySelector("#day3humidity").innerHTML ="Humidity: " + humidity; 
document.querySelector("#imageicon3").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

var {name} = data.city;
var {coord} = data.city;
var {temp} = data.list[4].main;
var {speed} = data.list[4].wind;
var {humidity} = data.list[4].main;
var {icon} = data.list[4].weather[0];

console.log(name, temp, coord, speed, humidity, icon)
document.querySelector("#day4temp").innerHTML ="Temp: " +  temp +"°" ; 
document.querySelector("#day4wind").innerHTML = "Wind: " +speed  ; 
document.querySelector("#day4humidity").innerHTML ="Humidity: " + humidity; 
document.querySelector("#imageicon4").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

var {name} = data.city;
var {coord} = data.city;
var {temp} = data.list[5].main;
var {speed} = data.list[5].wind;
var {humidity} = data.list[5].main;
var {icon} = data.list[5].weather[0];

console.log(name, temp, coord, speed, humidity, icon)
document.querySelector("#day5temp").innerHTML ="Temp: " +  temp +"°" ; 
document.querySelector("#day5wind").innerHTML = "Wind: " +speed  ; 
document.querySelector("#day5humidity").innerHTML ="Humidity: " + humidity; 
document.querySelector("#imageicon5").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

},
searchButton: function(){
    this.fetchweatherTime(document.querySelector("#searchCity").value);
},

};

document.querySelector("#search-button").addEventListener("click", function(){
    weatherTime.searchButton()
});
 

function savepage(){
    var savedcity = localStorage.getItem("searchCity")
    if (savedcity){
        document.getElementById("searchCity").value = savedcity
    }
document.getElementById("searchCity").addEventListener("input", afterinput)
    function afterinput(l){
        localStorage.setItem("searchCity",l.tagert.value)

    }
}



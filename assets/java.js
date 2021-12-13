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

}
}
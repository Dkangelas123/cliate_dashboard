var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

function getInfo(){
  
    var newSearch = document.getElementById("searchCity");
    var newCity = document.getElementById("Name-city");
newCity.innerHTML =newSearch.value +" ("+ todayDate+ ")";
console.log(newCity);
}



fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newSearch.value+'&appid=d31115b3271c8a36e1e9b1181053867c')
.then(Response => Response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1) + "daytemp").innerHTML = "temp:" + Number(data.list[i].main.temp - 284.23).toFixed(1)+"°";
    }
})
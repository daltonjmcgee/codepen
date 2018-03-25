$(function(){
  getGeoData();
  select();
})

function getGeoData(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
      getWeather(position.coords.latitude,position.coords.longitude);
    });
  } else {

  }
}

function getWeather(latitude,longitude){
  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=49fa4d1476bb1690d0c95d785a336e03`,function(val){
    var icon;
    var location = val.name;
    var desc = val.weather[0].main;
    var tempK = val.main.temp;
    var tempC = Math.round(tempK - 273.5);
    var tempF = Math.round(9/5*tempC+32.5);
    if (desc.toLowerCase().includes("clear")){
      icon = "<i class='far fa-sun'></i>"
    }
    $("#weather-data").html(`${location}<br>Temperature: <span id="fahrenheit" class="temperature">${tempF}°F</span><span id="celsius" class="temperature hidden">${tempC}°C</span><br>${desc}<br>${icon}`);
  });
}



function select(){
  $(".imperial").on("click",function(){
    $(this).addClass("selected");
    $(".metric").removeClass("selected");
    $("#fahrenheit").removeClass("hidden");
    $("#celsius").addClass("hidden");

  })

  $(".metric").on("click",function(){
    $(this).addClass("selected");
    $(".imperial").removeClass("selected");
    $("#fahrenheit").addClass("hidden");
    $("#celsius").removeClass("hidden");
  })
}

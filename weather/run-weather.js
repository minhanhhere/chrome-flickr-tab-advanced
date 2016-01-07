function loadWeatherCurrent() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
}

function loadWeather(location) {
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      var html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
      // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);

      var html2 = weather.city + ', ' + weather.country + ' | ' + weather.currently;
      $("#weather-additional").html(html2);

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
};

setTimeout("loadWeatherCurrent()", 300);
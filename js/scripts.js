var apiKey = '750a5edd0b32b5ffbb55cb40f0578c53';

$(document).ready(function(){
	$('.weather-form').submit(function(){
		event.preventDefault();
		var cityText = $('.city').val();

		var url = 'http://api.openweathermap.org/data/2.5/forecast/city?q=' +cityText+ '&units=imperial&APPID=' + apiKey;
			console.log(url);

	$.getJSON(url,function(weatherData){
		 console.log(weatherData);
		currentTemp = weatherData.list[0].main.temp;
		forecastTemp = weatherData.list[2].main.temp;
		currentPressure = Math.round(weatherData.list[0].main.pressure);
		forecastPressure = Math.round(weatherData.list[2].main.pressure);
		
		var sinusPos = $('#toggle').prop('checked');
		if (sinusPos === true && (forecastPressure < currentPressure)){
			$('.rhino').append('<img src="sad.png">');
		} else if (sinusPos === true && (forecastPressure > currentPressure)){
			$('.rhino').append('<img src="happy.png">');
		} else if (sinusPos === false && (forecastPressure > currentPressure)){
			$('.rhino').append('<img src="sad.png">');
		} else if (sinusPos === false && (forecastPressure < currentPressure)){
			$('.rhino').append('<img src="happy.png">');
		}

		});
	});
});
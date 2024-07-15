const weatherApi = {
    key: "db2ad3d41674214982e17ea943f2d339",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
};

const searchBox = document.getElementById("input-box");

searchBox.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {

        weatherReport(searchBox.value);
    }
});
function weatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(showWeather);
}

function showWeather(weather) {
    console.log(weather);



    let day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    let temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(weather.list[0].main.temp - 273.15)}°C`;

    let temps1 = document.getElementById("temps1");
    temps1.innerHTML = `${Math.round(weather.list[1].main.temp - 273.15)}°C`;
    let temps2 = document.getElementById("temps2");
    temps2.innerHTML = `${Math.round(weather.list[2].main.temp - 273.15)}°C`;
    let temps3 = document.getElementById("temps3");
    temps3.innerHTML = `${Math.round(weather.list[3].main.temp - 273.15)}°C`;
    let temps4 = document.getElementById("temps4");
    temps4.innerHTML = `${Math.round(weather.list[4].main.temp - 273.15)}°C`;
    let temps5 = document.getElementById("temps5");
    temps5.innerHTML = `${Math.round(weather.list[5].main.temp - 273.15)}°C`;


    let mtemp = document.getElementById("mtemp")
    mtemp.innerHTML = `${Math.round(
        weather.list[0].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[0].main.temp_min - 273.15)}°C`


    let temp1 = document.getElementById("temp1");
    temp1.innerHTML = `${Math.round(
        weather.list[1].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[1].main.temp_min - 273.15)}°C`;

    let temp2 = document.getElementById("temp2");
    temp2.innerHTML = `${Math.round(
        weather.list[2].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[2].main.temp_min - 273.15)}°C`;

    let temp3 = document.getElementById("temp3");
    temp3.innerHTML = `${Math.round(
        weather.list[3].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[3].main.temp_min - 273.15)}°C`;

    let temp4 = document.getElementById("temp4");
    temp4.innerHTML = `${Math.round(
        weather.list[4].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[4].main.temp_min - 273.15)}°C`;

    let temp5 = document.getElementById("temp5");
    temp5.innerHTML = `${Math.round(
        weather.list[5].main.temp_max - 273.15
    )}°/ ${Math.round(weather.list[5].main.temp_min - 273.15)}°C`;



    console.log(weather.list[1].dt);
    let unix_date = `${weather.list[1].dt}`
    let date = new Date(unix_date*1000);
    console.log(date)
    let d = date.getDay();
    let mday = document.getElementById('mday')
    mday.innerHTML = day[d++]





    let day1 = document.getElementById("des1");
    day1.innerHTML = day[d++];

    let day2 = document.getElementById("des2");
    day2.innerHTML = day[d++];

    let day3 = document.getElementById("des3");
    day3.innerHTML = day[d++];

    let day4 = document.getElementById("des4");
    day4.innerHTML = day[d++];

    let day5 = document.getElementById("des5");
    day5.innerHTML = day[d++];



    console.log(weather.list[1].weather[0].description);


    let mdes = document.getElementById("mday");
    mdes.innerHTML = `${weather.list[0].weather[0].description}`;



    let des1 = document.getElementById("des1");
    des1.innerHTML = `${weather.list[1].weather[0].description}`;

    let des2 = document.getElementById("day2");
    des2.innerHTML = `${weather.list[2].weather[0].description}`;

    let des3 = document.getElementById("day3");
    des3.innerHTML = `${weather.list[3].weather[0].description}`;

    let des4 = document.getElementById("day4");
    des4.innerHTML = `${weather.list[4].weather[0].description}`;

    let des5 = document.getElementById("day5");
    des5.innerHTML = `${weather.list[5].weather[0].description}`;



    let pressure = document.getElementById("pressure");
    pressure.innerHTML = `${weather.list[0].main.pressure}hpa`;

    let pressure1 = document.getElementById("pressure1");
    pressure1.innerHTML = `${weather.list[1].main.pressure}hpa`;
    let pressure2 = document.getElementById("pressure2");
    pressure2.innerHTML = `${weather.list[2].main.pressure}hpa`;
    let pressure3 = document.getElementById("pressure3");
    pressure3.innerHTML = `${weather.list[3].main.pressure}hpa`;
    let pressure4 = document.getElementById("pressure4");
    pressure4.innerHTML = `${weather.list[4].main.pressure}hpa`;
    let pressure5 = document.getElementById("pressure5");
    pressure5.innerHTML = `${weather.list[5].main.pressure}hpa`;



    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `${weather.list[0].main.humidity}%`;
    let humidity1 = document.getElementById("humidity1");
    humidity1.innerHTML = `${weather.list[1].main.humidity}%`;
    let humidity2 = document.getElementById("humidity2");
    humidity2.innerHTML = `${weather.list[2].main.humidity}%`;
    let humidity3 = document.getElementById("humidity3");
    humidity3.innerHTML = `${weather.list[3].main.humidity}%`;
    let humidity4 = document.getElementById("humidity4");
    humidity4.innerHTML = `${weather.list[4].main.humidity}%`;
    let humidity5 = document.getElementById("humidity5");
    humidity5.innerHTML = `${weather.list[5].main.humidity}%`;


    let micon = `${weather.list[0].weather[0].icon}.png`;
    document.getElementById("micon").src = micon;
    document.getElementById("ico").src = micon;

    let icon1 = `${weather.list[1].weather[0].icon}.png`;
    document.getElementById("icon1").src = icon1;
    document.getElementById("micon1").src = icon1;

    let icon2 = `${weather.list[2].weather[0].icon}.png`;
    document.getElementById("icon2").src = icon2;
    document.getElementById("micon2").src = icon2;

    let icon3 = `${weather.list[3].weather[0].icon}.png`;
    document.getElementById("icon3").src = icon3;
    document.getElementById("micon3").src = icon3;

    let icon4 = `${weather.list[4].weather[0].icon}.png`;
    document.getElementById("icon4").src = icon4;
    document.getElementById("micon4").src = icon4;

    let icon5 = `${weather.list[5].weather[0].icon}.png`;
    document.getElementById("icon5").src = icon5;
    document.getElementById("micon5").src = icon5;




    let unix_time1 = `${weather.city.sunrise}`;
    let date1 = new Date(unix_time1 * 1000);
    let hours1 = date1.getHours();
    let minutes1 = "0" + date1.getMinutes();
    let formattedTime = hours1 + ":" + minutes1.substr(-2);
    let sr = document.getElementById("sr");
    sr.innerHTML = formattedTime;

    let sr1 = document.getElementById("sr1");
    sr1.innerHTML = formattedTime;

    let sr2 = document.getElementById("sr2");
    sr2.innerHTML = formattedTime;

    let sr3 = document.getElementById("sr3");
    sr3.innerHTML = formattedTime;

    let sr4 = document.getElementById("sr4");
    sr4.innerHTML = formattedTime;

    let sr5 = document.getElementById("sr5");
    sr5.innerHTML = formattedTime;

    let sr6 = document.getElementById("sr6");
    sr6.innerHTML = formattedTime;



    let unix_time2 = `${weather.city.sunset}`;
    let date2 = new Date(unix_time2 * 1000);
    let hours2 = date2.getHours();
    let minutes2 = "0" + date2.getMinutes();
    let formattedTime2 = hours2 + ":" + minutes2.substr(-2);

    let ss = document.getElementById("ss");
    ss.innerHTML = formattedTime2;
    let ss1 = document.getElementById("ss1");
    ss1.innerHTML = formattedTime2;

    let ss2 = document.getElementById("ss2");
    ss2.innerHTML = formattedTime2;

    let ss3 = document.getElementById("ss3");
    ss3.innerHTML = formattedTime2;

    let ss4 = document.getElementById("ss4");
    ss4.innerHTML = formattedTime2;

    let ss5 = document.getElementById("ss5");
    ss5.innerHTML = formattedTime2;

    let ss6 = document.getElementById("ss6");
    ss6.innerHTML = formattedTime2;
}


$('#b1').on('click',function(){
    $('#section-1').show()
    $('#section').hide();
    $('#section-2').hide()
    $('#section-3').hide()
    $('#section-4').hide()
    $('#section-5').hide()
    $('#section-6').hide()

});

$('#b2').on('click',function(){
    $('#section-2').show()
    $('#section').hide();
    $('#section-1').hide()
    $('#section-3').hide()
    $('#section-4').hide()
    $('#section-5').hide()
    $('#section-6').hide()

});

$('#b3').on('click',function(){
    $('#section-3').show()
    $('#section').hide();
    $('#section-2').hide()
    $('#section-1').hide()
    $('#section-4').hide()
    $('#section-5').hide()
    $('#section-6').hide()

});

$('#b4').on('click',function(){
    $('#section-4').show()
    $('#section').hide();
    $('#section-2').hide()
    $('#section-3').hide()
    $('#section-1').hide()
    $('#section-5').hide()
    $('#section-6').hide()

});

$('#b5').on('click',function(){
    $('#section-5').show()
    $('#section').hide();
    $('#section-2').hide()
    $('#section-3').hide()
    $('#section-4').hide()
    $('#section-1').hide()
    $('#section-6').hide()

});

$('#b6').on('click',function(){
    $('#section-6').show()
    $('#section').hide();
    $('#section-2').hide()
    $('#section-3').hide()
    $('#section-4').hide()
    $('#section-5').hide()
    $('#section-1').hide()

});
$('#b').on('click',function(){

    $('#section').show();
    $('#section-2').hide()
    $('#section-3').hide()
    $('#section-4').hide()
    $('#section-5').hide()
    $('#section-1').hide()
    $('#section-6').hide()

});



  export default Servicejs
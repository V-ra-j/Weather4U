async function load(city) {
    cityName.innerHTML = city;

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a85cd65f73msh03be9f04544a400p1cc7e5jsn2d4f45d34787',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset

        
    
} catch (error) {
    console.error(error);
}
}
load();
async function load1(city) {
    

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Navsari';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a85cd65f73msh03be9f04544a400p1cc7e5jsn2d4f45d34787',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct1.innerHTML = result.cloud_pct
        temp1.innerHTML = result.temp
        feels_like1.innerHTML = result.feels_like
        humidity1.innerHTML = result.humidity
        min_temp1.innerHTML = result.min_temp
        max_temp1.innerHTML = result.max_temp
        wind_speed1.innerHTML = result.wind_speed
        wind_degrees1.innerHTML = result.wind_degrees
        sunrise1.innerHTML = result.sunrise
        sunset1.innerHTML = result.sunset

        
    
} catch (error) {
    console.error(error);
}
}
load1();
async function load2(city) {
    

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Valsad';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a85cd65f73msh03be9f04544a400p1cc7e5jsn2d4f45d34787',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct2.innerHTML = result.cloud_pct
        temp2.innerHTML = result.temp
        feels_like2.innerHTML = result.feels_like
        humidity2.innerHTML = result.humidity
        min_temp2.innerHTML = result.min_temp
        max_temp2.innerHTML = result.max_temp
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees2.innerHTML = result.wind_degrees
        sunrise2.innerHTML = result.sunrise
        sunset2.innerHTML = result.sunset

        
    
} catch (error) {
    console.error(error);
}
}
load2();
async function load3(city) {
    

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a85cd65f73msh03be9f04544a400p1cc7e5jsn2d4f45d34787',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct3.innerHTML = result.cloud_pct
        temp3.innerHTML = result.temp
        feels_like3.innerHTML = result.feels_like
        humidity3.innerHTML = result.humidity
        min_temp3.innerHTML = result.min_temp
        max_temp3.innerHTML = result.max_temp
        wind_speed3.innerHTML = result.wind_speed
        wind_degrees3.innerHTML = result.wind_degrees
        sunrise3.innerHTML = result.sunrise
        sunset3.innerHTML = result.sunset

        
    
} catch (error) {
    console.error(error);
}
}
load3();
async function load4(city) {
    

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a85cd65f73msh03be9f04544a400p1cc7e5jsn2d4f45d34787',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct4.innerHTML = result.cloud_pct
        temp4.innerHTML = result.temp
        feels_like4.innerHTML = result.feels_like
        humidity4.innerHTML = result.humidity
        min_temp4.innerHTML = result.min_temp
        max_temp4.innerHTML = result.max_temp
        wind_speed4.innerHTML = result.wind_speed
        wind_degrees4.innerHTML = result.wind_degrees
        sunrise4.innerHTML = result.sunrise
        sunset4.innerHTML = result.sunset

        
    
} catch (error) {
    console.error(error);
}
}
load4();

submit.addEventListener("click", (e) => {

    e.preventDefault()
    load(city.value)

})

load("Navsari")

//https://openweathermap.org/img/wn/03d@2x.png
//https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&appid=04d4d495e39f2311c4acd1148b6e2130
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getWeather(){
  let userLocation = document.getElementById('User-location');
  let user_location = userLocation.value;
  const request = new XMLHttpRequest()
  request.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${user_location}&appid=d1c0b872359442d3167214ff4cf4eea5`)
  request.send()
  request.addEventListener('readystatechange',()=>{

 if( request.readyState === 4 && request.status === 200){
       // console.log(request.responseText,request)
       let response = request.responseText
       let res = JSON.parse(response)
       
       //Desciption
       const description = document.getElementById('description')
       let Weather_description = res.weather[0].description
       let desc = description.innerHTML = Weather_description
       //Location degree
       const degree = document.getElementById('degrees')
      let deg =Math.floor(res.main.temp)
      let degrees = degree.innerHTML = `${deg}℃`
      //Name Of Place
      let imgplace = document.getElementById('imgplace')
      let place = document.getElementById('place')
      imgplace.innerHTML = `<img src=" http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png">`
      
      place.innerHTML = ` ${res.name}, ${res.sys.country}`
      //img place

      //Pressure
        const pre = document.getElementById('pressure')
        let pressure = Math.floor(res.main.pressure)
       let pres =  pre.innerHTML = `${pressure}hPa`
        
      //Humudity
      const humidity = document.getElementById('humidity')
        let humu = Math.floor(res.main.humidity)
       let humi =  humidity.innerHTML = `${humu}%` 
       //Feels like
        let feel = document.getElementById('feel')
        let feels = res.main.feels_like
        let feeling = feel.innerHTML = `${feels}`
        //Wind Speed
        let wind = document.getElementById('wind')
        let speed = res.wind.speed
        let wind_speed = wind.innerHTML = `${speed}km\hr`
        //sunshine
        let sun = document.getElementById("sunrise")
        let set = res.sys.sunrise
        var suntime = `${set}`
        var rise_date = new Date(suntime * 1000);
        var timesun = rise_date.toLocaleTimeString();
        let sunsrise = sun.innerHTML = `${timesun}`
        //sunset
        let sunset = document.getElementById("sunset")
        let sun_set = res.sys.sunset
        var convertSet  =   `${sun_set}`
        var sun_date = new Date(convertSet * 1000);
        var timestr = sun_date.toLocaleTimeString();
        let sunSet = sunset.innerHTML =   `${timestr}`
        //chance of rain
        let rain = document.getElementById('rain')
        let rain_percent = rain.innerHTML = `${res.clouds.all}%`
        userLocation.value = " "
    }
    
  
    
})
}
function timer(){
    let mydate = new Date()
    let day = mydate.getDay()
    let date = mydate.getDate()
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
    let month = mydate.getMonth()
    let time = document.getElementById('timer').innerHTML = `${days[day -1] } ${date} ${months[month]} `

setInterval(function time(){

    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let maridian = ""
      let timeNow = document.getElementById('time').innerHTML = `${hour}:${minutes}:${seconds} ${maridian}`
      
    if(hour === 12){
     let maridian = "AM"
    }
    else{
    let  maridian = "PM"
    }
  
  },1000)

  
 }
timer()




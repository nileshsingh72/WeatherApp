// //

// let imgerr = document.getElementById("imgerr");
// let map = document.getElementById("gmap_canvas");
// let A = "37d122971294d41af1328931dd96c7e8";
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// async function search() {
//   try {
//     let input = document.getElementById("city").value;
//     let A = "37d122971294d41af1328931dd96c7e8";

//     let res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${A}&units=metric`
//     );

//     let data = await res.json();
//     console.log(data);
//     document.getElementById("display").style.display = "inline-block";
//     document.getElementById("display").style.display = "flex";
//     append(data);
//   } catch (err) {
//     // imgerr.style.display="none";
//     console.log(err);
//   }
// }

// function append(data) {
//   document.getElementById("container").innerHTML = null;
//   let div = document.createElement("div");

//   let date = document.createElement("span");
//   date.setAttribute("id", "time");
//   let date1 = new Date();
//   let currentDate = months[date1.getMonth()];

//   date.innerText =
//     currentDate +
//     "," +
//     " " +
//     date1.getDate() +
//     " " +
//     date1.getHours() +
//     ":" +
//     date1.getMinutes();
//   date.style.color = "brown";

//   let name = document.createElement("p");
//   name.innerText = `${data.name}, IN`;
//   name.setAttribute("id", "namecity");

//   let div1 = document.createElement("div");
//   div1.setAttribute("id", "tempmax");

//   let temp_max = document.createElement("span");
//   temp_max.innerText = `${data.main.temp_max}°C`;

//   let timg = document.createElement("img");

//   if (data.weather[0].icon === "01d") {
//     timg.src = "http://openweathermap.org/img/wn/01d@2x.png";
//   }
//   if (data.weather[0].icon === "02d") {
//     timg.src = "http://openweathermap.org/img/wn/02d@2x.png";
//   }
//   if (data.weather[0].icon === "03d") {
//     timg.src = "http://openweathermap.org/img/wn/03d@2x.png";
//   }
//   if (data.weather[0].icon === "04d") {
//     timg.src = "http://openweathermap.org/img/wn/04d@2x.png";
//   }
//   if (data.weather[0].icon === "05d") {
//     timg.src = "http://openweathermap.org/img/wn/05d@2x.png";
//   }
//   if (data.weather[0].icon === "09d") {
//     timg.src = "http://openweathermap.org/img/wn/09d@2x.png";
//   }
//   if (data.weather[0].icon === "10d") {
//     timg.src = "http://openweathermap.org/img/wn/10d@2x.png";
//   }
//   if (data.weather[0].icon === "11d") {
//     timg.src = "http://openweathermap.org/img/wn/11d@2x.png";
//   }
//   if (data.weather[0].icon === "13d") {
//     timg.src = "http://openweathermap.org/img/wn/13d@2x.png";
//   }
//   if (data.weather[0].icon === "50d") {
//     timg.src = "http://openweathermap.org/img/wn/50d@2x.png";
//   }

//   let feel = document.createElement("p");
//   feel.innerText = `Feels like ${data.main.feels_like} ${data.weather[0].description}`;
//   feel.setAttribute("id", "feel");

//   let griddiv = document.createElement("div");
//   griddiv.setAttribute("id", "griddiv");

//   let d0 = document.createElement("div");
//   d0.innerText = ` ${data.wind.speed} m/s WSW`;

//   let d2 = document.createElement("div");
//   d2.innerText = `Pressure: ${data.main.pressure} hPa`;

//   let d3 = document.createElement("div");
//   d3.innerText = `Dew point: ${data.main.feels_like}`;

//   let d4 = document.createElement("div");
//   d4.innerText = `Visibility: ${data.visibility}`;

//   map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//   griddiv.append(d0, d2, d3, d4);
//   div1.append(timg, temp_max);
//   div.append(date, name, div1, feel, griddiv);
//   document.getElementById("container").append(div);
// }

// async function FF() {
//   try {
//     let Res = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=Indore&appid=${A}`
//     );
//     let Data = await Res.json();
//     console.log(Data);
//   } catch (errr) {
//     {
//       console.error(errr);
//     }
//   }
// }

// FF();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let time_Ele = document.getElementById("time");
let date_Ele = document.getElementById("date");

setInterval(() => {
  let time = new Date();
  let month = time.getMonth();
  let day = time.getDay();
  let date = time.getDate();
  let hour = time.getHours();
  let hourinFormat_12 = hour >= 13 ? hour % 12 : hour;
  let minutes = time.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";

  time_Ele.innerHTML =
    hourinFormat_12 + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;
  date_Ele.innerHTML = days[day] + "," + date + " " + months[month];
}, 1000);
// dcd

let pressure = document.getElementById("pressure");
let windspeed = document.getElementById("windspeed");
let feels = document.getElementById("feels");
let country = document.getElementById("country");
let cityname = document.getElementById("cityname");
let temperature = document.getElementById("temperature");
let Latitude = document.getElementById("lat");
let Longitue = document.getElementById("long");
let description = document.getElementById("desc");
let button = document
  .getElementById("button")
  .addEventListener("click", searchFun);
async function searchFun() {
  try {
    let input = document.getElementById("city").value;
    let A = "37d122971294d41af1328931dd96c7e8";
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${A}&units=metric`
    );
    let data = await res.json();
    console.log(data);
    append(data);
  } catch (err) {
    console.log(err);
  }
}
function append(data) {
  // let imageicon = document.createElement("img");
  pressure.innerHTML = data.main.pressure + "pa";
  feels.innerHTML = data.weather[0].main;
  country.innerHTML = data.sys.country;
  windspeed.innerHTML = data.wind.speed;
  cityname.innerHTML = `City name : ${data.name}`;
  Latitude.innerHTML = `Latitue : ${data.coord.lon}`;
  Longitue.innerHTML = `Longitude${data.coord.lat}`;
  temperature.innerHTML = `Temperature : ${data.main.temp + `&#176C`}`;
  description.innerHTML = `Description  : ${data.weather[0].description}`;
  // if (data.weather[0].icon === "01d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/01d@2x.png";
  // }
  // if (data.weather[0].icon === "02d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/02d@2x.png";
  // }
  // if (data.weather[0].icon === "03d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/03d@2x.png";
  // }
  // if (data.weather[0].icon === "04d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/04d@2x.png";
  // }
  // if (data.weather[0].icon === "05d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/05d@2x.png";
  // }
  // if (data.weather[0].icon === "09d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/09d@2x.png";
  // }
  // if (data.weather[0].icon === "10d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/10d@2x.png";
  // }
  // if (data.weather[0].icon === "11d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/11d@2x.png";
  // }
  // if (data.weather[0].icon === "13d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/13d@2x.png";
  // }
  // if (data.weather[0].icon === "50d") {
  //   imageicon.src = "http://openweathermap.org/img/wn/50d@2x.png";
  // }
  // document.getElementById("info").append(imageicon);
}

// // dcsd
// let current_weather_Item = document.getElementById("current-weather-items");
// let time_zone_Ele = document.getElementById("time-zone");
// let country_Ele = document.getAnimations("country");
// let weather_forcase_Ele = document.getElementById("weather-forcast");
// let current_temp_Ele = document.getElementById("current-temp");

// getData();
// function getData() {
//   let x = navigator.geolocation.getCurrentPosition((sucess) => {
//     const { latitude, longitude } = sucess.coords;
//     //   fetch(
//     //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${myApi}`
//     //   )
//     //     .then((res) => res.json())
//     //     .then((res) => console.log(res));
//     // });
//     console.log(latitude, longitude);
//   });

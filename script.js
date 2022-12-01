let lacation = document.getElementById("location");
let lateid = document.getElementById("late");
let long = document.getElementById("long");
let tymzone = document.getElementById("Time-Zone");
let  windspd = document.getElementById("wind-speed");
let  pressr = document.getElementById("pres-sure");
let humidy = document.getElementById("humi-dity");
let winddirec = document.getElementById("wind-direction");
let Uvindex = document.getElementById("uv-index");
let feelslyk = document.getElementById("feels-like");

const searchLoction = document.getElementById('search-location');
const searchAccesstoken = document.getElementById('search-accesstoken');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(searchLoction.value);
  searchLoction.value = '';
});
const getWeather = async (location) => {
  
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?&${location}unitGroup=metric&key=EEMZCM8QY4Z3QWKEU6FZRVA9K&contentType=json`,
      
    );
    const weatherData = await response.json();
   console.log(weatherData);
   

   
   const{address}=weatherData;
   const{feelslike}=weatherData.main;
   const{longitude} =weatherData;
    const{timezone} = weatherData.days[0,14];
    const{windspeed} = weatherData.days[0,14];
    const{pressure} = weatherData.days[0,14];
    const{humidity} = weatherData.days[0,14];
    const{winddir} = weatherData.days[0,14];
    const{uvindex} = weatherData.days[0,14];
  


    document.getElementById('late').textContent =latitude;
    document.getElementById('long').textContent =longitude;

    document.getElementById("location").textContent=address;
    document.getElementById("Time-Zone").textContent=timezone;
    document.getElementById("wind-speed").textContent=windspeed;
    document.getElementById("pres-sure").textContent=pressure;
    document.getElementById("humi-dity").textContent=humidity;
    document.getElementById("wind-direction").textContent= winddir;
    document.getElementById("uv-index").textContent=uvindex;
    document.getElementById("feels-like").textContent=feelslike;
   

  } catch (error) {
    alert('Location not found');
    
      alert('Invalid Access token');
    
  }
};

window.addEventListener("load", ()=>
{
    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=> 
        {
                long=position.coords.longitude;
                lat=position.coords.latitude;

                

            
                const api=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=metric&key=EEMZCM8QY4Z3QWKEU6FZRVA9K&contentType=json`;
                fetch(api).then((response)=>
                {
                    return response.json();
                })
                    .then(data => 
                    {
                      
                        const{longitude} =data;
                        const{latitude,address} = data;
                        const{timezone} = data.days[0,14];
                        const{windspeed} = data.days[0,14];
                        const{pressure} = data.days[0,14];
                        const{humidity} = data.days[0,14];
                        const{winddir} = data.days[0,14];
                        const{uvindex} = data.days[0,14];
                        const{feelslike} = data.days[0,14];

                        
                        document.getElementById('late').textContent =latitude;
                        document.getElementById('long').textContent =longitude;

                        document.getElementById("location").textContent=address;
                        document.getElementById("Time-Zone").textContent=timezone;
                        document.getElementById("wind-speed").textContent=windspeed;
                        document.getElementById("pres-sure").textContent=pressure;
                        document.getElementById("humi-dity").textContent=humidity;
                        document.getElementById("wind-direction").textContent= winddir;
                        document.getElementById("uv-index").textContent=uvindex;
                        document.getElementById("feels-like").textContent=feelslike;

                        

                        console.log(data);
                    })
            })
    }


})
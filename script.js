const url = 'https://api.openweathermap.org/data/2.5/';
const key = '43e6adf3f112273787b123087986f3ec';


const setQuery = (e)=>{
    if (e.keyCode == '13') { //entere basilan zaman
        getResult(searchBar.value); //function
    }
}

const getResult = (cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`;
     fetch(query)
     .then(weather => {
         return weather.json()
    })
    .then(displayResult)
    .catch((err) => console.log(err))
}

const displayResult = (result) =>{
    console.log(result);
    let city = document.querySelector(".city");
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}*C`;

    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}*C / ${Math.round(result.main.temp_max)}*C`
}

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keypress", setQuery);


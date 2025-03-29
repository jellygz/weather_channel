const sunnyMove = (e) => {
    console.log(`mouseX: ${e.x}, mouseY: ${e.y}`);

    document.querySelector(".sunny-sun").style.top = `${(e.y / window.innerHeight) * (window.innerHeight * 0.5)}px`;
    document.querySelector(".sunny-sun").style.left = `${(e.x / window.innerWidth) * (window.innerWidth * 0.5)}px`;
    document.querySelector(".sun-circle").style.boxShadow = `inset ${e.x / window.innerWidth * 32 - 8}px ${e.y / window.innerHeight * 32 - 8}px 26px rgb(0 0 0 / 25%)`;
}

// window.addEventListener("mousemove", sunnyMove);
// window.addEventListener("click", snowClick);
// window.addEventListener("mousemove", rainMove);

const snowClick = (e) => {
    const div = document.createElement("div"); 
    div.innerText = "♥";

    div.style.fontSize = `${Math.random() * 8 + 2}rem`
    div.style.top = `calc(${e.y}px - 0.7em)`;
    div.style.left = `calc(${e.x}px - 0.5em)`;

    document.querySelector(".snow .footprints").appendChild(div)
}

const rainMove = (e) => {
    document.querySelectorAll(".rainy-mood-holder >div:nth-child(odd)").forEach(
        odd => odd.style.top = `${e.y / 2}px`
    );
    document.querySelectorAll(".rainy-mood-holder >div:nth-child(even)").forEach(
        even => even.style.top = `${(window.innerHeight - e.y) / 2 - window.innerHeight / 4}px`
    );
    // document.querySelectorAll(".rainy-mood-holder >div:nth-child(even)");
}

const cloudClick = (e) => {
    const ratios = [1.63, 2.18]
    const div = document.createElement("div");
    console.log(ratios)
    const ratio = ratios[Math.floor(Math.random() * ratios.length)];
    const height = window.innerHeight * 0.18;
    const width = height * ratio;

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.top = `calc(${e.y}px - ${height * 0.5}px)`;
    div.style.left = `calc(${e.x}px - ${width * 0.5}px)`;

    document.querySelector(".puddle-holder").appendChild(div);

    setTimeout(() => {
        const div = document.createElement("div");
        const height = window.innerHeight * 0.18;
        const width = height;
        const ratio = (ratios[Math.floor(Math.random() * ratios.length)] > 2) ? 1 : -1;

        div.style.width = `${width}px`
        div.style.height = `${height}px`
        div.style.top = `calc(${e.y}px - ${height}px)`
        div.style.left = `calc(${e.x}px) - ${width / 3}px * ${ratio})`
        document.querySelector(".puddle-holder").appendChild(div)
    },500)
}

window.addEventListener("click", cloudClick)

const ConvertDDToDMS = (D, lng) => {
    // Decimal Degrees to Degrees Minutes and Seconds
    // lng가 true이면 위도를, lng가 false이면 경도를 출력한다.
    const dms = {
      dir: D < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
      deg: 0 | (D < 0 ? (D = -D) : D),
      min: 0 | ((D - 1e-9) % 1) * 60,
      sec: (0 | (((D * 60) % 1) * 6000)) / 100,
    };
    return `${dms.deg}°${dms.min}'${dms.sec}"${dms.dir}`;
};

const translation_kr = {
    "thunderstorm_with_light_rain": "가벼운 비를 동반한 천둥구름",
    "thunderstorm_with_rain": "비를 동반한 천둥구름",
    "thunderstorm_with_heavy_rain": "폭우를 동반한 천둥구름",
    "light_thunderstorm": "약한 천둥구름",
    "thunderstorm": "천둥구름",
    "heavy_thunderstorm": "강한 천둥구름",
    "ragged_thunderstorm": "불규칙적 천둥구름",
    "thunderstorm_with_light_drizzle": "약한 안개비를 동반한 천둥구름",
    "thunderstorm_with_drizzle": "연무를 동반한 천둥구름",
    "thunderstorm_with_heavy_drizzle": "강한 안개비를 동반한 천둥구름",
    "light_intensity_drizzle": "가벼운 안개비",
    "drizzle": "안개비",
    "heavy_intensity_drizzle": "강한 안개비",
    "light_intensity_drizzle_rain": "가벼운 적은비",
    "drizzle_rain": "적은비",
    "heavy_intensity_drizzle_rain": "강한 적은비",
    "shower_rain_and_drizzle": "소나기와 안개비",
    "heavy_shower_rain_and_drizzle": "강한 소나기와 안개비",
    "shower_drizzle": "소나기",
    "light_rain": "약한 비",
    "moderate_rain": "중간 비",
    "heavy_intensity_rain": "강한 비",
    "very_heavy_rain": "매우 강한 비",
    "extreme_rain": "극심한 비",
    "freezing_rain": "우박",
    "light_intensity_shower_rain": "약한 소나기 비",
    "shower_rain": "소나기 비",
    "heavy_intensity_shower_rain": "강한 소나기 비",
    "ragged_shower_rain": "불규칙적 소나기 비",
    "light_snow": "가벼운 눈",
    "snow": "눈",
    "heavy_snow": "강한 눈",
    "sleet": "진눈깨비",
    "shower_sleet": "소나기 진눈깨비",
    "light_rain_and_snow": "약한 비와 눈",
    "rain_and_snow": "비와 눈",
    "light_shower_snow": "약한 소나기 눈",
    "shower_snow": "소나기 눈",
    "heavy_shower_snow": "강한 소나기 눈",
    "mist": "박무",
    "smoke": "연기",
    "haze": "연무",
    "sand_dust_whirls": "모래 먼지",
    "fog": "안개",
    "dust": "먼지",
    "volcanic_ash": "화산재",
    "squalls": "돌풍",
    "clear": "구름",
    "clear_sky": "구름 한 점 없는 맑은 하늘",
    "few_clouds": "약간의 구름이 낀 하늘",
    "scattered_clouds": "드문드문 구름이 낀 하늘",
    "broken_clouds": "구름이 거의 없는 하늘",
    "clouds": "구름",
    "overcast_clouds": "구름으로 뒤덮인 흐린 하늘",
    "tornado": "토네이도",
    "tropical_storm": "태풍",
    "cold": "한랭",
    "hot": "고온",
    "windy": "바람부는",
    "rain": "비",
    "hail": "우박",
    "calm": "바람이 거의 없는",
    "light_breeze": "약한 바람",
    "gentle_breeze": "부드러운 바람",
    "moderate_breeze": "중간 세기 바람",
    "fresh_breeze": "신선한 바람",
    "strong_breeze": "센 바람",
    "high_win": "돌풍에 가까운 센 바람",
    "gale": "돌풍",
    "severe_gale": "심각한 돌풍",
    "storm": "폭풍",
    "violent_storm": "강한 폭풍",
    "hurricane": "허리케인"
  };

const get_weather = async(lat, long) => {
    try{
        const api_key = "ce812f2684d2fad85a7ec6913129d9c8";
        const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
        const res = await req.json();
        
        const weather = res.weather[0].main;
        const location = res.name;

        console.log(translation_kr[weather.toLowerCase().split(" ").join("_")])
        document.querySelector(".location").innerText = location
        document.querySelector(".title h1").innerHTML = translation_kr[weather.toLowerCase().split(" ").join("_")]
        document.querySelector(".title h2").innerText = weather

        if(weather.toLowerCase().includes("clear")){
            document.querySelector("html").dataset.weather = "sunny";
            window.addEventListener("mousemove", sunnyMove);

        }else if(weather.toLowerCase().includes("rain")){
            document.querySelector("html").dataset.weather = "rain";
            window.addEventListener("mousemove", rainMove);

        }else if(weather.toLowerCase().includes("snow")){
            document.querySelector("html").dataset.weather = "snow";
            window.addEventListener("click", snowClick);

        }else if(weather.toLowerCase().includes("cloud")){
            document.querySelector("html").dataset.weather = "cloudy";
        }

        document.querySelector(".latitude").innerText = ConvertDDToDMS(res.coord.lat, true)
        document.querySelector(".longitude").innerText = ConvertDDToDMS(res.coord.lon, false)

    }catch(err){
        console.log(err);
        // throw err;
    }
    // lat = coords.latitude
    // long = coords.longitude
}

const success = ({coords, timestamp}) => {
    console.log(coords)
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
    const hour = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    const minute = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()

    get_weather(coords.latitude, coords.longitude);
    document.querySelector(".contents .time").innerText = `${hour}:${minute} ${month}/${day}/${year}`
    document.querySelector(".calendar .month").innerText = month;
    document.querySelector(".calendar .day").innerText = day;
}

const getUserLocation = () => {
    if(!navigator.geolocation){
        alert("위치 정보가 지원되지 않습니다.")
    }else{
        navigator.geolocation.getCurrentPosition(success);
    }
}

getUserLocation();
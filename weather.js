// 강의 4분2초를 보라. 코드가 적혀잇다. 이해하고 순서대로 입력하라.

const weather =  document.querySelector(".js-weather");

const API_KEY = "fdc043150b4a4dabe389dd2724e69e21"; 

const COORDS = "coords";

function getWeather(lat,lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`
        });
}// api key를 입력하는 이유는 얼마나 많이 요청했는지 그 웹사이트에서 알아보기 위해서이다.

function saveCoords(CoordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(CoordsObj))
} // 그 이전에도 늘상 해왔듯이 정보가 지속되게 하기위해서 LOCAL 에다가 그 정보를 저장해야한다. 따라서, COORDS KEY 에다가 인자를 value로 지정한다.

function handleGeosuccess(position) {    
    const latitude = position.coords.latitude; // console.log(position) 이라고 해서 coords 밑에 child로 위도,경도가 있다는것을 확인했다.
    const longitude = position.coords.longitude;    
    const CoordsObj = {
      latitude,
      longitude
    }; // latitude = latitude 라고 해도 되는데 이걸 그냥 간단하게 latitude 라고 해도 됨.
    saveCoords(CoordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeosuccess, handleGeoError) 
}
// 구글위성을 통해 현재 내 위치정보를 알려준다. 그리고 현재 위치가 나오면 success 함수로 아니면 error 함수로 가게끔 한다.
function loadCoords(){
    const loadedCords =  localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        const parsedCords = JSON.parse(loadedCords);        
        getWeather(parsedCords);
    }
};

function init(){
    loadCoords();
}

init();
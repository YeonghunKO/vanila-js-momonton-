const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    // const seconds = date.getSeconds(); // 날짜 시간을 프린트해주는 함수.
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}`: minutes
    }`; // ternary operator(삼항연산자) 라고 하고 미니if 라고 읽는다. seconds 가 10미만이면 0%{seconds} 이고 아니면 그대로 seconds 이다. --0이 숫자 앞에 붙어서 나오게 하는 과정.
}


function init() {
    getTime();
    setInterval(getTime, 1000) // 괄호안에 있는 함수를 1초마다 업데이터하는 함수.(1000이라 적은 이유는 백만분의 1이기 때문에)
}

init()

//always divide and conquer!
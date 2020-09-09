const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN = "showing";   


function saveName(text) {
    localStorage.setItem(USER_LS,text); // key값이 currentUser 인 value의 값으로 text 가 저장됨
}

function handSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue)
} // submit 하면 input의 value가 paintGreeting에 의해 프린트 될 뿐만 아니라 savename 에 의해 세팅/저장된다. 그래서 새로고침해도 더이상 없어지지 않음
//요약: 입력값을 paint 하는 함수로 보내줌

function askForName() {
    form.classList.add(SHOWING_CN); // input 창이 나타남
    form.addEventListener("submit", handSubmit); // 그리고 값을 입력하고 엔터를 누르면 입력된 값이 handsubmit으로 이동.
}
//요약: 이름을 입력하는 창이 나타남. 그리고 그걸 입력하면 submit 하는 함수로 보내줌

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // input 창이 사라짐
    greeting.classList.add(SHOWING_CN); // h4 크기의 태그가 나타남
    greeting.innerText = `Have a nice day ${text} !` // handsubmit 에 의해 input value가 나타남
  
}
//요약: handsubmit 에 저장된 이름값이 나타나게 됨.


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser); // handsubmit에 의해 저장된 key:currentuser에 해당되는 value값이 paintGreeting의 argument 로 입력됨.
        
    }
}
// 요약: 이름값이 없으면 이름값을 입력하도록 하고 이름값이 있으면 그 값을 띄움

function init(){
    loadName();
}

init();
// 로직이 진짜 얽히고 섥혀있다. 아마 3일만지나도 모든 코드를 다시 읽는데 애먹을듯. 그래서 네이밍, 코드주석이 진짜 중요하겠구나를 느낀다. 이러한 로직을 짜는 니콜라스도 대단타진짜.
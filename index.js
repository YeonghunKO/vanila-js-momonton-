// 1. var, const, array
let a = 24; //  변수를 처음 정의 할 때 let을 쓴다. 그리고 진짜 필요할 때만. 대부분은 const 변수를 사용하자.
let b = a - 12; // 그리고 문장이 끝나면 세미콜론을 붙이자
const c = 111; //  변수를 변경할 수 없게 하려면 const(constant) 코드를 사용한다.
const name = "yeong";
const daysOfweek = ["mon","tue","wed"]; // array. 파이썬에서 list() 객체와 같다고 보면 될 것 같다. 
                                       // 2번째 원소만 불러오고 싶다 하면 [1] 만 붙여주면 된다.

console.log(daysOfweek)

// 2. object 
const yeongInfo = {
    name: "Yeonghun",
    gender: "male",
    awsomeness: true,
    favMovies: ["Peppermind","Harry potter"],
    favFood: [
        {
          Foodone: "kimchi",
          calories: 20
        },
        {
          Foodtwo: "Fried rice",
          calories: 190
        }
    ]
}
// 이런식으로 yeongInfo(객체,독립적 정체성, 자기나름의 세계가 있음) 안에 array와 변수를 추가할 수 있다. 그리고 object안에 원소를 불러내려면 . 을 사용하자 아래처럼 말이다.
// 그런 의미에서 console.log 도 함수이다.
console.log(yeongInfo.favFood[0].Foodone) 


// 3. function

function ho(name, name2){
    console.log("Hello", name, "Nice to meet you I'm", name2);
}

// 함수를 정의 할 때 먼저 앞에 fuction 을 쓰고 그 뒤에 함수이름을 정해준다. 그리고 함수안에 코드를 작성한다. 함수이름 옆에 ()가 있다. 
// 여기에 들어가는 값을 argument(인자)라고 한다. 그리고 임시로 정한 인자 이름을 함수안에서 사용하면 나중에 외부에서 input 된 데이터가 함수 안에 있는 인자 값으로 대입이 된다.
// 그리고 함수를 실행 할때 함수이름을 쓰고 괄호안에 인자를 대입하자. 그리고 함수는 console.log 없이 사용가능하다.
ho("척", "씨베리아") 

// 근데 greetings 객체를 더 깔끔하게 만들 수 있다.

function greetings(name, name2){
  return `Hello ${name} Nice to meet you I'm ${name2}`;
}

const hey = greetings("척", 112)

console.log(hey)

//라고 하면 됨. return 값을 주고 앞뒤로 ``(백틱)를 붙여줌.


// 계산 함수

const calculator = {
  plus: function(a,b){
    return a + b
  },
  multiply: function(a,b){
    return a * b
  },
  divide: function(a,b){
    return a / b
  },
  minus: function(a,b){
    return a - b
  },
  
  square: function(a,b){
    return a ** b
  }
}

console.log(calculator.divide(4,6))

// 4. DOM functions

//자바스크립트 document 객체로 html 상의 정보를 변경할 수 있다.
console.log(document) // html 안에 있는 모든 라인을 뽑아냄.
const title = document.querySelector("#title"); // id = "title" 이라는 라인을 뽑아냄 
console.log(title)

/*
title.innerHTML = "Haloo, changed."; // id = "title" 이라는 라인안에 있는 내용을 변경함.
console.dir(title); // title id 의 기능을 보여줌. 
title.style.color = "#9e63d9"; // 결과로 나온 기능중에 하나 써본다. 글자 색깔 변경
console.dir(document)
document.title = "이걸로 홈페이지 제목 변경가능";
*/


// 5. Event
// 이벤트는 말그대로 어떤 변화가 발생 했을때, 무언가가 바뀌는 것을 의미한다.


function handleResize(){
  console.log("I have been resized yo")
}
window.addEventListener("resize", handleResize);
// eventlistener는 지금 resize(웹창의 크기 바뀜)이벤트를 기다리고 있으며 크기가 바뀔때 마다, handleresize 함수를 불러온다.

// function changeColor() {
//   title.style.color = "blue";
// }

// window.addEventListener("click", changeColor); -->클릭 했을때 changeCOlor 함수 작동함.


// 6. if/else/and/or


/*
const age = prompt("How old are you?")


if (age >= 18 && age <= 21) {
  console.log("You can drink but sober is recommended")
} else if (age > 21) {
  console.log("Drink as fuck")
} else {
  console.log("Too young")
}
*/

/*
클릭할 때 마다 색깔이 바뀌는 로직
밑의 코드가 정석이다.

const currentColor =  "rgb(158, 99, 217)";
const other = "white";

function handleClick() {
  const current = title.style.color;
  if (current === currentColor) {
    title.style.color = other
  } else {
    title.style.color = currentColor
  }
}

function init() {
  title.style.color = currentColor;
  title.addEventListener("click", handleClick);
} // 괄호 닫는거 잊지 말자!

init();
*/


/*
내가 나름대로 짜본 코드.(클릭할 때 마다 색깔이 바뀌는 로직)
function changeCurrent() {
  title.style.color = "rgb(158, 99, 217)";
}

function changeWhite() {
  title.style.color = "white";
}

function doit() {
  if (title.style.color === "rgb(158, 99, 217)"){
  window.addEventListener("click",changeWhite);
} else {
  window.addEventListener("click",changeCurrent);
}
}

doit();

이게 왜 안될까나? 논리상으로 문제없는 것 같은데.
*/


// 7. if/else/and/or 연습 2(클릭할때 커서가 나오게 함. 그리고 커서가 계속 유지됨)



/*
const CLICLKED_CLASS = "clicked"

function handleClick() {
  const currentClass = title.className;
  if(currentClass !== CLICLKED_CLASS){
    title.className = CLICLKED_CLASS;
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
*/
// 문제는 class = "pointer" 를 html 안에 h1 태그에 추가 했는데 클릭하고 나서 handleClick 함수때문에 class = "" 가 되면서 포인터가 없어진다.
// 그럼 아래 처럼 바꾸면 된다.(참고로 MDN 에서 검색했다. 로직을 심플하고 강력하게 짜는것도 중요하지만, 제대로 검색하고 찾아내는것도 매우 중요하다.)

/*
const CLICLKED_CLASS = "clicked"

function handleClick() {
  const hasclass = title.classList.contains(CLICLKED_CLASS); //CLICKED_CLASS가 있느냐 없느냐? 이 자체가 BOOLEAN 이다.
  if(hasclass){
    title.classList.remove(CLICLKED_CLASS); // CLICKED_CLASS 있으면 지우고
  } else {
    title.classList.add(CLICLKED_CLASS); // 없으면 추가해라.
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
*/

// 근데 더 리팩토링 할 수 있음. toggle 메소드를 사용하면 됨

const CLICLKED_CLASS = "clicked"

function handleClick() {
  title.classList.toggle(CLICLKED_CLASS); // CLIKCKED 클래스가 있으면 끄고 없으면 켜라는 뜻이다. 진짜 한방에 정리해준다.
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
const body = document.querySelector("body")


const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image(); // 이미지를 삽입하는 함수이다
    image.src = `img/${imgNumber + 1}.jpg`; // img폴더안에 있는 파일을 지정한다. imgNumber뒤에 1을 더한 이유는 아래 기술했다. 
    image.classList.add("bgImage"); // bgImage 클래스를 img 에 추가하여 세부조정 할 수 있게 한다.
    body.appendChild(image); 
}
//imgNumber뒤에 1을 더한 이유:
//Math.floor(Math.random() * 3) 가 0,1,2 만 뽑아내기 때문에 1을 더해서 1,2,3 이 되게 하는 것이다(img 파일안에는 1.jpg, 2.jpg, 3.jpg 밖에 없다)


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
// Math.random() * 숫자 -- 숫자를 넘어서지 않은 수를 무작위로 뽑아내는 함수이다.
// Math.floor() -- 괄호안에 있는 숫자의 소수점을 없애고 무조건 내림한다.
// Math.floor(Math.random() * 숫자) -- 숫자 아래에 있는 수를 무작위로 뽑아내고 그 수가 소수라면 내림한 수를 프린트한다.



function init(){
    const random = genRandom();
    paintImage(random);
}

init();
const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList")



const TODOS_LS  = "toDos"  

let toDos = []; // deleToDo 함수안에서 toDos = cleanToDos; 때문에 toDos 변수를 고정시키면 안됨. 그래서 let 으로 변환했다.

function deleToDo(event) { // 우선 컴퓨터가 뭘 정확히 삭제할 지 지정해줘야한다.
    const btn = event.target; // 이벤트.타겟이 버튼을 의미한다.
    const li = btn.parentNode; //근데 버튼과 함께 버튼에 딸린 내용도 삭제되어야한다. 그래서 버튼에 해당하는 parent 를 찾아야함. 그때 console.dir(btn)라고 console 에 타이핑하고 쭉 내려가면 li.id = #1이 parentNode라는 걸 알 수 있다.
    toDoList.removeChild(li); // removeChild 메소드를 이용해 li를 삭제하자. 근데 삭제하고 나서 저장이 되어야 새로고침해도 안나타난다.
    const cleanToDos =  toDos.filter(function(toDo) { //이때 사용하는 메소트가 filter이다. 말그대로 filter안에있는 함수가 지정한 조건에 해당하는 값만 return 하는 메소드이다. 더 자세한 설명은 아래에 있다
        console.log(li.id,toDo.id)
        return toDo.id !== parseInt(li.id);          
    });                                    
    toDos = cleanToDos;  // 그리고 이렇게 삭제되어 없어진 원소들이 toDos array 에 업데이트되어야 하기에 toDos앞에 let을 붙여 변환가능한 변수로 만들어주고 cleantoDos와 같다고 치환하는 것이다.                  
    saveTdDos(); // 그리고 변화를 유지하기 위해 저장해준다.                        
} 
// cleanToDos 에 대한 자세한 설명:
// forEach 함수와 똑깥이 파이썬의 FOR 문처럼 원소하나하나를 훑는다. 그래서 toDos array안에 존재하는 원소가 4개라고 할때 4번 훑으면, delete누른 id 도 4번 훑는다.
// array안에 존재하는 원소의 갯수만큼 나온다는 뜻.(단 , delete된 id는 하나이므로 똑깥은 숫자가 나오겠지.)
// 예를들어, array안에 4개의 원소가 존재. 그중 2번째 원소를 삭제하면 id=2에 해당하는 원소가 없어짐. 그럼 li.id/toDos.id =(2/1,2/3,2/4) 가 되는것이다. 그럼 array안에 있는 1,3,4번째의 원소가 선택삭제된 원소의 id랑 다르므로 필터링되어 나오게 된다. 
// 근데 parseInt(정수로 변환) 하는 이유는 선택 삭제된 원소의 id 가 string 형태로 인식되기 때문에 array 원소 id랑 비교가능해지기 위해서 정수로 변환해주는 것이다.

// 요약: 쪼까 이해하기 어려운 함수다. 삭제해서 없애고 그 상태를 저장하는 함수다.

function saveTdDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON 은 "JavaScript Object Notion" 의 약자로 외부 데이터를 자바스크립트가 객체로 인식할 수 있게 해준다. json.stringify 는 일단 외부데이터를 스트링화해준다.(나중에 객체로 parse 해줄거다)
}
//요약: todolist 값을 local storage에 저장.

function paintToDo (text) { // 아래의 코드는 뼈대를 만드는 작업.
    const li = document.createElement("div"); // 말그대로 <li> 태그를 자바스크립트로 만드는 거다.
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌"; // 이모지가 깨진다면 index.html 에들어가서 head 태그 안에 <meta charset="UTF-8" /> 를 추가해주자.
    delBtn.addEventListener("click",deleToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text // input의 값이 나옴. span을 쓰는 이유는 더 좁은 범위의 text값을 수정할때 span(inline)태그를 사용한다. 참고로 div 태그는 더 큰 범위를 수정할때 block element의 형태로 사용됨
    // P.S: innertext 와 innerhtml 의 차이는? innerText는 말그대로 코드까지 텍스트로 읽어버리는거고 innerHtml은 코드는 코드로 읽고 적용해준다.
    li.appendChild(delBtn); // li(리스트 태그) 안에다가 delbtn을 넣은것임
    li.appendChild(span); // li(리스트 태그) 안에다가 span을 넣은것임
    li.id = newId // li(각각의 정보)에 고유의 id를 할당한다. 나중에 선별적으로 delete 하기 위해서.
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    }; // todolist 에 적힌 정보를 tuple 형태로 만들어 객체로 지정.
    toDos.push(toDoObj); //  그 객체를 toDos array 에 하나씩 차곡차곡 담는다
    saveTdDos(); //  그리고 저장한다.
}
// 요약: todolist 를 tuple의 형태로 array에 저장(toDos) 그리고 그걸 li 태그에 담아서 브라우저에 띄어줌


function handlesubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue); //input의 값을 currentvalue에 집어넣는것임. 
    toDoInput.value = ""; // input에 값을 입력하고나서 엔터누르면 초기화되면서 다시 입력가능하게 함. 
    
}

// 요약: todolist 값을 입력하게 함.

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){        
        const parsedToDos = JSON.parse(loadedToDos); // 스트링형태인 정보를 객체화 시켜준다.
       parsedToDos.forEach(function(toDo){ 
           paintToDo(toDo.text);
       });
// foreach는 파이썬의 포문이라고 생각하면 된다. foreach는 function을 기본적으로 탑재한다. 
// 그 function의 이름은 toDo로 일단 정했다. 그리고 parsetodo 의 원소(line)를 하나하나 paintodo에다가 대입한다.
    } 
}
//요약: localstorage에 저장된 입력값을 paint 함수로 인해 브라우저에 출력하게 함.

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handlesubmit)
}
//요약: submit을 누르면 todolist가 입력되도록 하고 그값을 띄어주도록 함. 그리고 그 값들이 브라우저에 계속 남아있음

//추가 질문: 왜 toDoInput이 아닌 toDoForm 에 다가 이벤트를 추가하는가? / 답변: 백문이 불여일견이라고 실제로 toDoInput 에다가 이벤트를 추가해보면 된다. 그럼 데이터를 입력해도 ul 태그안에 display 되지 않는다. 왜냐하면 , ul 태그의 parent는 js-toDoForm 이기 때문. 그렇기 때문에 모든것을 아우르는 toDoForm 에다가 이벤트를 추가하는 것.

init();


//p.s: father, children 이란 용어는 hierarchy 를 가리키는 것. nested 된 태그가 당연 children 이고 nest 하는 태그가 parent 이다.
//p.s: 함수안에 저장된 변수나 리스트는 함수밖에서 사용불가능. is not defined 라고 뜰것임. 그렇지 않으면 나도 모르는 사이 그 변수같은게 실행될 수 있음.
//만약 변수를 모든곳에 적용가능하게 하고 싶다고 하면 함수 밖에서 그냥 변수를 지정.
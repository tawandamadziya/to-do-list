//selection of elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Date
const options = {weekday :"long",month:"short",day :"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//function
 function addToDo(toDo, id, done ,trash){
    const text= `<li class="item">
                 <i class="fa-regular fa-circle co " aria-hidden="true" job="complete" id="0"></i>
                 <p class="text">${toDo}</p>
                 <i class=" fa-regular fa-trash de" aria-hidden="true" job="delete" id= ${id}></i>
                 </li>
    
    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position,text);
 }

 document.addEventListener("keyup",function(even){
    if(even.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo);
        }
        input.value="";

    }

 })
 addToDo("drink coffee");

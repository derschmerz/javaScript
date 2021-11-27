// let myDivs = document.querySelectorAll(".my_div");
// console.log(myDivs);
// let myId = document.getElementById("my_id");
// console.log(myId);
// myId.style.background = "red";

// let myLovelyDiv = document.querySelector("my_div");
// console.log(myLovelyDiv);

// const div = myLovelyDiv[0]

// div.innerHTML = 'poka'
// console.log(div);

// div.innerHTML += 'poka'
// console.log(div);

// div.outerHTML = 'poka'
// console.log(div);

// let newDov = document.creareElement('div');
// newDiv.classname = 'test_div';
// test.innerHTML

let header = document.createElement("header");
header.classname = "header";
header.style.background = "yellow";
header.innerHTML = "Заголовок";
document.body.prepend(header);
header.style.height = "100px";

let container = document.createElement("container");
container.classname = "container";
header.prepend(container);

let section = document.createElement("section");
section.classname = "page-section";
header.after(section);

let list = document.createElement("ol");
list.classname = "list";
section.prepend(list);

for (let i = 0; i <=5; i++) {
    let li = document.createElement("li");
    li.className = "list-element";
    li.innerHTML = `Элемент списка номер ${i}`
    
    list.append(li);
};

let inputWrapper = document.createElement("div")
inputWrapper.className = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.width = "150px";
inputWrapper.style.gap ='10px'
list.after(inputWrapper)

let input = document.createElement("input");
input.type = "text"
inputWrapper.prepend(input);
input.value 


let button = document.createElement("button");
button.classname = "btn";
button.innerHTML = "Добавить "
button.onclick = function() {}
input.after(button);


let addNewLi = function () {
    let inputValue = input.value;
    let newTodo = document.createElement("li")
    newTodo.innerHTML = `$inputValue`
    if (inputValue) {
       list.appendChild(newTodo);
   }
   input.value =''
   
}

let numberSelected = document.querySelector("#numberSelected");
let numberInput = document.querySelector("#numberInput");
let math = document.querySelector("#math");
let trivia = document.querySelector("#trivia");
let date = document.querySelector("#date");
let year = document.querySelector("#year");

//let year = document.querySelector("#math1");
//let year = document.querySelector("#trivia1");
//let year = document.querySelector("#date1");
//let year = document.querySelector("#year1");

let submit = document.querySelector("#submit");
let outPut = document.querySelector("#outPut");

let btnClick = {
    math: math.value,
    trivia: trivia.value,
    date: date.value,
    year: year.value
}

document.addEventListener('click',(e)=>{
    let val = numberInput.value
    if(e.target.id=='math'){
    //do something
    loadText('math',val)
}
else if(e.target.id=='trivia'){
    //do something
    loadText('trivia',val)
}
else if(e.target.id=="date"){
    //do something
    loadText('date',val)
}
else {
    //do something
    if(e.target.id=="year"){
        loadText('year',val)
    }
}
}
);

function loadText(e,val) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.querySelector("#outPut").innerHTML = this.responseText;
        }
    };
   if(e=="math"){
    xhr.open('GET', `http://numbersapi.com/${val}/math`, true)

   }
    
     if(e == 'trivia') {  
        xhr.open('GET', `http://numbersapi.com/${val}/trivia`, true)
    }
    else if(e == 'date') {  
        xhr.open('GET', `http://numbersapi.com/${val}/date`, true)
    }
    
    else {
        if(e=='year'){
            xhr.open('GET', `http://numbersapi.com/${val}/year`, true)
        }
    }
    xhr.send();
}

//let userInput = {
//    Input: input.value,
//    selectOption: select.value
//}

//function handleChange(e) {
//    userInput.Input = input.value
//    userInput.selectOption = select.value
//}
//
//function loadData(select, value) {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function() {
//        if(this.readyState == 4 && this.status == 200) {
//            document.querySelector('#outPut').innerHTML = this.responseText;
//        }
//    }
//    
//}

let selected ={
    type:"math",
    val:2
}


numberInput.onchange=(e)=>{
selected.val = e.target.value
}
numberSelected.onchange=(e)=>{
 selected.type = e.target.value
}

submit.onclick=()=>{
    let type = selected.type;
    let val= selected.val;
    loadText(type,val)
}
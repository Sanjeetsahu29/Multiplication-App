const num1 = Math.floor(Math.random()*10 + 1);
const num2 = Math.floor(Math.random()*10 + 1);
const ans = num1*num2;
const questionEl =document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
const imgEl = document.getElementById("img");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const containerEl = document.getElementById("container");
let score = JSON.parse(localStorage.getItem("score"));
console.log(score);

var img = document.createElement("img");
//if there is no value in score then put that equal to 0
if(!score){
    score = 0;
}
scoreEl.innerText=`Score:${score}`;
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === ans){
        score++;
        updatelocalStorage();
        formEl.style.backgroundColor="lightgreen"
    }
    else{
        score--;
        updatelocalStorage();
        formEl.style.backgroundColor="orangered";
    }
})


function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
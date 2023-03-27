const num1 = Math.floor(Math.random()*6)+5;
const num2 = Math.floor(Math.random()*10)+1;
const chosenValue = Math.random();

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

let score = JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById("score")


if(!score){
  score = 0;
}

scoreEl.innerText = `\\(Score: ${score}\\)`

// This works but does not generate the scores 
// function generateEquation(num1,num2){
//   return `\\(\\textrm{What is } ${num1} \\times ${num2}?\\)`;
// }

// const container = document.getElementById("equation-container");
// const equation = generateEquation(num1, num2);
// container.innerHTML = equation;
// Mathjax.typeset();

if(chosenValue<0){
  questionEl.innerText = `\\(\\textrm{What is }${num1}  \\times   ${num2}\\textrm{ ?}\\)`;
}else{
  questionEl.innerText = `\\(\\textrm{What is }${num2}  \\times   ${num1}\\textrm{ ?}\\)`;
}

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
  const userAns = +inputEl.value
  if(userAns===correctAns){
    score++
    updateLocalStorage()
  }else {
    score--
    updateLocalStorage()
    // localStorage.clear() //placing this here sets local storage to zero when user gives incorrect answer
  }
});

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
};

localStorage.clear();

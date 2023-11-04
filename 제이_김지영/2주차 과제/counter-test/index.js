
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const number = document.querySelector(".number");

console.log(increase);
console.log(decrease);
console.log(number);

let a = 0;

increase.addEventListener("click", () => {
  a++;
  number.innerText = a;
  //console.log(a);
  console.log("increase가 클릭됨")
})

decrease.addEventListener("click", ()=>{
    a--;
    number.innerText = a;
    console.log("decrease가 클릭됨")
})
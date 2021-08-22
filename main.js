//targil 1
let arr = [];
function addNewTask(){
    let inputPointer = document.getElementById("el").value;
    if(! arr.includes(inputPointer)){
        arr.push(inputPointer);
        document.body.innerHTML += `<p>${ arr[arr.length-1] }</p>`    
    }
    console.log(arr);
}

//targil 2
function sum(){
    console.log("im here");
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    console.log(num1,num2);
    document.body.innerHTML += `<p> the result is: ${num1 + num2}</p>`
}
// targil 3
let btn = document.getElementById("btnColor")
function colorChange(){
    btn.classList.remove(...btn.classList)
    let calssNum = Math.floor( Math.random()*11);
    btn.classList.add(`color${calssNum}`)
}

//targil 4
function randomNumPrint(){
    document.body.innerHTML += `<p>random number after clicking: ${Math.floor(Math.random()*100)}</p>`
}


//targil 5
// let items = [
//     {
//         name:"glass",
//         imgSrc:"https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         name:"car",
//         imgSrc:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         name:"phone",
//         imgSrc:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         name:"laptop",
//         imgSrc:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//     },
//     {
//         name:"ball",
//         imgSrc:"https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//     }
// ]
// for(let i = 0; i < items.length; i++){
//     document.body.innerHTML+=`<div>
//     <p>${items[i].name}</p>
//     <p><img width=500px" height="400px" src="${items[i].imgSrc}"></p>
//     </div>`
// }


//targil 6
let allNumber = []
function targil6(){
    allNumber.push( Number(document.getElementById("number").value) );
    console.log(allNumber);
}

//targil 7
function toDate(){
    document.getElementById("nowDate").innerText = new Date().getDate();
}

//targil 8
function nowtime(){
    document.getElementById("targil8").innerText = new Date().getHours();
}

//targil 9
function yorAge(){
    let myAge = new Date().getFullYear();
    document.body.innerHTML += `<p>your age is ${myAge - Number(document.getElementById("age").value )}</p>`;
}

//targil 10
function targil10(){
    let array = [10,23,33,33,22,14,1,2,3];
    let userInput = Number(prompt("give me a number:"));
    array.includes(userInput)?
    document.body.innerHTML+=`<p>fuond the number ${userInput} in the array</p>`:
    document.body.innerHTML+=`<p>the number ${userInput} is not exict</p>`
}

//targil 11
function splitNameAndLastName(value){
    index = value.indexOf(" ")
    document.body.innerHTML+=`<p>user name: ${value.slice(0,index)}</p>`;
    document.body.innerHTML+=`<p>user last name: ${value.slice(index)}</p>`;
}

// targil 12
const strA = document.getElementById("str1");
const strB = document.getElementById("str2");
function compere(){
    if(strA.value.length   > strB.value.length){
        console.log(`string A is bigger`);
    }else{
        console.log(`string B is bigger`);
    }
}
// targil 13
let clients = [];


function targil13(){
    let name13 = document.getElementById("name13");
    let email13 = document.getElementById("email13")
    let age13 = document.getElementById("age13")
    clients.push(
        {
            name:name13.value,
            email:email13.value,
            age:age13.value
        }
    );
    document.body.innerHTML+=`<div>
    <p>name: ${name13.value}</p>
    <p>email: ${email13.value}</p>
    <p>age: ${age13.value}</p>
    </div>`
    console.log(clients);
}
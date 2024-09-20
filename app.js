/*let gameSeq = [];
let userSeq = [];

let btns = ["red","green","yellow","purple"];
let h2 = document.querySelector("h2");
let Started = false;
let level = 0;
document.addEventListener("keypress",function(){
    if(Started == false){
        console.log("game started");
        Started = true;
    }
    levelup();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    console.log(ranIdx);
    console.log(ranColor);
    console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);   
    btnFlash(ranBtn);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText = "Game Over! Press any key to start.";
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}*/

let gameSeq = [];
let userSeq = [];
let btns = ["red","green","yellow","purple"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let started = false;
let level = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;
    }
    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },100);
        h3.innerHTML = `High Score: ${level}`;
        reset();
    }
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




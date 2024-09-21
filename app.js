let boxes=document.querySelectorAll(".box");
let Newgame=document.querySelector("#newgame");
let ResetGame=document.querySelector("#Reset");
let msg=document.querySelector(".new");
let msgp=document.querySelector("#mess");
let TurnX=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame =()=>{
    turnX=true;
    enableboxes();
    msgp.classList.add("new");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("btn clicked");
        
        if(TurnX===true){
            box.innerText="X";
            TurnX=false;
        }
        else{
            box.innerText="0";
            TurnX=true;
        }
        box.disabled=true;
        checkwinner();

})

});
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}
const showwinner=(Winner)=>{
    msgp.innerText=`Congrats Winner is ${Winner}`;
    msg.classList.remove("new");
    disableboxes();

}

let checkwinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2])
        
        let post1=boxes[pattern[0]].innerText;
        let post2=boxes[pattern[1]].innerText;
        let post3=boxes[pattern[2]].innerText;
        if(post1!=""&& post2!=""&&post3!=""){
            if(post1===post2&& post2===post3){
               
                
                showwinner(post1);
            }   
        }
    }

};

Newgame.addEventListener("click",resetGame);
ResetGame.addEventListener("click",resetGame);


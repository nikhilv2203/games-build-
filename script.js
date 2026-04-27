let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = "match Draw choice again";

}

const gencompchoice = () =>{
  const option =["rock","paper","scissors"];
  const randidx = Math.floor(Math.random ()*3);
   return option[randidx];
}

const playgame = (userchoice) =>{
    console.log("User choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    const showWinner = (userwin) =>{
        if(userwin){
            userScore++;
            userScorepara.innerText=userScore;
            console.log("you win!");
            msg.innerText = 'you win! from computer';
            msg.style.backgroundcolor ="green"
        }else{
            compScore++;
            compScorepara.innerText=compScore;
            console.log("you lost");
            msg.innerText ="you lost! from computer";
            msg.style.backgroundcolor ="red"

        }

    } 

    if ( userchoice === compchoice) {
    drawgame();
     } else {
        let userwin =true;
        if(userchoice==="rock"){
            //scissors , paper
            userwin = compchoice === "paper" ? false : true ;
        }else if(userchoice==="paper"){
            //scissors , rock
            userwin = compchoice === "scissors" ? false : true ;
        } else{
        //rock ,paper
            userwin = compchoice === "rock" ? false : true ;
     }
         showWinner(userwin);
} 
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
    
});



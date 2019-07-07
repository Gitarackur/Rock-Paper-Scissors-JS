



var scores=[0,0];
var CounterForPlayers=0;
var FinalScore=0;
var FinalScore1=0;

winn();

var images=["./images/Rock.jpg", "./images/Paper.jpg", "./images/Scissors.jpg"];


function TheMainGame(){
	
var Player= prompt("What do you want to pick");
if(Player=="Rock" || Player=="rock"){
		Player="Rock";
	}else if(Player=="Paper" || Player=="paper"){
		Player= "Paper";
		}else if(Player=="Scissors" || Player=="scissors"){
			Player= "Scissors";
			}

			
			
var Computer= Math.floor(Math.random() * 3)+ 1;

if(Computer==1){
		Computer= "Rock";
	}else if(Computer==2){
		Computer= "Paper";
		}else if(Computer== 3){
			Computer="Scissors";
			}

//alert(Computer);

function Finalescore(){
		FinalScore=FinalScore + 1;
		scores[0]= FinalScore;
		document.querySelector("#Comp3").textContent= FinalScore;
}

function Finalescore1(){
		FinalScore1=FinalScore1 + 1;
		scores[1]= FinalScore1;
		document.querySelector("#play3").textContent= FinalScore1;
}


if(Computer=="Rock" && Player=="Scissors"){
		//alert("Computer Wins");
		document.querySelector("#CompImg").src=images[0];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[2];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore();
		
	}else if(Computer=="Paper" && Player =="Rock"){
		//alert("Computer Wins");
		document.querySelector("#CompImg").src=images[1];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[0];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore();

		}else if(Computer=="Scissors" && Player =="Rock"){
		//alert("Player Wins");
		document.querySelector("#CompImg").src=images[2];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[0];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore1();

		}else if(Computer=="Rock" && Player =="Paper"){
		//alert("Player Wins");
		document.querySelector("#CompImg").src=images[0];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[1];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore1();
		
		}else if(Computer=="Scissors" && Player =="Paper"){
		//alert("Computer Wins");
		document.querySelector("#CompImg").src=images[2];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[1];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore();
		
		}else if(Computer=="Paper" && Player =="Scissors"){
		//alert("Player Wins");
		document.querySelector("#CompImg").src=images[1];
		document.querySelector("#CompImg").style.display="block";
		document.querySelector("#PlyImg").src=images[2];
		document.querySelector("#PlyImg").style.display="block";
		Finalescore1();
		
		}else if(Computer == Player){
		alert("Its a tie");
		
			if(Computer=="Rock" && Player=="Rock"){
					document.querySelector("#CompImg").src=images[0];
					document.querySelector("#CompImg").style.display="block";
					document.querySelector("#PlyImg").src=images[0];
					document.querySelector("#PlyImg").style.display="block";
				}else if(Computer=="Paper" && Computer=="Paper"){
					document.querySelector("#CompImg").src=images[1];
					document.querySelector("#CompImg").style.display="block";
					document.querySelector("#PlyImg").src=images[1];
					document.querySelector("#PlyImg").style.display="block";
					} else{
					document.querySelector("#CompImg").src=images[2];
					document.querySelector("#CompImg").style.display="block";
					document.querySelector("#PlyImg").src=images[2];
					document.querySelector("#PlyImg").style.display="block";
					}
		
		}else{
		 alert("Error, You didnt Insert Any of Rock,Paper and Scissors");
		}
		
		
	winner();
	
}


function winn(){
	document.querySelector("#CompImg").style.display="none";
	document.querySelector("#PlyImg").style.display="none";
}


function remImg(){
		document.querySelector("#CompImg").style.display="none";
		document.querySelector("#PlyImg").style.display="none";
}

function winner(){
//alert(scores);
	if (scores[0]>=5){
		alert("The winner is Computer");
		document.querySelector("#Comp1").classList.add("active");
		document.querySelector("#Comp1").innerHTML= "<em> Winner </em>";
			winn();
	}else if (scores[1]>=5){
		alert("Congratulations!!! The winner is Player");
		document.querySelector("#Plymp1").classList.add("active");
		document.querySelector("#Plymp1").innerHTML= "<em> Winner </em>";
			winn();
		}else{
		//alert("its not possible");{}
		}
}




document.querySelector(".btn-play").addEventListener("click" , TheMainGame);


document.querySelector(".btn-new").addEventListener("click" , function(){
		resett();
		remImg();
});


function resett(){
		scores=[0,0];
		CounterForPlayers=0;
		FinalScore=0;
		FinalScore1=0;
		document.querySelector("#Comp3").textContent= FinalScore;
		document.querySelector("#play3").textContent= FinalScore1;
}




document.querySelector(".btn-stop").addEventListener("click" , function(){
remImg();
	scores[0]= FinalScore;
	scores[1]= FinalScore1;
		if (scores[0]>scores[1]){
			alert("The winner is Computer");
			}else if(scores[1]> scores[0]){
			alert("The winner is Player");
			}else{
			alert("It is a Tie");
			}
		
});




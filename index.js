var randomNumber1 = Math.floor(Math.random(0)*6+1);
var randomNumber2 = Math.floor(Math.random(0)*6+1);
if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player 1 wins 🏆";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 wins 🏆";
else
    document.querySelector("h1").innerHTML="Draw";

var src1 = "images/dice"+randomNumber1+".png";
var src2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src" ,src1);
document.querySelector(".img2").setAttribute("src" ,src2);


// switch(randomNumber1){
// case 1:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice1.png");
//     break;

// case 2:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice2.png");
//     break;

// case 3:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice3.png");
//     break;

// case 4:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice4.png");
//     break;

// case 5:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice5.png");
//     break;
// case 6:
//     document.querySelector(".img1").setAttribute("src" ,"images/dice6.png");
//     break;
// }

// switch(randomNumber2){
//     case 1:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice1.png");
//         break;

//     case 2:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice2.png");
//         break;

//     case 3:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice3.png");
//         break;

//     case 4:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice4.png");
//         break;

//     case 5:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice5.png");
//         break;

//     case 6:
//         document.querySelector(".img2").setAttribute("src" ,"images/dice6.png");
//         break;
// }



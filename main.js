var cards= document.getElementsByClassName("card");
var figuren=["tumbi.png","suzu.png","bumbalu.png","bumba.png","baby.png","bumbum.png"];
var random=[0,1,2,3,4,5];
var header=document.getElementsByTagName("h1")[0];
var fout = document.getElementById("fout");
var juist = document.getElementById("juist");
  function draai() {
    for (var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('clicked');
    }
    header.innerHTML="Waar is bumba?";
  }
  function draaiterug() {
    for (var i = 0; i < cards.length; i++) {
      cards[i].onclick=function() {
        this.classList.toggle('clicked');
        if (this.id === "bumba.png") {
          header.innerHTML="Je hebt Bumba gevonden!";
          juist.play();
        }else{
          header.innerHTML="Oh oh dat is niet Bumba!";
          fout.play();
        }
      }
    }
  }
  function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
  };
  function verstop() {
    Shuffle(random);
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.backgroundImage = "url("+figuren[random[i]]+")";
      cards[i].id = figuren[random[i]];
    }
  }
  function reset(){
    draai();
    verstop();
  }
  verstop();
  setTimeout(draai,3000);
  setTimeout(draaiterug,3001);

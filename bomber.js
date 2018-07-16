// user press key
// img moves in key direction
// for img to move chnage margin
// event listener for key in dom

window.addEventListener("keydown", function(e){
  if(e.keyCode==40){
    console.log("downKeyPressed")
    moveDown();
  }else if (e.keyCode==38){
    console.log("upKeyPressed")
    moveUp();
  }else if (e.keyCode==37){
    console.log("leftKeyPressed")
    moveLeft();
  }else if (e.keyCode==39){
    console.log("rightKeyPressed")
    moveRight();
  }
})

var topPika= 20

function moveUp(){
  topPika-=10;
  console.log(topPika)
  document.getElementsByTagName('img')[0].style.marginTop = topPika + "px"
}

function moveDown(){
  topPika+=10;
  console.log(topPika)
  document.getElementsByTagName('img')[0].style.marginTop = topPika + "px"
}

var leftPika= 20

function moveLeft(){
  leftPika-=10;
  console.log(leftPika)
  document.getElementsByTagName('img')[0].style.marginLeft = leftPika + "px"
}

function moveRight(){
  leftPika+=10;
  console.log(leftPika)
  document.getElementsByTagName('img')[0].style.marginLeft = leftPika + "px"
}

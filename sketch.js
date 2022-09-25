let myElements = [];
let myConnections = [];
let mouseDragging = false;
let elementJustSelected = false;
let makingConnection = false;
let justStartedConnection = false;
let indexOfGrowingConnection = 0;


function setup() {
  createCanvas(800, 800);
  rectMode(CORNERS)
}

function draw(){
  background(255*0.13)
  for(let i = myConnections.length-1; i >= 0; i--){
    if(myConnections[i].isDead()){
      myConnections.splice(i,1);
    }
    else{
      myConnections[i].render();
    }
  }
  for(let i = 0; i < myElements.length; i++){
    //myElements[i].handleMouse();
    myElements[i].render();
  }
}

function mouseDragged() {
  mouseDragging = true;
}

function mouseReleased(){
  let someSelected = countSelected();
  if(elementJustSelected==false && someSelected){
    deleteEmptyElements();
    deselectAll();
  }
  if(someSelected==false && mouseDragging==false){
    newElement(mouseX,mouseY);
  }
  let index = indexOfElementUnderMouse();
  if(keyIsDown(SHIFT) && isElementUnderMouse() && makingConnection==false && justStartedConnection==false){
    myConnections.push(new Connection(myElements[index]));
    indexOfGrowingConnection = myConnections.length-1;
    makingConnection=true;
    justStartedConnection=true;
  }
  if(isElementUnderMouse() && makingConnection==true && justStartedConnection==false){
    myConnections[indexOfGrowingConnection].finishConnection(myElements[index])
    makingConnection=false;
  }
  justStartedConnection=false;
  if(isElementUnderMouse() && mouseDragging==false && !keyIsDown(CONTROL)){
    deselectAll();
    myElements[index].select();
    deleteEmptyElements();
  }
  dedragAll();
  mouseDragging = false;
  elementJustSelected = false;
}

function mousePressed(){
  let index = indexOfElementUnderMouse();
  if(isElementUnderMouse()){
    if(keyIsDown(CONTROL) || (myElements[index].isSelected)){
      //keep selected
    }
    else{
      deselectAll();
    }
    myElements[index].select();
    elementJustSelected = true;
    setSelectedDragged();
    bringToFront(index);
    deleteEmptyElements();
  }
}

function keyPressed(){
  if(keyCode==DELETE){
    deleteSelected();
  }
  if(isElementEditing()){
    let index = indexOfElementEditing();
    if(keyCode==BACKSPACE){
      myElements[index].content = myElements[index].content.slice(0,-1);
    }
  }
}

function keyTyped() {
  if(isElementEditing()){
    if(key=="Enter"){
      let index = indexOfElementEditing();
      if(myElements[index].content===""){
        myElements.splice(index,1);
        return;
      }
      deselectAll();
      newElement(myElements[index].xPos,myElements[index].nextLineY)
    }
    else{
      appendEditing(key);
    }
  }
}


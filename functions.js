function countSelected(){
  let count = 0;
  for(let i = 0; i < myElements.length; i++){
    if(myElements[i].isSelected){
      count++;
    }
  }
  return count;
}

function newElement(newX,newY){
  myElements.push(new Element(newX,newY));
}

function deselectAll(){
  for(let i = 0; i < myElements.length; i++){
    myElements[i].deselect();
  }
}

function dedragAll(){
  for(let i = 0; i < myElements.length; i++){
    myElements[i].dedrag();
  }
}

function indexOfElementUnderMouse(){
  for(let i = myElements.length-1; i >= 0; i--){
    if(myElements[i].contains(mouseX,mouseY)){
      return i;
    }
  }
}

function isElementUnderMouse(){
  for(let i = myElements.length-1; i >= 0; i--){
    if(myElements[i].contains(mouseX,mouseY)){
      return true;
    }
  }
  return false;
}

function bringToFront(index){
  myElements.push(myElements[index]);
  myElements.splice(index,1);
}

function setSelectedDragged(){
  for(let i = 0; i < myElements.length; i++){
    if(myElements[i].isSelected){
      myElements[i].setDragged();
    }
  }
}

function deleteSelected(){
  for(let i = myElements.length-1; i >= 0; i--){
    if(myElements[i].isSelected){
      myElements[i].delete();
      myElements.splice(i,1);
    }
  }
}

function deleteEmptyElements(){
  for(let i = myElements.length-1; i >= 0; i--){
    if(myElements[i].isEmpty()){
      myElements[i].delete();
      myElements.splice(i,1);
    }
  }
}

function appendEditing(char){
  for(let i = 0; i < myElements.length; i++){
    if(myElements[i].isEditing){
      myElements[i].append(char);
    }
  }
}

function isElementEditing(){
  for(let i = 0; i < myElements.length; i++){
    if(myElements[i].isEditing){
      return true;
    }
  }
  return false;
}

function indexOfElementEditing(){
  for(let i = 0; i < myElements.length; i++){
    if(myElements[i].isEditing){
      return i;
    }
  }
}







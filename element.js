class Element {
  constructor(x,y) {
    this.xPos = x;
    this.yPos = y;
    this.textSize = 25;
    this.content = "";
    this.isDragging = false;
    this.mousePressed = false;
    this.isSelected = true;
    this.isEditing = true;
    this.cursorPosition = 0;
    this.isDead = false;
  }
  
  render(){
    if(this.isDragging==true){
      this.xPos = mouseX - this.relativeMouseX;
      this.yPos = mouseY - this.relativeMouseY;
    }
    if(this.isSelected){
      strokeWeight(this.radius*0.65);
      stroke(255*0.5);
    }
    else{
      strokeWeight(this.radius*0.15);
      stroke(255*0.4);
    }
    textSize(this.textSize);
    this.radius = this.textSize*0.2;
    this.textPadding = this.textSize*0.3;
    this.width = textWidth(this.content);
    this.height = textAscent()*0.8;
    this.textYOffset = textAscent()/2;
    this.rectX1 = this.xPos - this.textPadding*0.8;
    this.rectY1 = this.yPos - this.textPadding;
    this.rectX2 = this.xPos + this.width + this.textPadding*0.8;
    this.rectY2 = this.yPos + this.height + this.textPadding;
    this.nextLineY = (this.rectY2 - this.rectY1) + this.yPos + this.textSize*0.2;
    this.midXPos = this.xPos + this.width/2;
    this.midYPos = this.yPos + this.height/2;
    fill(255*0.25)
    rect(this.rectX1,this.rectY1,this.rectX2,this.rectY2,this.radius);
    noStroke();
    fill(255)
    text(this.content,this.xPos,this.yPos+this.height);
  }
  
  handleMouse(){
    if(mouseIsPressed==false){
      this.isDragging = false;
      this.mousePressed = false;
    }
    if(mouseIsPressed==true && this.mousePressed==false){
      this.mousePressed = true;
      this.mouseJustPressed = true;
    }else{
      this.mouseJustPressed = false
    }
    if(this.isDragging==false && this.mouseJustPressed && mouseX>this.rectX1 && mouseX<this.rectX2 && mouseY>this.rectY1 && mouseY<this.rectY2){
      this.isSelected = true;
      this.isDragging = true;
      this.relativeMouseX = mouseX - this.xPos;
      this.relativeMouseY = mouseY - this.yPos;
    }
    if(this.isDragging==true){
      this.xPos = mouseX - this.relativeMouseX;
      this.yPos = mouseY - this.relativeMouseY;
    }
  }
  
  select(){
    this.isSelected = true;
  }
  
  deselect(){
    this.isSelected = false;
    this.isEditing = false;
  }
  
  setDragged(){
    this.isDragging = true;
    this.relativeMouseX = mouseX - this.xPos;
    this.relativeMouseY = mouseY - this.yPos;
  }
  
  dedrag(){
    this.isDragging = false;
  }
  
  contains(x,y){
    if(mouseX>this.rectX1 && mouseX<this.rectX2 && mouseY>this.rectY1 && mouseY<this.rectY2){
      return true;
    }
    else{
      return false;
    }
  }
  
  isEmpty(){
    if(this.content===""){
      return true
    }
    else{
      return false
    }
  }
  
  append(char){
    this.content = this.content + char;
  }
  
  delete(){
    this.isDead = true;
  }
}

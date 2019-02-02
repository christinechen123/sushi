/*
Christine Chen
Section E
cyc1@andrew.cmu.edu
Assignment-10-a
*/

var sushi = [];
var count = 0;
var riceSize = 70;

function setup() {
    createCanvas(480, 180); 
    
    //initial collection of sushi
    for (var i = 0; i < 5; i += 20){
        sushi[i] = makeSushi(width);
    }

    frameRate(140);
}


function draw() {
    count += 1;
    background(247, 191, 201); //pink

    sushiText();
  
    sushiConveyorBelt();

    updateAndDisplaySushi();
    removeSushiThatHaveSlippedOutOfView();
    addNewSushiConstantly(); 
}

function sushiText(){
    //dark red banner
    fill(150, 0, 0);
    rect(33, 22, 155, 48)

    //bright red banner
    fill(239, 33, 33);
    rect(41, 28, 140, 35);

    //text
    fill(255); 
    textSize(18);
    text("おいしい寿司", 57, 52); 
}

function updateAndDisplaySushi(){
    // Update the sushi's positions, and display them.
    for (var i = 0; i < sushi.length; i++){
        sushi[i].move();
        sushi[i].display();
    }
}


function removeSushiThatHaveSlippedOutOfView(){
    var sushiToKeep = [];
    for (var i = 0; i < sushi.length; i++){
        if (sushi[i].x + sushi[i].breadth > -200) {
            sushiToKeep.push(sushi[i]);
        }
    }
    sushi = sushiToKeep; //remember surviving sushi
}

//keeps adding sushi to the end
function addNewSushiConstantly() {
    if (count > 270) {
        sushi.push(makeSushi(width));
        count = 0;
    }
}

//update sushi position every frame
function sushiMove() {
    this.x += this.speed;
}
    

// draw the sushi
function sushiDisplay() {
    var Height = 30; 
    fill(255); 
    noStroke();
    push();
    translate(this.x, height - 40);

    //plate for tofu sushi
    fill(255, 118, 96);
    ellipse(35, -Height/7, 110, 30)
    rect(5, 5, 60, 10);

    //tofu sushi
    fill(255, 118, 96); //plate for tofu sushi
    ellipse(35, -Height/7, 110, 30)
    rect(5, 5, 60, 10);

    fill(255); //white rice
    rect(0, -Height, riceSize, 30);

    fill(255, 244, 0); //yellow tofu
    rect(0, -Height - 20, riceSize, 20);

    fill(0); //black seaweed
    rect(25, -Height - 20, riceSize/4, 20);
    
    //sashimi sushi
    fill(111, 200, 221); //plate for sashimi sushi
    ellipse(175, -Height/7, 110, 30);
    rect(145, 5, 60, 10); 

    fill(255); //white rice
    rect(140, -Height, riceSize, 30);

    fill(255, 91, 0); //red meat
    rect(140, -Height - 20, riceSize, 20);

    fill(249, 221, 205); //meat texture
    var meatLineWidth = riceSize/12;
    rect(150, -Height - 20, meatLineWidth, 20);
    rect(170, -Height - 20, meatLineWidth, 20);
    rect(190, -Height - 20, meatLineWidth, 20);
    
    pop();
}

//sushi info
function makeSushi(birthLocationX) {
    var sushi = {x: birthLocationX,
                breadth: 60,
                speed: -1.0,
                move: sushiMove,
                display: sushiDisplay}
    return sushi;
}

function sushiConveyorBelt(){
    stroke(221, 133, 152); //dark pink
    strokeWeight(30);
    line (0, height - 10, width, height - 10); 
}

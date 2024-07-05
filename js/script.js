    let img; 
    let xPos;
    let yPos;
    let xSpeed = .03;
    let ySpeed = 3;

    function preload(){
      img = loadImage('./images/raindrop.webp');
    }
    function setup(){
      createCanvas(500, 300);
      xPos = 0;
      yPos = 0;
    }

    function draw(){
      background(145, 7, 132);
      image(img, xPos, yPos, 100, 75);
      xPos += xSpeed;
      //moving alongt he x axis
      yPos += ySpeed;
      //moving along the y axis
      if (yPos > 300-33){
        xPos = random(0, width);
        yPos = -30
      for (yPos = 0; yPos >260;) {
        newimage(img, xPos, yPos, 100, 75);
      }  
      }
      
    }
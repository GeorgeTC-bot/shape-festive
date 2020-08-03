var player;

var enemy = [];

var pos;
var settings = {
  maxEntitySpawn: 50,
  friendlyFire: false,
}

var sz = 10;

var r;
var gamestate, Button;
var load = false;

var type = 1;

var points = 0;

var tutorial = true;

function setup(){
    createCanvas(775,500);
    gamestate = "start";

    snipe ={
        bullets: [],
        fired: false
    };

    Button = [createSprite(200,200,70,40), 
      createSprite(width/2 - 100,200,50,50), 
      createSprite(width/2,200,50,50), 
      createSprite(width/2 + 100,200,50,50)];

    for(var i = 0; i < Button.length; i++){
      Button[i].visible = false
    }

    //create Player
    player = new Ship(camera.x,camera.y,10,3);
    player.is_player = true;
}

function draw(){
    if(gamestate === "start"){
      Start();
    }
    else if(gamestate === "choose"){
      Choose();
    }
    else if(gamestate === "game"){
      Game();
    }
    else if(gamestate === "tutorial"){
      Tutorial();
    }

    drawMouse();
}

function keyPressed(){
    //reset to start menu
    if(keyCode === 27){
      for(var i = 0; i < enemy.length; i++){
        enemy[i].body.destroy();
      }
      player.body.destroy();
      gamestate = "start";
      enemy = [];
      player.loc = [];
      type = 1;
      player.update = true;
    }
    //friendly fire on/off
    else if(keyCode === 70){
      if(settings.friendlyFire === true){
        settings.friendlyFire = false;
      }
      else if(settings.friendlyFire === false){
        settings.friendlyFire = true;
      }
    }
    //tutorial keybind
    if(keyCode === 89 && gamestate === "tutorial"){
      gamestate = "game";
      enemy = [];
      tutorial = false;
    }

    //SPACE bar
    if(keyCode === 32){
      if(player.shape != "triangle"){
        snipe.bullets.push( new Bullet(player ,player.body.x ,player.body.y ,camera.mouseX, camera.mouseY));
        snipe.fired = true;
      }
      else{
        if(player.properties.maxSpeed <= 9){
          player.properties.maxSpeed = 20; 
        }
      }
    }
  }
  
  
  
  //controls
  function playerControls(){
    follow({x: camera.mouseX, y: camera.mouseY}, player.body, player.properties.maxSpeed,"fight");
  }

  function drawMouse(){
    //mouse
    noStroke();
    fill("black");
    triangle(camera.mouseX, camera.mouseY + 10, 
      camera.mouseX, camera.mouseY - 10, 
      camera.mouseX + 10, camera.mouseY + 5);
    triangle(camera.mouseX, camera.mouseY + 5, 
      camera.mouseX, camera.mouseY - 10, 
      camera.mouseX + 10, camera.mouseY + 10);
  }

  function decelerate(){
    if(player.properties.maxSpeed > 9){
      
      player.properties.maxSpeed -= 0.1;
    }
    else{
      if(player.shape === "triangle"){
        player.properties.maxSpeed = 9;
      }
    }
  }
  
  
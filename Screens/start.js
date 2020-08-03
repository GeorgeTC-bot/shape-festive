function Start(){
    background(0);
    Button[0].visible = true;

    Button[0].x = camera.x;
    Button[0].y = camera.y;

    for(var i = 1; i < Button.length; i++){
        Button[i].visible = false
    }

    if(mousePressedOver(Button[0]) && Button[0].visible != false){
        gamestate = "choose";
        Button[0].visible = false;
    }

    drawSprites();

    fill(0);
    text("Press to go", Button[0].x - 35, Button[0].y + 10);
}
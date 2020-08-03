function Bar(){
    push();
    noStroke();
    t = player.percent.triangle;
    c = player.percent.circle;
    r = player.percent.rectangle;

    rectMode(CORNER);

    rect(camera.x - 50, camera.y + 210, 100, 20);

    //triangle
    fill("yellow");
    rect(camera.x - 50, camera.y + 210, t, 20);

    //circle
    fill("green");
    rect(camera.x - 50 + t, camera.y + 210, c, 20);

    //rectangle
    fill("blue");
    rect(camera.x - 50 + t + c, camera.y + 210, r, 20);

    fill("black");
    text("POINTS: " + points, camera.x + 200, camera.y - 210);

    pop();
}
function Tutorial(){
    background(240);

    rectMode(CENTER);
    triangle((width/2 - 100) - 30/2, 
        200 + 30/2, 
        (width/2 - 100), 
        200 - 30/2, 
        (width/2 - 100) + 30/2, 
        200 + 30/2);
    fill("green");
    ellipse(width/2 + 100,200, 30);
    fill("blue");
    rect(width/2,200,30,30);

    text("These are the types of ships there are", width/2 - 80, 300);
    text("You get points by either destroying a lot of ships or till the bar at the bottom is filled with one color!", width/2 - 200, 320);
    text("Triangles damage by smashing into ships, Rectangles and Circle have bullets that can be shot using the SPACE bar", width/2 - 250, 340);
    text("press Y to continue", width/2 - 50, 360);
    text("Press Esc to exit to start screen", width/2 - 70, 380);

}

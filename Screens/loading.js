function loading(no, max, tex){
    background(0);
    
    push();


    rectMode(CENTER);

    rect(camera.x, camera.y + 10, 100, 20);

    rectMode(CORNER);
    fill("green");

    rect(camera.x - 50, camera.y, (no/ max) * 100, 20);

    fill("white");
    text(tex, camera.x - 40, camera.y + 50);
    
}
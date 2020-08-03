function takeDamage(p1, array, i){
    //For loop
    for(var j = 0; j < snipe.bullets.length; j++){
      //display bullets
      snipe.bullets[j].display();
      if(snipe.bullets[j].entity === p1 && p1.shape === "circle"){
        //if(player is a circle)
        follow({x: camera.mouseX, y: camera.mouseY}, snipe.bullets[j].body, 10, "fight");
      }

      //no errors with  undefined shapes
      if(array[i].shape != undefined || p1.shape != undefined){
        //if(bullet has stayed for more than 10000 ticks)
        if(snipe.bullets[j].time > 10000){
            snipe.bullets.splice(j, 1);
            j -= 1;
        }
        //if looped body is touching bullet...
        else if(array[i].body.isTouching(snipe.bullets[j].body)){
            //checks if bullet was not thrown by it and is way above its grace point
            if(snipe.bullets[j].entity != array[i] && array[i].time >= 40){
                //If friendly fire is on/off
                if(settings.friendlyFire === true || settings.friendlyFire === false && array[i].shape != p1.shape){
                    array[i].health -= snipe.bullets[j].entity.properties.damage;

                    //Enemy is hit by something
                    array[i].lasthit = snipe.bullets[j].entity;  
                    
                }
                snipe.bullets.splice(j, 1);
                j -= 1;
            }
        }
        else if(p1.body.isTouching(snipe.bullets[j].body)){
            if(snipe.bullets[j].entity != p1){
                if(settings.friendlyFire === true || settings.friendlyFire === false && p1.shape != snipe.bullets[j].entity.shape){
                    p1.health -= snipe.bullets[j].entity.properties.damage;

                    //player is hit by something
                    p1.lasthit = snipe.bullets[j].entity;
                }
                snipe.bullets.splice(j, 1);
                j -= 1;
            }
        }
      }
    }  
    
    //touch damage for triangles
    if(p1.shape === "triangle"){
        if(settings.friendlyFire === true || settings.friendlyFire === false && p1.shape != array[i].shape){
            if(p1.body.isTouching(array[i].body) && array[i].time >= 40){
                //enemy is hit by player
                array[i].lasthit = p1;
                array[i].health -= p1.properties.damage;//+[(p1.velocityX + p1.velocityY)/2];
                i -= 1;
            }
        }
    }
}

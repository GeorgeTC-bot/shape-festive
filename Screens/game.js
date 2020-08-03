function Game(){

  //text("Points: "+ points,player.x + 100, player.y);

  //spawns enemy
  if(enemy.length < settings.maxEntitySpawn){
    enemy.push(new Ship(random(camera.x - width, camera.x + width),
     random(camera.y - height, camera.y + height),
     random(sz + 5, sz+5),
     Math.round(random(0.5,3))));
  }

  if(enemy.length >= settings.maxEntitySpawn){
    load = false;
    background(240);
    player.display();

    sz = player.properties.length;

    //controls
    playerControls();

    

    //keeps a certain no of bullets
    if(snipe.bullets.length > 5){
      snipe.bullets.splice(0, 1);
    }

    //enemy details
    for( var i = 0; i < enemy.length; i++){

      enemy[i].display();

      takeDamage(player ,enemy ,i);

      if(enemy[i].health <= 0){
        var percent = enemy[i].lasthit.percent;
        //excess
        var ratio;

        if(enemy[i].shape === "triangle"){
          percent.triangle += 10;
        }
        else if(enemy[i].shape === "rectangle"){
          percent.rectangle += 5;
        }
        else if(enemy[i].shape === "circle"){
          percent.circle += 7;
        }

        //percent
        if(percent.triangle + percent.rectangle + percent.circle > 100
           && percent.triangle < 100
           && percent.rectangle < 100
            && percent.circle < 100)
          {

          if(percent.triangle < percent.circle && percent.rectangle < percent.circle){
            percent.triangle /= 2;
            percent.rectangle /= 2;
          }
          if(percent.triangle < percent.rectangle && percent.circle < percent.rectangle){
            percent.triangle /= 2;
            percent.circle /= 2;
          }
          if(percent.rectangle < percent.triangle && percent.circle < percent.triangle){
            percent.rectangle /= 2;
            percent.circle /= 2;
          }

          ratio = [(percent.triangle/(percent.triangle + percent.rectangle + percent.circle)) * 100,
            (percent.rectangle/(percent.triangle + percent.rectangle + percent.circle)) * 100,
            (percent.circle/(percent.triangle + percent.rectangle + percent.circle)) * 100];
        
          percent.triangle = ratio[0];
          percent.rectangle = ratio[1];
          percent.circle = ratio[2];
        }

        enemy[i].lasthit.properties.length += 1;

        enemy[i].body.destroy();
        enemy.splice(i,1);
      }

      //if not undefined to avoid errors
      if(enemy[i] != undefined){
        //AI given
        if(enemy[i].shape === "rectangle"){
          rAI(enemy[i]);
        }
        else if(enemy[i].shape === "triangle"){
          tAI(enemy[i]);
        }
        else if(enemy[i].shape === "circle"){
          cAI(enemy[i]);
        }
      }

      if(enemy[i].body.x > player.body.x + 1000 || enemy[i].body.x < player.body.x - 1000 && enemy[i].body.y > player.body.y + 1000 || enemy[i].body.y < player.body.y - 1000){
        enemy.splice(i, 1);
        i -= 1;
      }
    }

    Bar();
    
    decelerate();

    if(player.properties.length >= 100){
      player.health = 0;
    }

    //camera Properties
    camera.x = player.body.x;
    camera.y = player.body.y;
    //camera.zoom = -player.properties.length/5;  
  }
  else{
    if(load === true){
      loading(enemy.length, settings.maxEntitySpawn, "Loading... Stuff")
    }
  }
}


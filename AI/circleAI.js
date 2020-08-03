function cAI(p){
        if(frameCount % 10 === 0){
            var rand = Math.round(random(0.5,7.5));
        }

        if(rand === 1){
            p.body.velocityX = p.properties.maxSpeed;
        }
        else if(rand === 2){
            p.body.velocityX = -p.properties.maxSpeed;
        }
        else if(rand === 3){
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 4){
            p.body.velocityY = -p.properties.maxSpeed;
        }
        else if(rand === 5){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = -p.properties.maxSpeed;
        }
        else if(rand === 6){
            p.body.velocityX = -p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 7){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
        else if(rand === 8){
            p.body.velocityX = p.properties.maxSpeed;
            p.body.velocityY = p.properties.maxSpeed;
        }
}
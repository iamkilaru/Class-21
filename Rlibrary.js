function isTouching(red, blue){
    //DETECTING COLLISION
  if(red.x - blue.x <= red.width/2 + blue.width/2
    && blue.x - red.x <= red.width/2 + blue.width/2
    && red.y - blue.y <= red.height/2 + blue.height/2
    && blue.y - red.y <= red.height/2 + blue.height/2){
      //Yes, they are colliding
      return true;
  }
  else {
      //No, they aren't colliding
      return false;
  }
}

function bounceOff(a,s){
  //BOUNCING OFF
  if(a.x - s.x <= a.width/2 + s.width/2
    && s.x - a.x <= a.width/2 + s.width/2){
    a.velocityX=a.velocityX*(-1);
    s.velocityX=s.velocityX*(-1);
    }

  if(a.y - s.y <= a.height/2 + s.height/2
    && s.y - a.y <= a.height/2 + s.height/2){
      a.velocityY=a.velocityY*(-1);
      s.velocityY=s.velocityY*(-1);
    }
}
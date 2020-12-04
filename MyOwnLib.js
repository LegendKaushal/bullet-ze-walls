function isTouching(object1,object2)
{
  if (object1.x-10 - object2.x < object2.width/2 + object1.width/2
    && object2.x-10 - object1.x < object2.width/2 + object1.width/2
    && object1.y-10 - object2.y < object2.height/2 + object1.height/2
    && object2.y-10 - object1.y < object2.height/2 + object1.height/2)
{
  
  console.log("true")
  return true;
  
}
else
{

  console.log("false")
  return false;
  
}
}

function isTouching2(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    || object2.x - object1.x < object2.width/2 + object1.width/2
    || object1.y - object2.y < object2.height/2 + object1.height/2
    || object2.y - object1.y < object2.height/2 + object1.height/2)
{
  
  console.log("true")
  return true;
  
}
else
{

  console.log("false")
  return false;
  
}
}
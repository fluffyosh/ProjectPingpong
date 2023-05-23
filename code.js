var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","f13bee07-6a57-4f84-898e-68e4055df37d","b8c48122-c160-4537-b787-36f32e481c29"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":10,"version":"bRW0uy8BKyCbjJOod_lEG6KxONClIN.n","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"CKHLn.s2YtBELQ_gAUbtoRxzD9kBL3o5","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"GUxTmiXMb4Qv1JSfGy_ftEZUuKYq7umi","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"i56tRBn1kFbHxAr0VpJ7seyBNQNC7xOH","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":null,"frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"dYO6jJ1mNd4m4V9lnBOl2FQgkeyqLKVo","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"f13bee07-6a57-4f84-898e-68e4055df37d":{"name":"creature_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MAToNJw83kBeM_mkbDDthSwvQa0GGTOm/category_animals/creature_06.png","frameSize":{"x":386,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"MAToNJw83kBeM_mkbDDthSwvQa0GGTOm","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MAToNJw83kBeM_mkbDDthSwvQa0GGTOm/category_animals/creature_06.png"},"b8c48122-c160-4537-b787-36f32e481c29":{"name":"sword_diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL./category_tools/sword_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL.","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL./category_tools/sword_diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("creature_06_1");
    ball.scale=0.1
    playerPaddle.setAnimation("sword_diamond_1")
    playerPaddle.scale=0.4
    

function draw() {
  background("white");
  if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle))
  {
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
  }
  
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=5;
     ball.velocityY=5;
  }
  
  computerPaddle.y=ball.y;

  drawnet();
  
 
    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

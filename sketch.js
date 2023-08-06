var jackson
var jacksonImg 
var chao
var chaoImg
function preload(){
  //imagens pré-carregadas

jacksonImg = loadAnimation("Runner-1.png","Runner-2.png")

chaoImg = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

chao = createSprite(200,200)

chao.addImage("chao",chaoImg)

chao.velocityY = 10

jackson = createSprite(200,200)

jackson.addAnimation("jackson",jacksonImg)

jackson.scale = 0.1

}

function draw() {
  background(0);

if(chao.y>400){

chao.y = 200

}

drawSprites()
}

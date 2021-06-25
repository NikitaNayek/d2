var tanjiro;
var tanjiroImg;
var doma, domaImg;
var rui, ruiImg;
var muzan, muzanImg;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20;
var sword;
var swordImg;
var bg;
var music1, music2, music3;
var zuko, zukoImg;
var zen, zenImg;
var inou, inouImg;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload()
{
tanjiroImg = loadImage("tanjiro.png");
domaImg = loadImage("doma.png");
ruiImg = loadImage("rui.png");
muzanImg = loadImage("muzan.png");
swordImg = loadImage("rengoku1.jpeg");	
bg = loadImage("Bg.jpg");
music1 = loadSound("Music1.mp3");
music2 = loadSound("Music2.mp3");
music3 = loadSound("Music3.mp3");
winImg=loadImage("win.jpg");
overImg=loadImage("go.png");
zukoImg=loadImage("Nezuko.png");
zenImg=loadImage("Zen.png");
inouImg=loadImage("Inosuke.png");
ze=loadSound("zenitsu.mp3");
ino=loadSound("monjiro.mp3");
nez=loadSound("nezMus.mp3");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	tanjiro = createSprite(displayWidth - 50, displayHeight - 60, 40, 100);
	tanjiro.addImage("protaganist", tanjiroImg);
	tanjiro.scale = 0.3;

	doma = createSprite(displayWidth/2, displayHeight/2, 40, 40);
	doma.addImage("villain", domaImg);
	doma.scale = 0.2;
  doma.velocityX=-5;
  
 // doma.velocityY=-3;
	rui = createSprite(displayWidth/2 - 100, displayHeight/2 , 40, 40);
	rui.addImage("villain", ruiImg);
	rui.scale = 0.22;
    rui.velocityY=-5;
	
	muzan = createSprite(displayWidth/2 + 100, displayHeight/2 , 40, 40);
	muzan.addImage("villain", muzanImg);
	muzan.scale = 0.2;
  
	sword = createSprite(displayWidth/2-10, displayHeight/2-90, 20, 30);
	sword.addImage("destination", swordImg);
	sword.scale = 0.2;

	zuko = createSprite(displayWidth - 50,  70, 40, 80);
	zuko.addImage("Nezuko", zukoImg);
	zuko.scale = 0.25;

	zen = createSprite(50, 60, 40, 80);
	zen.addImage("Zen", zenImg);
	zen.scale = 0.25;

	inou = createSprite(50,  displayHeight - 60, 40, 80);
	inou.addImage("inosuke", inouImg);
	inou.scale = 0.25;

	

	m1 = createSprite(displayWidth-400, displayHeight/8-20, 8, displayHeight/4);
	m1.shapeColor = "green";

	m2 = createSprite(displayWidth/4, 20, 8, displayHeight/4);
	m2.shapeColor = "green";

	m3 = createSprite(displayWidth/2, 30, 7, displayHeight/4);
	m3.shapeColor = "green";

	m4 = createSprite(120, 250, displayWidth/4, 8);
	m4.shapeColor = "green";

	m5 = createSprite(200, 400, displayWidth/7, 8);
	m5.shapeColor = "green";

	m6 = createSprite(displayWidth-10,displayHeight-10 , displayWidth/7, 10);
	m6.shapeColor = "green";
	
	m7 = createSprite(displayWidth - 70, 450, 8, displayHeight/4);
	m7.shapeColor = "green";

	m8 = createSprite(100, 100, displayWidth/5, 8);
	m8.shapeColor = "green";

	m9 = createSprite(displayWidth/2 - 20, 550, 8, displayHeight/5);
	m9.shapeColor = "green";
	
	m10 = createSprite(displayWidth - 300, 50, displayWidth/4,8);
	m10.shapeColor = "green";

	m11 = createSprite(displayWidth/8, 20, 8, 90);
	m11.shapeColor = "green";

	m12 = createSprite(1000, 500, displayWidth/6, 8);
	m12.shapeColor = "green";

	m13 = createSprite(830, 120, 8, displayHeight/4);
	m13.shapeColor = "green";
	
	m14 = createSprite(900, 600, displayWidth/8, 8);
	m14.shapeColor = "green";

	m15 = createSprite(displayWidth-200, displayHeight-10, 8, displayHeight/4);
	m15.shapeColor = "green";

	m16 = createSprite(displayWidth-500, displayHeight-50, displayWidth/4, 8);
	m16.shapeColor = "green";

	m17 = createSprite(displayWidth-300, 700, 8, displayHeight/4);
	m17.shapeColor = "green";

	m18 = createSprite(displayWidth-900, 500, 8, displayHeight/4);
	m18.shapeColor = "green";

	m19 = createSprite(displayWidth-1200, 500, displayWidth/5, 8);
	m19.shapeColor = "green";

	m20 = createSprite(displayWidth-800, 750, 8, displayHeight/4);
	m20.shapeColor = "green";
  
	m21 = createSprite(displayWidth-80, 50, 8, displayHeight/4);
	m21.shapeColor = "green";

	m22 = createSprite(displayWidth-200, 270, displayWidth/5, 8);
	m22.shapeColor = "green";

	m23 = createSprite(displayWidth/6-50, 1070, displayWidth/5, 8);
	m23.shapeColor = "green";

	m24 = createSprite(displayWidth/10-50, 170, displayWidth/5, 8);
	m24.shapeColor = "green";

	m24 = createSprite(displayWidth/10-50, 770, displayWidth/5, 8);
	m24.shapeColor = "green";

	m25 = createSprite(displayWidth/10, 970, displayWidth/5, 8);
	m25.shapeColor = "green";

	m26 = createSprite(displayWidth/4+170, 10, 8, displayHeight/2);
	m26.shapeColor = "green";

	m27 = createSprite(150, 680, 8, displayHeight/4);
	m27.shapeColor = "green";

	m28 = createSprite(350, 670, displayWidth/6, 8);
	m28.shapeColor = "green";

	
  win=createSprite(displayWidth/2-50,displayHeight/2-70,50,50)
  win.addImage("win",winImg);
  win.visible=false;

  over=createSprite(displayWidth/2-50,displayHeight/2-70,50,50)
  over.addImage("over",overImg);
  over.visible=false;
  music1.play();
}


function draw() {
  background(bg);
  edges=createEdgeSprites();
  if(gameState===PLAY)
  {
	
  if(keyDown("down"))
  {
	  tanjiro.y+=5;
  }

  if(keyDown("up"))
  {
	  tanjiro.y-=5;
  }

  if(keyDown("left"))
  {
	  tanjiro.x-=5;
  }

  if(keyDown("right"))
  {
	  tanjiro.x+=5;
  }
  if(doma.isTouching(muzan) || doma.isTouching(rui))
  {
    doma.velocityY=4;
  }
  muzan.x=doma.x;
  muzan.y=rui.y;
if(tanjiro.isTouching(sword) && score===3)
{

  win.visible=true;
  rui.velocityY=0;
  doma.velocityX=0;
  rui.destroy();
  muzan.destroy();
  doma.destroy();
  music2.play();
}

if(tanjiro.isTouching(zen))
{
	ze.play();
	zen.destroy();
	score=score+1;
}

if(tanjiro.isTouching(zuko))
{
	nez.play();
	score=score+1;
	zuko.destroy();
}

if(tanjiro.isTouching(inou))
{
	ino.play();
	score=score+1;
	inou.destroy();
}

if(muzan.isTouching(tanjiro) || rui.isTouching(tanjiro)  || doma.isTouching(tanjiro) )
{
gameState=END;
}
  }

  if(gameState===END)
  {
	over.visible=true;
	tanjiro.destroy();
	sword.destroy();
	rui.velocityY=0;
	doma.velocityX=0;
	music3.play();
  }
  
	doma.bounceOff(edges)
	doma.bounceOff(m1); 
	doma.bounceOff(m2); 
	doma.bounceOff(m3); 
	doma.bounceOff(m4);
	doma.bounceOff(m5);
	doma.bounceOff(m6);
	doma.bounceOff(m7); 
	doma.bounceOff(m8); 
	doma.bounceOff(m9); 
	doma.bounceOff(m10);
	doma.bounceOff(m11); 
	doma.bounceOff(m12); 
	doma.bounceOff(m13); 
 	doma.bounceOff(m14);
	doma.bounceOff(m15);
	doma.bounceOff(m16);
	doma.bounceOff(m17); 
	doma.bounceOff(m18);
	doma.bounceOff(m19);
	doma.bounceOff(m20);
	doma.bounceOff(m21); 
	doma.bounceOff(m22); 
	doma.bounceOff(m23); 
	doma.bounceOff(m24); 
	doma.bounceOff(m25);
	doma.bounceOff(m26);
	doma.bounceOff(m27);
	doma.bounceOff(m28);
  doma.bounceOff(rui);
  doma.bounceOff(muzan);
  rui.bounceOff(muzan);
  rui.bounceOff(doma);
  muzan.bounceOff(rui);
  muzan.bounceOff(doma);
	
  rui.bounceOff(edges)
	rui.bounceOff(m1); 
	rui.bounceOff(m2); 
	rui.bounceOff(m3); 
	rui.bounceOff(m4);
	rui.bounceOff(m5);
	rui.bounceOff(m6);
	rui.bounceOff(m7); 
	rui.bounceOff(m8); 
	rui.bounceOff(m9); 
	rui.bounceOff(m10);
	rui.bounceOff(m11); 
	rui.bounceOff(m12); 
	rui.bounceOff(m13); 
  rui.bounceOff(m14);
	rui.bounceOff(m15);
  rui.bounceOff(m16);
	rui.bounceOff(m17); 
	rui.bounceOff(m18);
	rui.bounceOff(m19);
	rui.bounceOff(m20);
  rui.bounceOff(m21); 
	rui.bounceOff(m22); 
	rui.bounceOff(m23); 
	rui.bounceOff(m24); 
	rui.bounceOff(m25);
	rui.bounceOff(m26);
	rui.bounceOff(m27);
	rui.bounceOff(m28);

  muzan.bounceOff(edges)
	muzan.bounceOff(m1); 
  muzan.bounceOff(m2); 
	muzan.bounceOff(m3); 
	muzan.bounceOff(m4);
  muzan.bounceOff(m5);
	muzan.bounceOff(m6);
	muzan.bounceOff(m7); 
	muzan.bounceOff(m8); 
  muzan.bounceOff(m9); 
	muzan.bounceOff(m10);
	muzan.bounceOff(m11); 
  muzan.bounceOff(m12); 
  muzan.bounceOff(m13); 
  muzan.bounceOff(m14);
	muzan.bounceOff(m15);
  muzan.bounceOff(m16);
	muzan.bounceOff(m17); 
	muzan.bounceOff(m18);
  muzan.bounceOff(m19);
	muzan.bounceOff(m20);
  muzan.bounceOff(m21); 
	muzan.bounceOff(m22); 
	muzan.bounceOff(m23); 
	muzan.bounceOff(m24); 
	muzan.bounceOff(m25);
  muzan.bounceOff(m26);
	muzan.bounceOff(m27);
	muzan.bounceOff(m28);

	tanjiro.collide(m1); 
	tanjiro.collide(m2); 
	tanjiro.collide(m3); 
	tanjiro.collide(m4);
	tanjiro.collide(m5);
	tanjiro.collide(m6);
	tanjiro.collide(m7); 
	tanjiro.collide(m8); 
	tanjiro.collide(m9); 
	tanjiro.collide(m10);
	tanjiro.collide(m11); 
	tanjiro.collide(m12); 
	tanjiro.collide(m13); 
	tanjiro.collide(m14);
	tanjiro.collide(m15);
	tanjiro.collide(m16);
	tanjiro.collide(m17); 
	tanjiro.collide(m18);
	tanjiro.collide(m19);
	tanjiro.collide(m20);
	tanjiro.collide(m21); 
	tanjiro.collide(m22); 
	tanjiro.collide(m23); 
	tanjiro.collide(m24); 
	tanjiro.collide(m25);
	tanjiro.collide(m26);
	tanjiro.collide(m27);
	tanjiro.collide(m28);
	tanjiro.bounceOff(edges);
  drawSprites();

 
}




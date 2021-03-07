var bg,bgImg;
var ninja, rockMonster, amongUs, Alien, Sonic, female;

function preload(){
    //background
    bgImg = loadImage("images/bgimage.png");

    //characters
    ninja = loadAnimation("images/Character6/Ninja1.png","images/Character6/Ninja2.png","images/Character6/Ninja3.png",
                          "images/Character6/Ninja4.png","images/Character6/Ninja5.png")
    Alien = loadAnimation("images/Character5/Alien1.png","images/Character5/Alien2.png","images/Character5/Alien3.png",
                          "images/Character5/Alien4.png","images/Character5/Alien5.png","images/Character5/Alien6.png",
                          "images/Character5/Alien7.png");
    rockMonster = loadAnimation("images/Character4/RM1.png","images/Character4/RM2.png","images/Character4/RM3.png",
                                "images/Character4/RM4.png","images/Character4/RM5.png","images/Character4/RM6.png",
                                "images/Character4/RM7.png","images/Character4/RM8.png");
    Sonic = loadAnimation("images/Character3/Sonic1.png","images/Character3/Sonic2.png","images/Character3/Sonic3.png",
                          "images/Character3/Sonic4.png");
    amongUs = loadAnimation("images/Character2/amongUs1.png","images/Character2/amongUs2.png","images/Character2/amongUs3.png",
                            "images/Character2/amongUs4.png");
    female = loadAnimation("images/Character1/femaleSkin1.png","images/Character1/femaleSkin2.png","images/Character1/femaleSkin3.png",
                           "images/Character1/femaleSkin4.png","images/Character1/femaleSkin5.png","images/Character1/femaleSkin6.png",
                           "images/Character1/femaleSkin7.png","images/Character1/femaleSkin8.png");
}

function setup(){
    createCanvas(1600,400);

    //background
    bg = createSprite(1300,0,1600,200);
    bg.scale = 0.8
    bg.velocityX = -5
    bg.addImage(bgImg);
}

function draw(){
    //background
    background("#C4EC9D");
    if(bg.x<70){
        bg.x=1500;
    }

    drawSprites();
}


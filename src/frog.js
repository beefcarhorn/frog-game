const app = new PIXI.Application({
    width: 1280, height: 720, backgroundColor: 0x42A1F5, resolution: 1
})
document.body.appendChild(app.view)

var title = document.getElementById("display")
title.innerHTML = "Frog Game"
title.style.color = "#009600"
title.style.position = "absolute"
title.style.top = "10px"

const frog = new PIXI.Sprite(PIXI.Texture.WHITE)
frog.tint = 0x009600
frog.width = 50
frog.height = 50
frog.x = 0
frog.y = 670
app.stage.addChild(frog)

var timer = Date.now()
const timerdisplay = new PIXI.Text((Date.now()-timer)/1000,{
fontFamily: 'Helvetica',

})

app.stage.addChild(timerdisplay)

var movingRight = false
var movingLeft = false
var movingUp = false
var timejumped = 0

var bottom = 670

var accelX = 0
var accelY = -20
var speedX = 0
var speedY = 0

var makeblock = (bx,by,bw=80,bh=80,bc=0xFFFFFF)=>{
    const block = new PIXI.Sprite(PIXI.Texture.WHITE)
    block.x = bx
    block.y = by
    block.width = bw
    block.height = bh
    block.tint = bc
    app.stage.addChild(block)

    blox.push(block)
}

var fakeblock = (bx,by,bw=80,bh=80,bc=0xFFFFFF)=>{
    const fblock = new PIXI.Sprite(PIXI.Texture.WHITE)
    fblock.x = bx
    fblock.y = by
    fblock.width = bw
    fblock.height = bh
    fblock.tint = bc
    app.stage.addChild(fblock)

    sox.push(fblock)
}

var dakeblock = (bx,by,bw=80,bh=80,bc=0xFFFFFF,findex)=>{
    const dblock = new PIXI.Sprite(PIXI.Texture.WHITE)
    dblock.x = bx
    dblock.y = by
    dblock.width = bw
    dblock.height = bh
    dblock.tint = bc
    dblock.key = findex
    app.stage.addChild(dblock)

    dox.push(dblock)
}

var blox = []
var sox = []
var dox = []

//bonkey level
// makeblock(500-80*2,640,80,80,0xC1FF00)
// makeblock(500-80,640-80,80,80*2,0xC1FF00)
// makeblock(500,640-80*2,80,80*3,0xC1FF00)
// makeblock(500+80,640-80*3,80,80*4,0xC1FF00)
// makeblock(500+2*80,640-80*4,80,80*5,0xC1FF00)
// makeblock(500+3*80,640-80*5,80,80*6,0xC1FF00)
// makeblock(500-80*3,640-80*2)
// makeblock(500-80*2,640-80*3)
// makeblock(500-80,640-80*4)
// makeblock(500,640-80*5)
// makeblock(500+80,640-80*6)

//level 1
makeblock(-70,30,80,640,0x534444)
makeblock(-80,0,80,720,0x534444)
makeblock(1280-12,0,80,720,0x534444)
makeblock(0,30,120,12,0x534444)
makeblock(120,0,12,42,0x534444)
makeblock(120,0,1280-120,12,0x534444)

makeblock(480,640,100,80,0x534444)
makeblock(500+80,640-80,80,80*2,0x534444)
makeblock(500+80*2,640,100,80,0x534444)

makeblock(500+80*6,640-80,80,30,0x534444)
makeblock(500+80*2,640-80*3,80*5,30,0x534444)
makeblock(500+80*1,640-80*4,80,110,0x534444)
makeblock(500+80*1,640-80*6.9,80,80,0x534444)
makeblock(500-20+80*3,640-80*5,40,10,0x534444)
makeblock(800,640-80*6,40,10,0x534444)
makeblock(1000,640-80*6,40,10,0x534444)
makeblock(1200,640-80*6,100,10,0x534444)

makeblock(500+80*8.75,640,80,30,0x534444)
makeblock(500+80*8.75,640-80*2,80,30,0x534444)

fakeblock(1225,120,20,20,0xFFD500)

makeblock(540,640-80*6.9,40,342,0x534444)
makeblock(300,640-80*3,80*3,30,0x534444)
makeblock(80,640-80*4,80*.5,30,0x534444)

makeblock(10,320,20,15,0x000000)
makeblock(30,320,20,15,0xFFFFFF)
makeblock(50,320,20,15,0x000000)
makeblock(70,320,20,15,0xFFFFFF)

makeblock(30,335,20,15,0x000000)
makeblock(10,335,20,15,0xFFFFFF)
makeblock(70,335,20,15,0x000000)
makeblock(50,335,20,15,0xFFFFFF)

dakeblock(200,12,20,418,0xC72700,sox[0])



window.addEventListener("keydown", function(e) {
   if (e.key == "ArrowRight"){movingRight = true}
   if (e.key == "ArrowLeft"){movingLeft = true}
   if (e.key == "ArrowUp"){if(movingUp == false){timejumped = Date.now()} ; movingUp = true}
})
// if(movingUp == false){timejumped = Date.now()}
window.addEventListener("keyup", function(e) {
    if (e.key == "ArrowRight"){movingRight = false}
    if (e.key == "ArrowLeft"){movingLeft = false}
    if (e.key == "ArrowUp"){movingUp = false ; timejumped = 0 ; canjumpy = true}
})

var canjumpy = true
// if (sox[1].x > 1280) {dblock[1] += 1300}
//console.log(sox[1])
app.ticker.add((delta) => {

    // bonkey level timer
    // if(frog.y < 670 && frog.y > 670-(80*6)){timerdisplay.text=((Date.now()-timer)/1000)}
    // else{timer = Date.now()}

    // level 1 timer
    if (frog.x > 0){timerdisplay.text=((Date.now()-timer)/1000)}
    else{timer = Date.now()}

    if (frog.x < 52 && frog.y < 335){timer = Date.now() ; frog.x = 0 ; frog.y = 670}

    // if (sox[1].x > 1280)
    // {dblock[1] += 1300}
//    if (fb.x != 1300){console.log("poop")}


    if (movingRight == movingLeft){speedX = 0}
    else {
        if (movingLeft){speedX = 50}
        if (movingRight){speedX = -50}
    }
    
    frog.x -= speedX * delta * 0.2
    speedX += accelX * delta * 0.2
    frog.y -= speedY * delta * 0.2
    speedY += accelY * delta * 0.2

    if (frog.y > bottom && speedY < 0){speedY = 0; frog.y = bottom}
    if (movingUp && frog.y == bottom){jumpy()}



    blox.forEach(b => {
        wis(b)
    });

    sox.forEach(fb => {
        nowis(fb)
    });

   dox.forEach(db => {
       lois(db)
   });

    // if (frog.x > realblock.x + realblock.width){speedX = 0}
})

var jumpy = ()=>{
    if (canjumpy == true){speedY = 68 ; timejumped = Date.now()}

    if ((Date.now()-timejumped) < 500){canjumpy = false}
    else {canjumpy = true}
    //console.log(Date.now()-timejumped)
}

var wis = (block)=>{
    var blockright = Math.abs(frog.x - block.x - block.width)
    var blockleft = Math.abs(frog.x + frog.width - block.x)
    var blockbottom = Math.abs(frog.y - block.y - block.height)
    var blocktop = Math.abs(frog.y + frog.width - block.y)
    var sidez = [blockright, blockleft, blockbottom, blocktop]
    
    var mincollision = 0
    if (blockleft < sidez[mincollision]){mincollision = 1}
    if (blockbottom < sidez[mincollision]){mincollision = 2}
    if (blocktop < sidez[mincollision]){mincollision = 3}

    
    if (frog.x < block.x + block.width &&
        frog.x + frog.width > block.x &&
        frog.y < block.y + block.height &&
        frog.y + frog.width > block.y)
        
        {
            if (mincollision == 0){frog.x = block.x + block.width}
            if (mincollision == 1){frog.x = block.x - frog.width}
            if (mincollision == 2){frog.y = block.y + block.height ; if (speedY > 0){speedY = -(0.5 * speedY)}}
            if (mincollision == 3){frog.y = block.y - frog.height ; if (speedY < 0){speedY = 0} ; if (speedY == 0 && movingUp){jumpy()}}
        }
}

var nowis = (fblock)=>{
    
    if (frog.x < fblock.x + fblock.width &&
        frog.x + frog.width > fblock.x &&
        frog.y < fblock.y + fblock.height &&
        frog.y + frog.width > fblock.y)
        {fblock.x = 1300}
}

var lois = (dblock)=>{
    var blockright = Math.abs(frog.x - dblock.x - dblock.width)
    var blockleft = Math.abs(frog.x + frog.width - dblock.x)
    var blockbottom = Math.abs(frog.y - dblock.y - dblock.height)
    var blocktop = Math.abs(frog.y + frog.width - dblock.y)
    var sidez = [blockright, blockleft, blockbottom, blocktop]
    
    var mincollision = 0
    if (blockleft < sidez[mincollision]){mincollision = 1}
    if (blockbottom < sidez[mincollision]){mincollision = 2}
    if (blocktop < sidez[mincollision]){mincollision = 3}

    if (frog.x < dblock.x + dblock.width &&
        frog.x + frog.width > dblock.x &&
        frog.y < dblock.y + dblock.height &&
        frog.y + frog.width > dblock.y
        )
        {
            if (mincollision == 0){frog.x = dblock.x + dblock.width}
            if (mincollision == 1){frog.x = dblock.x - frog.width}
            if (mincollision == 2){frog.y = dblock.y + dblock.height ; if (speedY > 0){speedY = -(0.5 * speedY)}}
            if (mincollision == 3){frog.y = dblock.y - frog.height ; if (speedY < 0){speedY = 0} ; if (speedY == 0 && movingUp){jumpy()}}
        }
    else if (dblock.key.x > 1280)   {dblock.x = 1300}
    
}

var loadlevel1 = ()=>{}
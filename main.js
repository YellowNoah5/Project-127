song1 = 0
song2 = 0

function preload() 
{
 song1 = loadSound("music.mp3")
 song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(700, 600)
    canvas.position(600,300)

    video = createCapture(VIDEO)
    video.hide()
}

function draw() 
{
    image(video, 0,0, 700, 600)
}
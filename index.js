const canvas = document.querySelector('canvas');
canvas.width = innerWidth
canvas.height = innerHeight

let mouseDown = false
canvas.addEventListener("mousemove", function (e) {
	if(mouseDown){
		handleMouseMove(e)
	}
}, false);
canvas.addEventListener("mousedown", function (e) {
	mouseDown = true
}, false);
canvas.addEventListener("mouseup", function (e) {
	mouseDown = false
}, false);

function redrawRandTiles(box, n){
	for( let i = 0; i < n; i++){
		x = Math.floor(Math.random() * box.sandWidth)
		y = Math.floor(Math.random() * box.sandHeight)
		box.changeHeight(x,y, 255-x-y)
	}
	box.drawChanged()
}

function handleMouseMove(e){
	x = Math.floor(e.clientX / box.tileSize)
	y = Math.floor(e.clientY / box.tileSize)
	box.changeHeight(x,y, 0)
	box.drawChanged()
}

let box = new sandbox(canvas)
box.drawAll()
redrawRandTiles(box,50)














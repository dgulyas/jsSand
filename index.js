const canvas = document.querySelector('canvas');
canvas.width = innerWidth
canvas.height = innerHeight

class sandbox {
	constructor(canvas){
		this.c = canvas.getContext('2d')
		this.tileSize = 4
		this.sandWidth = Math.floor(canvas.width / this.tileSize)
		this.sandHeight = Math.floor(canvas.height / this.tileSize)
		this.sand = Array(this.sandWidth).fill(null).map(() => Array(this.sandHeight))
		this.initSand(this.sand)
		this.tilesToRedraw = new Set()
	}

	initSand(sand){
		for(var x = 0; x < sand.length; x++){
			for(var y = 0; y < sand[x].length; y++){
				this.sand[x][y] = x+y
			}
		}
	}

	drawAll(){
		for(var x = 0; x < this.sandWidth; x++){
			for(var y = 0; y < this.sandHeight; y++){
				this.drawRect(x, y)
			}
		}
	}

	drawChanged(){
		this.tilesToRedraw.forEach( e => {
			this.drawRect(e[0], e[1])
		})
		this.tilesToRedraw.clear()
	}

	drawRect(x, y){
		let v = this.sand[x][y]
		this.c.fillStyle = 'rgb(' + v + ',' + v + ',' + v + ')';
		this.c.fillRect(x*this.tileSize, y*this.tileSize, this.tileSize, this.tileSize)
	}

	changeHeight(x, y, newHeight){
		this.sand[x][y] = newHeight
		this.tilesToRedraw.add([x,y])
	}
}

function redrawRandTiles(box, n){
	for( var i = 0; i < n; i++){
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

var mouseDown = false
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

let box = new sandbox(canvas)
box.drawAll()
redrawRandTiles(box,50)






















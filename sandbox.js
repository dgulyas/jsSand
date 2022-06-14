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
		for(let x = 0; x < sand.length; x++){
			for(let y = 0; y < sand[x].length; y++){
				this.sand[x][y] = x+y
			}
		}
	}

	drawAll(){
		for(let x = 0; x < this.sandWidth; x++){
			for(let y = 0; y < this.sandHeight; y++){
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
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
const tileSize = 5

sand = Array(Math.floor(canvas.width / tileSize)).fill(null)
	.map(() => Array(Math.floor(canvas.height / tileSize)))

function initSand(){
	for(var x = 0; x < sand.length; x++){
		for(var y = 0; y < sand[x].length; y++){
			sand[x][y] = x+y
		}
	}
}

function drawRect(c, x, y){
	v = sand[x][y]
	c.fillStyle = 'rgb(' + v + ',' + v + ',' + v + ')';
	c.fillRect(x*tileSize, y*tileSize, tileSize, tileSize)
}

function colorCanvas(c) {
	for(var x = 0; x < sand.length; x++){
		for(var y = 0; y < sand[x].length; y++){
			drawRect(c, x, y)
		}
	}
}

initSand()
var start = new Date();
colorCanvas(ctx)
var end = new Date();
var millisecondsElapsed = end - start;
console.log('elapsedMS:' + millisecondsElapsed)
console.log(innerWidth/tileSize * innerHeight/tileSize)































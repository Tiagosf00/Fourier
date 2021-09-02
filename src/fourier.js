let time = 0;
let onda = [];
let raio = 150;
let type = "Quadrada";
let n = 10; // Número de aproximações

function setup()
{
	createCanvas(1600,900);
}

function changeType(newType) {
	type = newType;
}

function changeApprox() {
	var newApprox = document.getElementById("approximation").value;
	if (newApprox == null || newApprox == "") {
		n = 1;
	} else {
		n = newApprox;
	}
}

function draw()
{
	background(0);

	translate(500,350);
	let x = 0;
	let y = 0;

	changeApprox();
	
	for(let i=1;i<=2*n;i+=2) {
		let antx=x;
		let anty=y;

		[x, y] = move(x, y, i)

		stroke(255, 100);
		noFill();
		ellipse(antx, anty, 2*raio/i)

		stroke(255);
		line(antx, anty, x, y);
	}
	onda.unshift(y);

	translate(500,0);
	beginShape();
	noFill();
	for(let i=0;i<onda.length;i++)
		vertex(i, onda[i]);
	endShape();

	line(x-500,y,0,onda[0]);

	if(onda.length>500)
		onda.pop();

	time += 0.02;
}

function move(x, y, i) {
	if (type == "Quadrada") {
		x += raio/i * cos(i*time);
		y += raio/i * sin(i*time);
	} else if (type == "Triangular") {
		x += raio/(i*i) * cos(i*time) * cos(i*time);
		y += raio/(i*i) * sin(i*time) * sin(i*time);
	} else if (type == "Serra") {
		let j = ceil(i/2);
		x += raio/(2*j) * cos(j*time) * Math.pow(-1,j+1);
		y += raio/(2*j) * sin(j*time) * Math.pow(-1,j+1);
	}

	return [x, y]
}

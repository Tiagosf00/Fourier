let time = 0;
let onda = [];

function setup()
{
	createCanvas(1500,1200);
}

function draw()
{
	background(0);

	translate(500,350);
	let raio = 150;
	let n = 5; // Número de aproximações
	let x = 0;
	let y = 0;
	
	for(let i=1;i<=2*n;i+=2)
	{
		let antx=x;
		let anty=y;

		x += raio/i * cos(i*time);
		y += raio/i * sin(i*time);

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

	if(onda.length>1100)
		onda.pop();

	time += 0.02;
}

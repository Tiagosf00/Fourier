let time = 0;
let onda = [];

function setup()
{
	createCanvas(1200,700);
}

function draw()
{
	background(0);

	translate(300,350);
	let raio = 150;
	let n = 1000;  // Número de aproximações
	let x = 0;
	let y = 0;
	
	for(let i=1;i<=n;i++)
	{
		let antx=x;
		let anty=y;

		x += raio/i * cos(i*time) * Math.pow(-1,i+1);
		y += raio/i * sin(i*time) * Math.pow(-1,i+1);

		stroke(255, 100);
		noFill();
		ellipse(antx, anty, 2*raio/i)

		stroke(255);
		line(antx, anty, x, y);
		//ellipse(x, y, 5);

	}
	onda.unshift(y);

	translate(300,0);
	beginShape();
	noFill();
	for(let i=0;i<onda.length;i++)
		vertex(i, onda[i]);
	endShape();

	line(x-300,y,0,onda[0]);

	if(onda.length>500)
		onda.pop();

	time += 0.02;
}

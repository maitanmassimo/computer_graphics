function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2
	
	// Here there are a few random lines, you will have to replace with your code
	line(-0.5,0.3, 0.3, 0.3);
	line(-0.5,-0.3, 0.3, -0.3);
	line(-0.5,-0.3, -0.5,0.3);
	
	for(i = 0; i < 64; i++){ //draw 64 little lines between the i-th point and i-1-th point with i from 0 to 64
		
		line(0.3+0.3*Math.sin(Math.PI*(64-i)/64), //each point is computed to be on the semi-circumference of ray 3 and centre in (0.3, 0)
			0.3*Math.cos(Math.PI*(64-i)/64),
			0.3+0.3*Math.sin(Math.PI*(64-i-1)/64),
			0.3*Math.cos(Math.PI*(64-i-1)/64)		
		);
	} 	
}

function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[-2.0, -2.0, 0.0], [-2.0,4.0, 0.0], [2.0, 4.0, 0.0], [2.0, 3.0, 0.0], [-0.5, 3.0, 0.0], [-0.5, 2.0, 0.0], [2.0, 2.0, 0.0], [2.0, 1.0, 0.0], [-0.5, 1.0, 0.0], [-0.5, -2.0, 0.0]];
	
	addMesh(vert1, "O", [1.0, 0.0, 0.0]); //O-> line loops


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[-2.0,-3.0,0.0],[-2.0,-2.0, 0.0], [2.0, -3.0, 0.0], [1.0, -2.0, 0.0], [2.0, -2.0, 0.0], [1.0, -1.0, 0.0], [2.0, 0.0, 0.0], [-2.0, -1.0,0.0], [-1.0, 0.0,0.0], [-2.0, 2.0, 0.0], [-1.0, 1.0, 0.0], [2.0, 2.0, 0.0], [2.0, 1.0, 0.0]];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]); //S-> triangle strips


	// Draws a filled pentacong (replace the vertices and primitive type)
	
	var scale = 3;

	//while in the previous points of the assignment I just chose manually the points, here
	//in order to draw a nice Pentagon, I computed the verteces of the triangles as 5 equidistant points on a 
	//circumference centred in 0, each one forming with the adjacent one a "slice" with central angle 360/5=72 degs
	var vert3 = [[0.0,0.0, 0.0], 
			[Math.sin(utils.degToRad(72/2))*scale,-Math.cos(utils.degToRad(72/2))*scale, 0.0],
			[-Math.sin(utils.degToRad(72/2))*scale,-Math.cos(utils.degToRad(72/2))*scale, 0.0],
			[Math.sin(utils.degToRad(-3*72/2))*scale, -Math.cos(utils.degToRad(-3*72/2))*scale, 0.0],  
			[0.0, scale, 0.0], 
			[-Math.sin(utils.degToRad(-3*72/2))*scale, -Math.cos(utils.degToRad(-3*72/2))*scale, 0.0], 
			[Math.sin(utils.degToRad(72/2))*scale,-Math.cos(utils.degToRad(72/2))*scale, 0.0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]); //F-> triangle fan
	
}
function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	var w = 50;
	var a = 16/9;
	var n = 1;
	var	f = 101
	var A1_1 =  [1/w,	0.0,		0.0,		0.0,
			   0.0,		a/w,		0.0,		0.0,
			   0.0,		0.0,		-2/(f-n), -(f+n)/(f-n),
			   0.0,		0.0,		0.0,		1.0];
			   
	var angle1_1 = utils.degToRad(-35.26);
	
	var A1_2 = [1,	0.0,		0.0,		0.0,
			   0.0,		Math.cos(angle1_1),		Math.sin(angle1_1),		0.0,
			   0.0,		-Math.sin(angle1_1),		Math.cos(angle1_1),		0.0,
			   0.0,		0.0,		0.0,		1.0];
	var angle1_2 = utils.degToRad(45);
	var A1_3 = [Math.cos(angle1_2),	0.0,		Math.sin(angle1_2),		0.0,
			   0.0,		1,		0.0,		0.0,
			   -Math.sin(angle1_2),		0.0,		Math.cos(angle1_2),		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	var A1 = utils.multiplyMatrices(utils.multiplyMatrices(A1_1, A1_2), A1_3);
	
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	
			   
	var angle2_2 = utils.degToRad(-20);
	
	var A2_2 = [1,	0.0,		0.0,		0.0,
			   0.0,		Math.cos(angle2_2),		Math.sin(angle2_2),		0.0,
			   0.0,		-Math.sin(angle2_2),		Math.cos(angle2_2),		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	var A2 = utils.multiplyMatrices(utils.multiplyMatrices(A1_1, A2_2), A1_3);		   
			   
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis		   
	
	var angle3_1 = utils.degToRad(30);
	var A3_2 = [1,	0.0,		0.0,		0.0,
			   0.0,		Math.cos(angle3_1),		Math.sin(angle3_1),		0.0,
			   0.0,		-Math.sin(angle3_1),		Math.cos(angle3_1),		0.0,
			   0.0,		0.0,		0.0,		1.0]; 
			   
	var angle3_2= utils.degToRad(30);		   
	
	var A3_3 = [Math.cos(angle3_2),	0.0,		Math.sin(angle3_2),		0.0,
			   0.0,		1,		0.0,		0.0,
			   -Math.sin(angle3_2),		0.0,		Math.cos(angle3_2),		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	var A3 = utils.multiplyMatrices(utils.multiplyMatrices(A1_1, A3_2), A3_3);		  		   

			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	
	var rho = 1;
	var alpha = utils.degToRad(45);
	var O1_1 =  [1,	0.0,		-rho*Math.cos(alpha)	,		0.0,
			   0.0,		1,			-rho*Math.sin(alpha),		0.0,
			   0.0,		0.0,		1, 		0.0,
			   0.0,		0.0,		0.0,		1.0];
	var O1 =  utils.multiplyMatrices(A1_1, O1_1);
	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	
	rho = 0.5;
	alpha = utils.degToRad(60);
	var O2_1 =  [1,	0.0,		-rho*Math.cos(alpha)	,		0.0,
			   0.0,		1,			-rho*Math.sin(alpha),		0.0,
			   0.0,		0.0,		1, 		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	var O2 =  utils.multiplyMatrices(A1_1, O2_1);

	return [A1, A2, A3, O1, O2];
}
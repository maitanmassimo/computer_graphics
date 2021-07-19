function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	
	var dx = 0;
	var dy = 0;
	var dz = -3;
	
	var T = [1.0, 0.0, 0.0, dx,
			   0.0, 1.0, 0.0, dy,
			   0.0, 0.0, 1.0, dz,
			   0.0, 0.0, 0.0, 1.0];
			   
	var yaw = utils.degToRad(90);		   
	
	var R_yaw = [Math.cos(yaw), 0.0, Math.sin(yaw), 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   -Math.sin(yaw), 0.0, Math.cos(yaw), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		   
			   
	var A1 =  utils.multiplyMatrices(T, R_yaw);
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	
	dx = 0;
	dy = 2;
	dz = 0;
	
	var pitch = utils.degToRad(60);
	var scale_factor_x = 0.1;
	var scale_factor_y = 0.1;
	var scale_factor_z = 0.1;
	
	T = [1.0, 0.0, 0.0, dx,
			   0.0, 1.0, 0.0, dy,
			   0.0, 0.0, 1.0, dz,
			   0.0, 0.0, 0.0, 1.0];
			   
	var R_pitch = [1.0, 0.0, 0.0, 0.0,
			   0.0, Math.cos(pitch), -Math.sin(pitch), 0.0,
				0.0,  Math.sin(pitch), Math.cos(pitch), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		   
			   
	var S =  [scale_factor_x, 0.0, 0.0, 0.0,
			   0.0, scale_factor_y, 0.0, 0.0,
			   0.0, 0.0, scale_factor_z, 0.0,
			   0.0, 0.0, 0.0, 1.0];		   
			   
			   
	var A2 =  utils.multiplyMatrices(T, utils.multiplyMatrices(R_pitch, S));
			   
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	
	yaw = utils.degToRad(30);
	var roll = utils.degToRad(45);
	
	R_yaw = [Math.cos(yaw), 0.0, Math.sin(yaw), 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   -Math.sin(yaw), 0.0, Math.cos(yaw), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		 
			   
	var R_roll = [Math.cos(roll), -Math.sin(roll), 0.0, 0.0,
			   Math.sin(roll), Math.cos(roll), 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	var A3 = utils.multiplyMatrices(R_yaw, R_roll);
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	
	dx = 2;
	dy = 0;
	dz = 2;
	
	yaw = utils.degToRad(180);
	
	scale_factor_x = 2;
	scale_factor_y = 1;
	scale_factor_z = 1;
	
	T = [1.0, 0.0, 0.0, dx,
			   0.0, 1.0, 0.0, dy,
			   0.0, 0.0, 1.0, dz,
			   0.0, 0.0, 0.0, 1.0];
			   
	R_yaw = [Math.cos(yaw), 0.0, Math.sin(yaw), 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   -Math.sin(yaw), 0.0, Math.cos(yaw), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		
	
	S =  [scale_factor_x, 0.0, 0.0, 0.0,
			   0.0, scale_factor_y, 0.0, 0.0,
			   0.0, 0.0, scale_factor_z, 0.0,
			   0.0, 0.0, 0.0, 1.0];		   
			   
	var A4  = utils.multiplyMatrices(T, utils.multiplyMatrices(R_yaw, S));

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	
	dx = 1;
	dy = -1;
	dz = 2.5;
	
	yaw = utils.degToRad(-30);
	pitch = utils.degToRad(45);
	roll = utils.degToRad(-15);
	
	scale_factor_x = 0.8;
	scale_factor_y = 0.75;
	scale_factor_z = 1.2;
	
	T = [1.0, 0.0, 0.0, dx,
			   0.0, 1.0, 0.0, dy,
			   0.0, 0.0, 1.0, dz,
			   0.0, 0.0, 0.0, 1.0];
	
	R_pitch = [1.0, 0.0, 0.0, 0.0,
			   0.0, Math.cos(pitch), -Math.sin(pitch), 0.0,
				0.0,  Math.sin(pitch), Math.cos(pitch), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		   
			   
	R_yaw = [Math.cos(yaw), 0.0, Math.sin(yaw), 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   -Math.sin(yaw), 0.0, Math.cos(yaw), 0.0,
			   0.0, 0.0, 0.0, 1.0]; 		
			   
	R_roll = [Math.cos(roll), -Math.sin(roll), 0.0, 0.0,
			   Math.sin(roll), Math.cos(roll), 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	S =  [scale_factor_x, 0.0, 0.0, 0.0,
			   0.0, scale_factor_y, 0.0, 0.0,
			   0.0, 0.0, scale_factor_z, 0.0,
			   0.0, 0.0, 0.0, 1.0];		  
			   
	var A5 =  utils.multiplyMatrices(T, 
						utils.multiplyMatrices(R_yaw,
							utils.multiplyMatrices(R_pitch,
								utils.multiplyMatrices(R_roll, S))));

	return [A1, A2, A3, A4, A5];
}
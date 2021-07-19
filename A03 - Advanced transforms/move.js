function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	
	var T_1 = utils.MakeTranslateMatrix(0, 1, -1);
	var Ry_1 = utils.MakeRotateYMatrix(15);
	var Rz_1 = utils.MakeRotateZMatrix(45);
	var inv_T_1 = utils.invertMatrix(T_1);
	var inv_Ry_1 = utils.invertMatrix(Ry_1);
	var inv_Rz_1 = utils.invertMatrix(Rz_1);
	var Rx_1 = utils.MakeRotateXMatrix(60);
	
	/*var R1 =[1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];	*/
	var R1 = utils.multiplyMatrices(
						utils.multiplyMatrices(
							utils.multiplyMatrices(
								utils.multiplyMatrices(
									utils.multiplyMatrices(
										utils.multiplyMatrices(T_1, Ry_1), Rz_1), Rx_1), inv_Rz_1), inv_Ry_1), inv_T_1);
	
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var T_2 = utils.MakeTranslateMatrix(1, 1, 0);
	var inv_T_2 = utils.invertMatrix(T_2);
	var S_2 = utils.MakeScaleNuMatrix(0.5, 1, 1);
	var Rz_2 = utils.MakeRotateZMatrix(45);
	var inv_Rz_2 = utils.invertMatrix(Rz_2);
	
	/*var S1 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];*/
	
	var S1 = utils.multiplyMatrices(
							utils.multiplyMatrices(Rz_2, S_2), inv_Rz_2);
						
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	
	var T_3 = utils.MakeTranslateMatrix(1, 1, 1);
	var inv_T_3 = utils.invertMatrix(T_3);
	var S_3 = utils.MakeScaleNuMatrix(1, -1, 1);
	var Rx_3 = utils.MakeRotateXMatrix(15);
	var inv_Rx_3 = utils.invertMatrix(Rx_3);
	
	/*var S2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];*/
			   
	var S2 = utils.multiplyMatrices(
					utils.multiplyMatrices(
						utils.multiplyMatrices(
							utils.multiplyMatrices(T_3, Rx_3), S_3), inv_Rx_3), inv_T_3);
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	
	
	var Ry_4 = utils.MakeRotateYMatrix(30);
	var T_4 = utils.MakeTranslateMatrix(0, 0, 5);
	var inv_Ry_4 = utils.invertMatrix(Ry_4);
	var inv_T_4 = utils.invertMatrix(T_4);
	var S_4 = utils.MakeScaleMatrix(3);
	
	var I1 = utils.invertMatrix(
					utils.multiplyMatrices(
						utils.multiplyMatrices(S_4, T_4), Ry_4));
	
	/*
	var I1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];*/

	return [R1, S1, S2, I1];
}


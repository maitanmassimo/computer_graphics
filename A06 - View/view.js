function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.

	var T1 = utils.MakeTranslateMatrix(-5, -2.5, -0);
	var Rx1 = utils.MakeRotateXMatrix(30);
	var Ry1 = utils.MakeRotateYMatrix(-90);
	var A1 = utils.multiplyMatrices(utils.multiplyMatrices(Rx1, Ry1), T1);

	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.

	var T2 = utils.MakeTranslateMatrix(0, 1, 5);
	var Rx2 = utils.MakeRotateXMatrix(-15);
	var Ry2 = utils.MakeRotateYMatrix(-170);
	var Rz2 = utils.MakeRotateZMatrix(-45);

	var A2 = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(Rz2, Rx2), Ry2), T2);

	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).

	var cx = -4;
	var cy = 2;
	var cz = -4;

	var ax = 0;
	var ay = 0.5;
	var az = 0.5;

	var ux = 0;
	var uy = 1;
	var uz = 0;

	var u = [ux, uy, uz];

	var v_z_norm = Math.sqrt(Math.pow(cx - ax, 2) + Math.pow(cy - ay, 2) + Math.pow(cz - az, 2));  //compute the norm of the distance vector

	var v_z = [(cx - ax) / v_z_norm, (cy - ay) / v_z_norm, (cz - az) / v_z_norm]; //normalize the distance vector

	var v_x = utils.crossVector(u, v_z); //computes the new x axis as crossproduct between the up vector and the distance vector

	var v_x_norm = Math.sqrt(Math.pow(v_x[0], 2) + Math.pow(v_x[1], 2) + Math.pow(v_x[2], 2));

	v_x = [v_x[0] / v_x_norm, v_x[1] / v_x_norm, v_x[2] / v_x_norm]; //normalize the new x-axis vector

	var v_y = utils.crossVector(v_z, v_x); //compute the new y axis

	var M = [v_x[0], v_y[0], v_z[0], cx, //compute camera matrix
	v_x[1], v_y[1], v_z[1], cy,
	v_x[2], v_y[2], v_z[2], cz,
		0.0, 0.0, 0.0, 1];

	var A3 = utils.invertMatrix(M); //compute view matrix

	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).

	cx = 2.57;
	cy = 0;
	cz = 0;

	ax = 2.8;
	ay = 0;
	az = -1;

	ux = 1;
	uy = 0;
	uz = 0;

	u = [ux, uy, uz]; //up vector

	v_z_norm = Math.sqrt(Math.pow(cx - ax, 2) + Math.pow(cy - ay, 2) + Math.pow(cz - az, 2)); //compute the norm of the distance vector

	v_z = [(cx - ax) / v_z_norm, (cy - ay) / v_z_norm, (cz - az) / v_z_norm]; //normalize the distance vector

	v_x = utils.crossVector(u, v_z);  //computes the new x axis as crossproduct between the up vector and the distance vector

	v_x_norm = Math.sqrt(Math.pow(v_x[0], 2) + Math.pow(v_x[1], 2) + Math.pow(v_x[2], 2));

	v_x = [v_x[0] / v_x_norm, v_x[1] / v_x_norm, v_x[2] / v_x_norm]; //normalize the x-axis vector

	v_y = utils.crossVector(v_z, v_x); //compute the new y axis

	//compute camera matrix
	M = [v_x[0], v_y[0], v_z[0], cx,
		v_x[1], v_y[1], v_z[1], cy,
		v_x[2], v_y[2], v_z[2], cz,
		0.0, 0.0, 0.0, 1]; 

	var A4 = utils.invertMatrix(M); //return view matrix



	return [A1, A2, A3, A4];
}
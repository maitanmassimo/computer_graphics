// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
				tx1, ty1, tz1, rx1, ry1, rz1,
			    tx2, ty2, tz2, rx2, ry2, rz2,
			    a) {
	// tx1, ty1, tz1	-> Initial position
	// rx1, ry1, rz1	-> Initial rotation (in Euler angles)
	// tx2, ty2, tz2	-> Final position
	// rx2, ry2, rz2	-> Final rotation (in Euler angles)
	// a (in 0..1 range)	-> Interpolation coefficient
	//
	// return the interpolated transform matrix with the given position and rotation


	let delta_x = (1-a)*tx1 +a*tx2; //interpolate the positions
	let delta_y = (1-a)*ty1 +a*ty2;
	let delta_z = (1-a)*tz1 +a*tz2;
	
	let quat_1 = new Quaternion();
	quat_1 = Quaternion.fromEuler(utils.degToRad(rz1), utils.degToRad(rx1), utils.degToRad(ry1),  'ZXY'); //encode the rotation of first pose in a quaternion
	
	let quat_2 = new Quaternion();
	quat_2 = Quaternion.fromEuler(utils.degToRad(rz2), utils.degToRad(rx2), utils.degToRad(ry2),  'ZXY');//encode the rotation of first pose in a quaternion
	
	
	//trial with slerp technique
	//let theta = 2*Math.acos(quat_1.w*quat_2.w+ quat_1.x*quat_2.x+quat_1.y*quat_2.y+quat_1.z*quat_2.z);
	//let quat_1_b = quat_1.scale(Math.sin(theta*(1-a)/Math.sin(theta)));
	//let quat_2_b = quat_2.scale(Math.sin(theta*a/Math.sin(theta)));

	//interpolate the quaternions
	let quat_1_b = quat_1.scale(1-a); 
	let quat_2_b = quat_2.scale(a);
	let quat_interp = new Quaternion();
	quat_interp =  (quat_1_b.add(quat_2_b)).normalize();
	
	//the transformation matrix is the product between the translation matrix computed with interpolated points and the rotation matrix retrieved
	//the interpolated quaternion
	out = utils.multiplyMatrices(utils.MakeTranslateMatrix(delta_x, delta_y, delta_z),quat_interp.toMatrix4(false));
	
	return out;			   
}


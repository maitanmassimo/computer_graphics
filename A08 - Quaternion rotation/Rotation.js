// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

Pitch = 0;
Yaw = 0;
Roll = 0;

var deltaDeg = utils.degToRad(0.5);

var globQuaternion = new Quaternion(); // new!

function updateWorld(rvx, rvy, rvz) {

	//compute the quaternion for the small rotation
	var deltaQuaternion = new Quaternion(Math.cos(deltaDeg/2), Math.sin(deltaDeg/2)*rvx, Math.sin(deltaDeg/2)*rvy, Math.sin(deltaDeg/2)*rvz); 
	
	//update global quaternion
	globQuaternion = deltaQuaternion.mul(globQuaternion);
	
	var out = globQuaternion.toMatrix4(false);
	
	return out;
}

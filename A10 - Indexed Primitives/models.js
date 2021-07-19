function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function buildGeometry() {
	var i;
	
	var DIM = 50; //how many points we want to sample in each direction from the origin. 
	var NORMAL_FACTOR = 3; // because we want our model to be between -3 and 3
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices
	
	
	var vert2 = [];
	for( i = -DIM; i <= DIM; i++){				//we "sample" a grid of 2DIM x 2DIM verteces from the function and put them in the vert2 array
		for(j = -DIM; j <= DIM; j++){			
			x = i*NORMAL_FACTOR/DIM;
			z = j*NORMAL_FACTOR/DIM;
			y = Math.cos(x)*Math.sin(z);		
			vert2[(i+DIM)*2*DIM+(i+DIM)+(j+DIM)] = [x, y, z];			
		}
	}
	
	////// Creates indices for the triangle list
	var ind2 = [];
	for(i = 0; i < 2*DIM; i++) {
		for(j = 0; j < 2*DIM; j++) {

			//here is the reasoining: starting from the first vertex, we draw triangles 
			//first triangle: two verteces on the left column, 1 vertex on the right column
			ind2[6*(i*2*DIM+j)  ] = (2*DIM+1)*j+i;					
			ind2[6*(i*2*DIM+j)+1] = (2*DIM+1)*j+i+1;			
			ind2[6*(i*2*DIM+j)+2] = (2*DIM+1)*(j+1)+i+1;	
			
			//second triangle: two verteces on the right column, 1 vertex on the left column

			ind2[6*(i*2*DIM+j)+3] = (2*DIM+1)*j+i;
			ind2[6*(i*2*DIM+j)+4] = (2*DIM+1)*(j+1)+i+1;
			ind2[6*(i*2*DIM+j)+5] = (2*DIM+1)*(j+1)+i;

			//with these two adjacent triangles we have drawn a little square between 4 verteces. 
			//With the for on j we are shifting" this "window-computation" on one direction, and with the i for on the other one
		}
	}
	
	console.log(vert2)
	console.log(ind2);
	
	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);


	// Draws a Half Sphere
	///// Creates vertices
	
	var SPHERE_RAY = 2;
	
	var circumf_quantum = 180;
	var ray_quantum = 180;
	var current_angle = 0;
	var vert3 = [];
	

	//with this algorithm we are sampling "circumf_quantum" points on "ray_quantum" circumferences, that will be used to draw the half sphere
	for(i = ray_quantum; i >= 0; i--) { //starting from outer cimcunference
		for(j = 0 ; j < circumf_quantum; j++) { //starting from the point at angle 0 and incrementing the angle
			current_angle = (2*Math.PI*j/circumf_quantum);
			console.log("ray "+ i*SPHERE_RAY/ray_quantum + ", angle " + (current_angle*180/(Math.PI)));

			//compute x and z of the sampled point with trigonometric functions
			x = ((i*SPHERE_RAY*Math.cos(current_angle))/ray_quantum).toFixed(3);
			z = ((i*SPHERE_RAY*Math.sin(current_angle))/ray_quantum).toFixed(3);

			/*
			Outputs for debug purposes
			console.log( "i = " + i + ", j = " + j + ", x = "+ x +", z = " + z);
			console.log("(" + SPHERE_RAY + ")^2 - " + x + "^2 - "+z+ "^2 = " + 
								(Math.pow((SPHERE_RAY),2)) + " - " + (Math.pow(x,2)) + " - " +(Math.pow(z,2))+" = "						
								+	(Math.pow((SPHERE_RAY),2)-Math.pow(x,2)-Math.pow(z,2)).toFixed(2)					
			);
			console.log( "x^2 +z^2 +y^2= " + (Math.pow(x, 2)+Math.pow(z,2) +Math.pow(y,2)));*/				
			
			//compute the y coordinate using the equation of the sphere
			y = Math.sqrt((Math.pow((SPHERE_RAY),2)-Math.pow(x,2)-Math.pow(z,2)).toFixed(2));
			
			vert3[(ray_quantum-i)*circumf_quantum+j] = [x, y, z]; //Store the point in the vertex array
		}
	}
	
	console.log(vert3);
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < ray_quantum; i++)  { //do some math to retrieve the order of the points
		//the rationale is similar to the one used in the previous point: starting from the outer circumference we draw all the triangles
		//in between that circumference and the inner adjacent one with the order: 
		//triangle 1: two points on the outer circumference, one on the inner one 
		//triangle 2: two points on the inner circumference, one on the outer one 
		//result: a little square!
		for(j = 0 ; j < circumf_quantum; j++)  {
			ind3[6*(i*circumf_quantum+j)  ] = (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum);					
			ind3[6*(i*circumf_quantum+j)+1] = j+(circumf_quantum)*i;			
			ind3[6*(i*circumf_quantum+j)+2] = (circumf_quantum)*(i+1)+j;	
			ind3[6*(i*circumf_quantum+j)+3] =  (circumf_quantum)*(i+1)+j;	
			ind3[6*(i*circumf_quantum+j)+4] = ((circumf_quantum)*(i+1)+j+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum);	
			ind3[6*(i*circumf_quantum+j)+5] = (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/(circumf_quantum))*circumf_quantum);
		}
		
	}
	
	
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}


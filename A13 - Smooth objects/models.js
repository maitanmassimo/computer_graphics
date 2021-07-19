var crossProduct = function (a, b) {
		var vec3 = new Array(3);
		vec3[0] = a[1] * b[2] - a[2] * b[1];
		vec3[1] = a[2] * b[0] - a[0] * b[2];
		vec3[2] = a[0] * b[1] - a[1] * b[0];
    return vec3;
  }
  
 var normalize = function (a) {
    var vec3 = new Array(3);
    var len = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      vec3[0] = len * a[0];
      vec3[1] = len * a[1];
      vec3[2] = len * a[2];
    }
    return vec3;
  }
  
 function round(value, decimals) {
  var a = Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  if(isNaN(a)) return 0;
	else return a;
}

function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
				
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0,-1.0, -1.0, 0.0, -1.0, 0.0], //0
					    [-1.0,-1.0, 1.0, 0.0, -1.0, 0.0], //1
						[1.0,-1.0, -1.0, 0.0, -1.0, 0.0], //2 - FRONT
						[1.0,-1.0, 1.0, 0.0, -1.0, 0.0], //3 - FRONT
						
						[1.0,-1.0, -1.0, 1.0, 0.0, 0.0], //2 - RIGHT -> 4
						[1.0,-1.0, 1.0, 1.0, 0.0, 0.0], //3 - RIGHT -> 5
						[1.0, 1.0, 1.0, 1.0, 0.0, 0.0],//4 - RIGHT->6
						
						[1.0,-1.0, 1.0, 0.0, 0.0, 1.0], //3 - UP -> 7
						[1.0, 1.0, 1.0, 0.0, 0.0, 1.0], //4 - UP->8
						[-1.0,-1.0, 1.0, 0.0, 0.0, 1.0], //0 = 5 - UP->9
						[-1.0, 1.0, 1.0, 0.0, 0.0, 1.0], //6 = 13 - UP -> 10
						
						[-1.0,-1.0, 1.0, -1.0, 0.0, 0.0], //5 - LEFT->11
						[-1.0, 1.0, 1.0, -1.0, 0.0, 0.0], //6 - LEFT-> 12
						[-1.0,-1.0, -1.0, -1.0, 0.0, 0.0], //7 = 0 - LEFT ->13
						[-1.0, 1.0, -1.0, -1.0, 0.0, 0.0], //8 = 12 - LEFT-> 14
						
						[-1.0,-1.0, -1.0, 0.0, 0.0, -1.0], // 7 = 0 - DOWN ->15
						[-1.0, 1.0, -1.0, 0.0, 0.0, -1.0], // 8 = 12 - DOWN -> 16
						[1.0,-1.0, -1.0, 0.0, 0.0, -1.0], //  2 = 9 - DOWN -> 17
						[1.0, 1.0, -1.0, 0.0, 0.0, -1.0], //  10 - DOWN -> 18
						
						[1.0,-1.0, -1.0, 1.0, 0.0, 0.0], //  2 = 9 - RIGHT -> 19
						[1.0, 1.0, -1.0, 1.0, 0.0,0.0], //  10 - RIGHT -> 20
						[1.0, 1.0, 1.0, 1.0, 0.0, 0.0], // 4 = 11 - RIGHT -> 21
						
						[1.0, 1.0, -1.0, 0.0, 1.0, 0.0], //  10 - BACK -> 22
						[1.0, 1.0, 1.0, 0.0, 1.0, 0.0], // 4 = 11 - BACK -> 23
						[-1.0, 1.0, -1.0, 0.0, 1.0, 0.0], // 8 = 12 - BACK -> 24
						[-1.0, 1.0, 1.0, 0.0, 1.0, 0.0] // 6 = 13 - BACK -> 25
						];
	var ind2 = [1, 0, 2, //triangle0
					1, 2,  3, //triangle1
					5, 4, 6, //triangle2
					7, 8, 9, //triangle3
					9, 8, 10, //triangle4
					11,12,13, // triangle5
					13, 12, 14, //triangle6
					15, 16, 17, //triangle7
					17,16, 18, //triangle8
					19, 20, 21, //triangle9
					23, 22, 24, //triangle10
					23, 24, 25 //triangle11
					];
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	
	/*var vert3 = [[-1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0]];
	var ind3 = [0, 1, 2,  0, 2, 3];*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var DIM = 20; //how many points we want to sample in each direction from the origin. 
	var NORMAL_FACTOR = 3; // we want it to be between -3 and 3
	
    var normal_versor = new Array(3);
	var vert3 = [];
	for( i = -DIM; i <= DIM; i++){
		for(j = -DIM; j <= DIM; j++){			
			x = i*NORMAL_FACTOR/DIM;
			z = j*NORMAL_FACTOR/DIM;
			y = Math.cos(z)*Math.sin(x);			//sample a point of the function in a grid
			derivative_wrt_z = -Math.sin(x) * Math.sin(z);
			derivative_wrt_x = Math.cos(z)*Math.cos(x);
			normal = crossProduct([0, derivative_wrt_z, 1],[1, derivative_wrt_x, 0]);	//the normal is computed using derivatives
			normal_versor = normalize(normal);			
			vert3[(i+DIM)*2*DIM+(i+DIM)+(j+DIM)] = [x, y, z, normal_versor[0], normal_versor[1], normal_versor[2]];		//add the vertex with the normal to the array	
		}
	}
	
	//console.log(vert3);
	
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < 2*DIM; i++) {
		for(j = 0; j < 2*DIM; j++) {
			ind3[6*(i*2*DIM+j)  ] = (2*DIM+1)*j+i;					
			ind3[6*(i*2*DIM+j)+1] = (2*DIM+1)*j+i+1;			
			ind3[6*(i*2*DIM+j)+2] = (2*DIM+1)*(j+1)+i+1;	
			ind3[6*(i*2*DIM+j)+3] = (2*DIM+1)*j+i;
			ind3[6*(i*2*DIM+j)+4] = (2*DIM+1)*(j+1)+i+1;
			ind3[6*(i*2*DIM+j)+5] = (2*DIM+1)*(j+1)+i;
		}
	}
	
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	// Draws a Cylinder --- To do for the assignment
	var DIM_CYL = 60;
	var HALF_HEIGHT_CYL = 2;
	var CYL_RAY = 1;
	var DECIMAL_ROUND = 5;
	var vert4  = new Array();
	var ind4 = new Array();
	
	for(i = 0; i < DIM_CYL; i++){ //external surface verteces
		angle = 2*Math.PI*i/DIM_CYL;
		
		vert4[2*i] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), //x position of the vertex
						HALF_HEIGHT_CYL, 							//y position of the vertex: alternates between the upper face and the lower face, so HALF_HEIGHT_CYL here and -HALF_HEIGHT_CYL in the next vertex
						round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND), //z position of the vertex
						round(Math.cos(angle), DECIMAL_ROUND), 	//the normal to the surface has the same direction of the ray :)
						0, 										//the normal to the surface is on the xz plane
						round(Math.sin(angle), DECIMAL_ROUND)];	//the normal to the surface has the same direction of the ray :)
							
		vert4[2*i+1] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), //same as above, but the y is the one of the lower face
						-HALF_HEIGHT_CYL, 
						round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND), 
						round(Math.cos(angle), DECIMAL_ROUND),
						0, 
						round(Math.sin(angle), DECIMAL_ROUND)];
	} //up to here verteces from 0 to 2*DIM_C-1
	
	for(i = 0; i < DIM_CYL; i++){ //upper face verteces from 2*DIM_CYL to 3*DIM_CYL-1
		angle = 2*Math.PI*i/DIM_CYL;		
		vert4[2*DIM_CYL+i] = [	round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND),
								HALF_HEIGHT_CYL, 
								round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND)
								,0,1,0]; // for the upper face, the normal is the versor aligned with the y axis :)
	}
	
	for(i = 0; i < DIM_CYL; i++){ //lower face verteces from 3*DIM_CYL to 4*DIM_CYL-1
		angle = 2*Math.PI*i/DIM_CYL;		
		vert4[3*DIM_CYL+i] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), 
											-HALF_HEIGHT_CYL, 
											round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND),
											0,-1,0]; // for the lower face, the normal is the versor aligned in the opposite direction of the y axis :)
	}
	
	vert4[4*DIM_CYL] = [0, HALF_HEIGHT_CYL, 0, 0, 1, 0]; //center of the upper face
	vert4[4*DIM_CYL+1] = [0, -HALF_HEIGHT_CYL, 0, 0, -1, 0]; //center of the lower face
	
	for(i = 0; i < DIM_CYL; i++){  //some math for getting external surface indices
		ind4[i*6 + 0] = (2*i+1)%(2*DIM_CYL);
		ind4[i*6 + 1] = (2*i)%(2*DIM_CYL);
		ind4[i*6 + 2] = (2*i+2)%(2*DIM_CYL);
		ind4[i*6 + 3] = (2*i+1)%(2*DIM_CYL);
		ind4[i*6 + 4] = (2*i+2)%(2*DIM_CYL);
		ind4[i*6 + 5] = (2*i+3)%(2*DIM_CYL);

		//the modulus is used because we want to connect the last verteces of the external surface with the first ones (since it is circular)
	}
	//up to here we have 2 triangles for each split = 2*3*DIM_CYL verteces
	for(i = 0; i < DIM_CYL; i++)
	{
		//a "slice" (triangle) for the upper face
		ind4[6*DIM_CYL+i*6] = 4*DIM_CYL; // vertex that encodes the center of the upper circumf
		ind4[6*DIM_CYL+i*6+1] = 2*DIM_CYL+(i+1)%(DIM_CYL);
		ind4[6*DIM_CYL+i*6+2] = 2*DIM_CYL+i%(DIM_CYL);

		//a "slice" (triangle) for the lower face
		ind4[6*DIM_CYL+i*6+3] = 4*DIM_CYL+1; // vertex that encodes the center of the lower circumf
		ind4[6*DIM_CYL+i*6+4] = 3*DIM_CYL+i%(DIM_CYL);
		ind4[6*DIM_CYL+i*6+5] = 3*DIM_CYL+(1+i)%(DIM_CYL);
	}
	//console.log(vert4);
	//console.log(ind4);
	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Draws a Sphere --- To do for the assignment.


	//NB: if you can't see the sphere at first, try to zoom out
	//NB: if something goes wrong, try to reduce circumf_quantum of ray_quantum
	///// Creates vertices
	
	var SPHERE_RAY = 10;	
	var circumf_quantum = 90;
	var ray_quantum = 50;
	var current_angle = 0;
	var vert5 = new Array();
	
	for(i = ray_quantum; i >= 0; i--) { //FIRST HALF SPHERE VERTECES
		for(j = 0 ; j < circumf_quantum; j++) {	
			current_angle = (2*Math.PI*j/circumf_quantum);			
					
			x = round((i*SPHERE_RAY*Math.cos(current_angle))/ray_quantum, DECIMAL_ROUND);
			z = round((i*SPHERE_RAY*Math.sin(current_angle))/ray_quantum, DECIMAL_ROUND);
			y = round(Math.sqrt(Math.pow(SPHERE_RAY,2)-Math.pow(x,2)-Math.pow(z,2)), DECIMAL_ROUND);

			vert5[(ray_quantum-i)*circumf_quantum+j] = [x, y, z, 
														round(x/SPHERE_RAY, DECIMAL_ROUND), 
														round(y/SPHERE_RAY,DECIMAL_ROUND), 
														round(z/SPHERE_RAY,DECIMAL_ROUND)];
		}
	}
	var SECOND_HALF_BASE_INDEX = (1+ray_quantum)*circumf_quantum; //the index from where the verteces of the second half sphere start in the vertex array
	for(i = ray_quantum; i >= 0; i--) { //SECOND HALF SPHERE VERTECES
		for(j = 0 ; j < circumf_quantum; j++) {	
			current_angle = (2*Math.PI*j/circumf_quantum);			
			x = round((i*SPHERE_RAY*Math.cos(current_angle))/ray_quantum, DECIMAL_ROUND);
			z = round((i*SPHERE_RAY*Math.sin(current_angle))/ray_quantum, DECIMAL_ROUND);
			y = round(Math.sqrt(Math.pow(SPHERE_RAY,2)-Math.pow(x,2)-Math.pow(z,2)), DECIMAL_ROUND);

			vert5[SECOND_HALF_BASE_INDEX+(ray_quantum-i)*circumf_quantum+j] = [x, -y, z, 
														round(x/SPHERE_RAY, DECIMAL_ROUND), //also here, the normals are the normalized rays
														round(-y/SPHERE_RAY,DECIMAL_ROUND), 
														round(z/SPHERE_RAY,DECIMAL_ROUND)];
		}
	}

	////// Creates indices
	var ind5 = [];
	for(i = 0; i < ray_quantum; i++)  {
		for(j = 0 ; j < circumf_quantum; j++)  {//some math for indexing: i is the i-th circumference we are considering, j the j-th point
			ind5[6*(i*circumf_quantum+j)  ] = (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum); //for circularity: if (j+1/circumf_quantum) > 1, 
																															//we have completed the circumference i and we must use the first 
																															//verteces of the circumference to draw the last triangles, so we subtract circumf_quantum
																															//to retrieve the indexes those points		
			ind5[6*(i*circumf_quantum+j)+1] = j+(circumf_quantum)*i;			
			ind5[6*(i*circumf_quantum+j)+2] = (circumf_quantum)*(i+1)+j;	
			ind5[6*(i*circumf_quantum+j)+3] =  (circumf_quantum)*(i+1)+j;	
			ind5[6*(i*circumf_quantum+j)+4] = ((circumf_quantum)*(i+1)+j+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum);
			ind5[6*(i*circumf_quantum+j)+5] = (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/(circumf_quantum))*circumf_quantum);
		}
	}

	for(i = 0; i < ray_quantum; i++)  {
		for(j = 0 ; j < circumf_quantum; j++)  {//other math for indexing: i is the i-th circumference we are considering, j the j-th point
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)  ] = SECOND_HALF_BASE_INDEX + j+(circumf_quantum)*i;
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)+1] = SECOND_HALF_BASE_INDEX + (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum); //for circularity	
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)+2] = SECOND_HALF_BASE_INDEX + (circumf_quantum)*(i+1)+j;	
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)+3] = SECOND_HALF_BASE_INDEX +((circumf_quantum)*(i+1)+j+1)-(Math.floor((j+1)/circumf_quantum)*circumf_quantum);//for circularity	
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)+4] = SECOND_HALF_BASE_INDEX + (circumf_quantum)*(i+1)+j;	
			ind5[6*SECOND_HALF_BASE_INDEX + 6*(i*circumf_quantum+j)+5] = SECOND_HALF_BASE_INDEX + (j+(circumf_quantum)*i+1)-(Math.floor((j+1)/(circumf_quantum))*circumf_quantum);//for circularity	
		}
	}

	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}


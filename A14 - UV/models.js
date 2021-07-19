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
	var i,j;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
		var vert1 = [[0.0, 1.0, 0.0, 0.0, 0.4472,-0.8944, 0.875, 0.5], //A - up vertex on back face		   			- TRIANGLE1 -> #0
						[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 1.00, 0.25], // B - right bottom vertex on back face - TRIANGLE1 -> #1
						[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.75, 0.25], // C - left bottom vertex on back face - TRIANGLE1 -> #2
						[0.0, 1.0, 0.0, 0.8944, 0.4472,0.0,  0.625, 0.5], //A2 - up vertex on right face				   - TRIANGLE2 -> #3
						[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0, 0.75, 0.25], //D - right bottom vertex on right face	   - TRIANGLE2 -> #4
						[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0, 0.5, 0.25], //B2 - left bottom vertex on right face	   - TRIANGLE2 -> #5
						[0.0,1.0,0.0, 0.0, 0.4472,0.8944, 0.625, 0.25], //A3 - up vertex on front face			   - TRIANGLE3 -> #6
						[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.5, 0.0], //E - right bottom vertex on front face   - TRIANGLE3 -> #7
						[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.75, 0.0], //D2 - left bottom vertex on front face	   - TRIANGLE3 -> #8
						[0.0,1.0,0.0, -0.8944, 0.4472,0.0,  0.625, 0.5], // A4 - up vertex on left face					   - TRIANGLE4 -> #9
						[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0, 0.75, 0.25], // C2 - right bottom vertex on left face - TRIANGLE4 -> #10
						[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0, 0.5, 0.25],  //E2 - left bottom vertex on left face    - TRIANGLE4 -> #11
						[-1.0,-1.0,-1.0, 0.0,-1.0,0.0, 1.0, 0.0], // C3 - Down face - TRIANGLE5 and TRIANGLE6 						-> #12
						[1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75, 0.0],  // B3 - Down face - TRIANGLE5												-> #13
						[1.0,-1.0,1.0, 0.0,-1.0,0.0, 0.75, 0.25],   // D3 - Down face - TRIANGLE5 and TRIANGLE6						-> #14
						[-1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0,0.25]  //E3 - Down face - TRIANGLE5 and TRIANGLE6							-> #15
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0,-1.0, -1.0, 0.0, -1.0, 0.0, 0.250, 0.5], //0
					    [-1.0,-1.0, 1.0, 0.0, -1.0, 0.0, 0.125, 0.5], //1
						[1.0,-1.0, -1.0, 0.0, -1.0, 0.0, 0.250, 0.625], //2 - FRONT
						[1.0,-1.0, 1.0, 0.0, -1.0, 0.0, 0.125, 0.625], //3 - FRONT
						
						[1.0,-1.0, -1.0, 1.0, 0.0, 0.0, 0.250, 0.625], //2 - RIGHT -> 4
						[1.0,-1.0, 1.0, 1.0, 0.0, 0.0, 0.125, 0.625], //3 - RIGHT -> 5
						[1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.125, 0.75],//4 - RIGHT->6
						
						[1.0,-1.0, 1.0, 0.0, 0.0, 1.0,  0.125, 0.625], //3 - UP -> 7
						[1.0, 1.0, 1.0, 0.0, 0.0, 1.0,  0.125, 0.75], //4 - UP->8
						[-1.0,-1.0, 1.0, 0.0, 0.0, 1.0,  0.0, 0.625], //1 = 5 - UP->9
						[-1.0, 1.0, 1.0, 0.0, 0.0, 1.0,  0.0, 0.75], //6 = 13 - UP -> 10
						
						[-1.0,-1.0, 1.0, -1.0, 0.0, 0.0,  0.125, 1.0], //5 - LEFT->11
						[-1.0, 1.0, 1.0, -1.0, 0.0, 0.0,  0.125, 0.875], //6 - LEFT-> 12
						[-1.0,-1.0, -1.0, -1.0, 0.0, 0.0,  0.25, 1.0], //7 = 0 - LEFT ->13
						[-1.0, 1.0, -1.0, -1.0, 0.0, 0.0,  0.25, 0.875], //8 = 12 - LEFT-> 14
						
						[-1.0,-1.0, -1.0, 0.0, 0.0, -1.0,  0.375, 0.625], // 7 = 0 - DOWN ->15
						[-1.0, 1.0, -1.0, 0.0, 0.0, -1.0,  0.375, 0.75], // 8 = 12 - DOWN -> 16
						[1.0,-1.0, -1.0, 0.0, 0.0, -1.0,  0.25, 0.625], //  2 = 9 - DOWN -> 17
						[1.0, 1.0, -1.0, 0.0, 0.0, -1.0,  0.25, 0.75], //  10 - DOWN -> 18
						
						[1.0,-1.0, -1.0, 1.0, 0.0, 0.0, 0.25, 0.625], //  2 = 9 - RIGHT -> 19
						[1.0, 1.0, -1.0, 1.0, 0.0,0.0,  0.25, 0.75], //  10 - RIGHT -> 20
						[1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.125, 0.75], // 4 = 11 - RIGHT -> 21
						
						[1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.25, 0.75], //  10 - BACK -> 22
						[1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.125, 0.75], // 4 = 11 - BACK -> 23
						[-1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.25, 0.875], // 8 = 12 - BACK -> 24
						[-1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.125, 0.875] // 6 = 13 - BACK -> 25
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
	
	
	// Draws a Cylinder --- To do for the assignment
	var DIM_CYL = 40;
	var HALF_HEIGHT_CYL = 2;
	var CYL_RAY = 1;
	var DECIMAL_ROUND = 5;
	var vert3  = new Array();
	var ind3 = new Array();
	
	var LAT_SURF_BOTTOM = 0.5; //references for the texture
	var LAT_SURF_LEFT = 0.5;
	var LAT_SURF_RIGHT = 1;
	var LAT_SURF_TOP = 0.75;
	var LAT_SURF_WIDTH = LAT_SURF_RIGHT - LAT_SURF_LEFT; 
	var LAT_SURF_HEIGHT = LAT_SURF_TOP - LAT_SURF_BOTTOM;
	var TOP_CAN_CENTER_U = 0.625;
	var TOP_CAN_CENTER_V = 0.875;
	var BOTTOM_CAN_CENTER_U = 0.875;
	var BOTTOM_CAN_CENTER_V = 0.875;
	var CAN_FACE_RAY = 0.125;
	for(i = 0; i <= DIM_CYL; i++){ //external surface verteces
		angle = 2*Math.PI*i/DIM_CYL;
		
		vert3[2*i] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), 
							HALF_HEIGHT_CYL, 
							round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND), 
							round(Math.cos(angle), DECIMAL_ROUND),
							0, 
							round(Math.sin(angle), DECIMAL_ROUND),
							LAT_SURF_RIGHT-i*LAT_SURF_WIDTH/DIM_CYL, //it is the same code of A13 assignment, with the addition of u-v coordinates
							LAT_SURF_TOP];
							
		vert3[2*i+1] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), 
								-HALF_HEIGHT_CYL, 
								round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND), 
								round(Math.cos(angle), DECIMAL_ROUND),
								0, 
								round(Math.sin(angle), DECIMAL_ROUND),
								LAT_SURF_RIGHT-i*LAT_SURF_WIDTH/DIM_CYL,
								LAT_SURF_BOTTOM];
		
	} //up to here verteces from 0 to 2*DIM_C+1
	
	for(i = 0; i < DIM_CYL; i++){ //upper face verteces from 2*DIM_CYL to 3*DIM_CYL-1
		angle = 2*Math.PI*i/DIM_CYL;		
		vert3[2*DIM_CYL+2+i] = [	round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND),
											HALF_HEIGHT_CYL, 
											round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND)
											,0,1,0,
											round(TOP_CAN_CENTER_U+CAN_FACE_RAY*Math.cos(angle), DECIMAL_ROUND),
											round(TOP_CAN_CENTER_V+CAN_FACE_RAY*Math.sin(angle), DECIMAL_ROUND),											
											];
	}
	
	for(i = 0; i < DIM_CYL; i++){ //lower face verteces from 3*DIM_CYL to 4*DIM_CYL-1
		angle = 2*Math.PI*i/DIM_CYL;		
		vert3[3*DIM_CYL+2+i] = [round(CYL_RAY*Math.cos(angle), DECIMAL_ROUND), 
											-HALF_HEIGHT_CYL, 
											round(CYL_RAY*Math.sin(angle), DECIMAL_ROUND),
											0,-1,0,
											round(BOTTOM_CAN_CENTER_U+CAN_FACE_RAY*Math.cos(angle), DECIMAL_ROUND),
											round(BOTTOM_CAN_CENTER_V+CAN_FACE_RAY*Math.sin(angle), DECIMAL_ROUND),	
											];
	}
	
	vert3[4*DIM_CYL+2] = [0, HALF_HEIGHT_CYL, 0, 0, 1, 0, TOP_CAN_CENTER_U, TOP_CAN_CENTER_V]; //center of the upper face
	vert3[4*DIM_CYL+1+2] = [0, -HALF_HEIGHT_CYL, 0, 0, -1, 0, BOTTOM_CAN_CENTER_U, BOTTOM_CAN_CENTER_V]; //center of the lower face
	
	for(i = 0; i <= DIM_CYL; i++){  //external surface indices
		ind3[i*6 + 0] = (2*i+1);
		ind3[i*6 + 1] = (2*i);
		ind3[i*6 + 2] = (2*i+2);
		ind3[i*6 + 3] = (2*i+1);
		ind3[i*6 + 4] = (2*i+2);
		ind3[i*6 + 5] = (2*i+3);
	}
	//up to here we have 2 triangles for each split = 2*3*DIM_CYL verteces

	for(i = 0; i < DIM_CYL; i++)
	{
		ind3[6*DIM_CYL+i*6] = 4*DIM_CYL+2; // vertex that encodes the center of the upper circumf
		ind3[6*DIM_CYL+i*6+1] = 2*DIM_CYL+2+(i+1)%(DIM_CYL);
		ind3[6*DIM_CYL+i*6+2] = 2*DIM_CYL+2+i%(DIM_CYL);	
		ind3[6*DIM_CYL+i*6+3] = 4*DIM_CYL+2+1; // vertex that encodes the center of the upper circumf
		ind3[6*DIM_CYL+i*6+4] = 3*DIM_CYL+2+i%(DIM_CYL);
		ind3[6*DIM_CYL+i*6+5] = 3*DIM_CYL+2+(1+i)%(DIM_CYL);
	}
	
	console.log(vert3);
	console.log(ind3);
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
}
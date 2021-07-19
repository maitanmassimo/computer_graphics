function drawSceneTree(S) {
	computeWorldMatrix(0, S, utils.identityMatrix());
}

//here I created a recursive function that passes and index, the tree and the world matrix of the father node
function computeWorldMatrix(index, S, father_world_matrix){ 
	console.log("computeWorldMatrix called on node " + index);
	var T = utils.MakeTranslateMatrix(S[index][0], S[index][1], S[index][2]); //first of all, the dx, dy, dz of the node are used to compute the translation matrix
	var R_z =  utils.MakeRotateZMatrix(S[index][5]);
	var R_x = utils.MakeRotateXMatrix(S[index][3]);
	var R_y = utils.MakeRotateYMatrix(S[index][4]);//then we compute the translation matrices for Roll, Pitch and Yaw
	var k = 0;
	var M_local = utils.multiplyMatrices(
					utils.multiplyMatrices(
						utils.multiplyMatrices(T,R_z), R_x), R_y);	//we compute the "local" transformation (w.r.t. the father frame)
	var M_node = utils.multiplyMatrices(father_world_matrix, M_local); //we compute the transformation in global frame		
	if(S[index][6]!=-1 && S[index][7]!=-1){ //if the node has at least one child
		for(k = S[index][6]; k <= S[index][7]; k++){//we recursively call the function on its children
			computeWorldMatrix(k, S, M_node);
		}
	}			
	draw(index, M_node); //draw
}

//What happens is the following: we call the computeWorldMatrix on the root node, that after the computation of the transformation
//calls recursively the function on the first 5 phalanges. For each of them, in a depth-first fashion, the function will 
//call itself until it reaches the end of the finger, and after that the algorithm will proceed with the processing of all the other fingers
function Anim1(t) {
	// moving car
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(1/4),utils.MakeTranslateMatrix(t,0.5*4,0)); //scale by 4, translate y (v) on 0.5 (displacement) * scale (4)
	return out;
}

function Anim2(t) {
	// bumping code
	var c = 1+0.5*Math.floor(t-0.5)- t/2*Math.sign(t-0.5);
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.75, c,0),utils.MakeScaleMatrix(1/8)); 
	//here the reasoining: sign(t-0.5) is -1 when t < 0.5, i.e. in the first half period, and 1 in the second half period
	//floor(t-0.5) is -1 in the first half, 0 in the second one.
	//This means that the translation along the y component is
	// y = 1 +0.5*(-1) - t/2*(-1) = 0.5 + t/2 in the first half (from 0.5 to 0.5+0.5/2 = 0.75)
	// y = 1 +0.5*(0) - t/2*(1) = 1 - t/2 in the second half (from 1-0.5/2 = 0.75 to 1-1/2 = 0.5)
	return out;
}

function Anim3(t) {
	// rotating fan
	var T = utils.MakeTranslateMatrix(0.5, 0.75, 0);
	var R = utils.MakeRotateZMatrix(5*t*360);
	var T_2 = utils.MakeTranslateMatrix(0.625, 0.875, 0);
	var inv_T_2 = utils.invertMatrix(T_2);
	var S = utils.MakeScaleMatrix(1/4);

	var out = utils.multiplyMatrices(
		utils.multiplyMatrices(
			utils.multiplyMatrices(
				utils.multiplyMatrices(
					T_2, 		//move in centre of the fan
					R), 		//rotate
					inv_T_2), 	//move back in (0,0)
					T), 		//move in the bottom left corner of the fan
					S) ;		//scale
	return out;
}

function Anim4(t) {
	// buring flame
	var rate_horizontal = (1/(4*3)); //the width of a frame containing one flame
	var rate_total = (1/(4*3*6)); 
	var rate_vertical = (1/(6)); //the height of a frame containing one flame

	//in order to compute which is the displacement on x, we divide the t for the rate total (which is the same of multiplying t*4*3*6 = 72*t, that since
	// t is between 0 and 1 will be a number between 0 and 72)
	//such number, approximated to the smallest integer, represents "which flame" should be shown at the time t, considering them in the following order
	// 0 1 2 3 ... 11
	// 12 13 ......
	// ... ... ...
	// 60 ... 69 70 71
	//once we have such a number, we just need to pick up its x and y coordinates: in order to get the x we first compute its modulus by 12
	//(because we don't care about the row, we just want to know the column) and then multiply by the width of a single flame frame (rate_horizontal)
	// for the y it's more or less the same, althought the math is a bit more complex (because the range is not between 0 and 1 but between 0 and 0.5)
	// and it decreases with time instead of increasing. The number between 0 and 71 Math.floor(t/rate_total) is divided by 12 (i.e., multiplied by rate_horizontal)
	// and approximated to smallest integer, in order to get the number of the row. Once we have done it, we multiply it by the height of the flame frame.
	// The computation can be seen in the console log.
	console.log("t: " + t + ", T: " +  Math.floor(t/rate_total) + ", Horiz: " 
				+ Math.floor((t/rate_total)%12) +" ->" +Math.floor((t/rate_total)%12)*rate_horizontal+ ", Vert = " 
				+ (Math.floor(Math.floor(t/rate_total)*rate_horizontal)) + "->" + (0.5- (Math.floor(Math.floor(t/rate_total)*rate_horizontal+1)*(rate_vertical*0.5))));
	
	var T = utils.MakeTranslateMatrix(Math.floor((t/rate_total)%12)*rate_horizontal,
										0.5- (Math.floor(Math.floor(t/rate_total)*rate_horizontal+1)*(rate_vertical*0.5)),
										0);
	
	var S = utils.MakeScaleMatrix(1/(4*3)); //scale 
	var out = utils.multiplyMatrices(T, S);
	return out;
}

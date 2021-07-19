function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `

	//in the lambert diffuse the amount of the reflected light is proportional to the cosine of the angle
	//between the normal to the surface in the considered point and the direction of the light, that can be computed as dot(lightDirA, normalVec)
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `
	
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	
	//in the blinn specular we consider the reflection effect proportional to the cosine of the angle between the half vector h,
	//which is the vector in the middle between the viewer direction and the light direction,
	//and the normal to the surface
	vec3 half_vector_A = normalize(lightDirA + eyedirVec);
	vec3 half_vector_B = normalize(lightDirB + eyedirVec);
	vec3 half_vector_C = normalize(lightDirC + eyedirVec);
	
	vec4 BAcontr = pow(clamp(dot(normalVec, half_vector_A), 0.0, 1.0), SpecShine)* lightColorA;
	vec4 BBcontr = pow(clamp(dot(normalVec, half_vector_B), 0.0, 1.0), SpecShine)* lightColorB;
	vec4 BCcontr = pow(clamp(dot(normalVec, half_vector_C), 0.0, 1.0), SpecShine)* lightColorC;
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (BAcontr + BBcontr + BCcontr), 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `

	//in the phong specular the rationale is similar to the one of the blinn specular, with the difference that we consider
	//the cosine of the angle between the viewer direction and the vector of the "reflected" light,
	//i.e., the vector specular to the light direction with respect to the normal to the surface. Such a vector can be computed with the reflect function
	vec3 r_A = 	-reflect(lightDirA, normalVec);
	vec3 r_B = 	-reflect(lightDirB, normalVec);
	vec3 r_C = 	-reflect(lightDirC, normalVec);

	vec4 specA = pow(clamp(dot(eyedirVec, r_A), 0.0, 1.0), SpecShine)* lightColorA;
	vec4 specB = pow(clamp(dot(eyedirVec,r_B), 0.0, 1.0), SpecShine)* lightColorB;
	vec4 specC = pow(clamp(dot(eyedirVec,r_C), 0.0, 1.0), SpecShine)* lightColorC;
	
	out_color = clamp( specularColor * (specA + specB + specC) + ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `

	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	
	vec3 r_A = 	-reflect(lightDirA, normalVec);
	vec3 r_B = 	-reflect(lightDirB, normalVec);
	vec3 r_C = 	-reflect(lightDirC, normalVec);

	vec4 specA = pow(clamp(dot(eyedirVec, r_A), 0.0, 1.0), SpecShine)* lightColorA;
	vec4 specB = pow(clamp(dot(eyedirVec,r_B), 0.0, 1.0), SpecShine)* lightColorB;
	vec4 specC = pow(clamp(dot(eyedirVec,r_C), 0.0, 1.0), SpecShine)* lightColorC;
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (specA + specB + specC) + ambientLight * ambColor + emit, 0.0, 1.0);
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
var S5 = `
	vec4 LAcontr, LBcontr, LCcontr;
	vec4 specA, specB, specC;

	//with toon shading, depending on (cosine of) the angle between the light and the normal, we assign one of the (in this case two) possible in colours
	if(dot(lightDirA,normalVec)>=DToonTh)
		LAcontr = lightColorA;
	else LAcontr = vec4(0);
	
	if(dot(lightDirB,normalVec)>=DToonTh)
		LBcontr = lightColorB;
	else LBcontr = vec4(0);
	
	if(dot(lightDirC,normalVec)>=DToonTh)
		LCcontr = lightColorC;
	else LCcontr = vec4(0);
	
	//computation of half vector for blinn specular 
	vec3 half_vector_A = normalize(lightDirA + eyedirVec);
	vec3 half_vector_B = normalize(lightDirB + eyedirVec);
	vec3 half_vector_C = normalize(lightDirC + eyedirVec);
	
	
	if(dot(normalVec,half_vector_A)>=SToonTh)
		specA = lightColorA;
	else specA = vec4(0);
	
	if(dot(normalVec, half_vector_B)>=SToonTh)
		specB = lightColorB;
	else specB = vec4(0);
	
	if(dot(normalVec,half_vector_C)>=SToonTh)
		specC = lightColorC;
	else specC = vec4(0);
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (specA + specB + specC) + ambientLight * ambColor, 0.0, 1.0);
`;

	return [S1, S2, S3, S4, S5];
}


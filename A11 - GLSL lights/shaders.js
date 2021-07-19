function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//vec3  Pos;		// Position of first (or single) light
//vec3  Dir;		// Direction of first (or single) light
//float ConeOut;	// Outer cone (in degree) of the light (if spot)
//float ConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float Decay;		// Decay factor (0, 1 or 2)
//float Target;		// Target distance
//vec4  lightColor;	// color of the first light
//		
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 OlightDir;
//
//and intensity is returned into:
//
//vec4 OlightColor;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light, constant ambient
var S1 = `
	OlightDir = Dir;
	OlightColor = lightColor;	
	ambientColor = ambientLightColor;
`;

// Single point light without decay
var S2 = `
	OlightDir = normalize(Pos - fs_pos); //in the point light, the direction is given by the normalized vector starting from the point fs_pos and going towards the light position
	OlightColor = lightColor;
`;

// Single spot light (without decay), constant ambient
//the spotlight is basically a point light multiplied by a (clamped) factor between 0 and 1, that produces the dimming effect
var S3 = `
	OlightColor = lightColor*clamp(((dot(normalize(Pos - fs_pos),Dir)-cos(radians(ConeOut)*0.5))/(cos(ConeIn*radians(ConeOut)*0.5) - cos(radians(ConeOut)*0.5))), 0.0, 1.0);
	OlightDir = normalize(Pos - fs_pos);
	ambientColor = ambientLightColor;
`;

// Single point light with decay
var S4 = `
	OlightColor = lightColor*pow((Target/length(Pos-fs_pos)),Decay);
	OlightDir = normalize(Pos - fs_pos);
`;

// Single spot light (with decay) 
//the spotlight is basically a point light multiplied by a (clamped) factor between 0 and 1, that produces the dimming effect
var S5 = `
	OlightColor = lightColor*pow((Target/length(Pos-fs_pos)),Decay)*clamp(((dot(normalize(Pos - fs_pos),Dir)-cos(radians(ConeOut)*0.5))/(cos(ConeIn*radians(ConeOut)*0.5) - cos(radians(ConeOut)*0.5))), 0.0, 1.0);
	OlightDir = normalize(Pos - fs_pos);
	
`;

// Single point light, hemispheric ambient 
var S6 = `
	OlightDir = normalize(Pos - fs_pos);
	ambientColor = ((dot(normalVec,ADir)+1.0)*ambientLightColor + (1.0 -dot(normalVec,ADir))*ambientLightLowColor)/2.0;
	OlightColor = lightColor;
`;

// Single spot light, spherical harmonics ambient
var S7 = `
	OlightColor = lightColor*clamp(((dot(normalize(Pos - fs_pos),Dir)-cos(radians(ConeOut)*0.5))/(cos(ConeIn*radians(ConeOut)*0.5) - cos(radians(ConeOut)*0.5))), 0.0, 1.0);
	OlightDir = normalize(Pos - fs_pos);
	ambientColor = SHconstColor + normalVec[0]*SHDeltaLxColor +  normalVec[1]*SHDeltaLyColor +  normalVec[2]*SHDeltaLzColor;
`;
	return [S1, S2, S3, S4, S5, S6, S7];
}


export const ditherShader = `
precision mediump float;
varying vec2 vTexCoord;
varying vec3 vEye;
varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vUv;

uniform float bayer[16]; 
uniform sampler2D layer;

float indexValue(float step) {
    vec2 fc = gl_FragCoord.xy;
    int x = int(mod(fc.x, 4.0*step)/step);
    int y = int(mod(fc.y, 4.0*step)/step);
    
    int index = (x + y * 4);
    for (int i=0; i<16; i++) {
        if (i == index) return bayer[i] / 16.0;
    }
}

float dither(float color, float pixelAmt) {
    float color_result = 0.0;
    float bayer_value = 0.0;
    bayer_value = indexValue(pixelAmt);
 
    float output_color =  1.0 - color + (10.0 * bayer_value);

    if (output_color < 0.48) {
        color_result = 1.0;
    } 
    return color_result;
}

vec3 ditherCol(vec3 color, float pixelAmt) {
    return vec3(dither(color.r, pixelAmt),
                dither(color.g, pixelAmt),
                dither(color.b, pixelAmt));
}

void main() {
    vec2 uv = vUv;

    vec4 l = texture2D(layer, uv);

    vec3 color = l.rgb;
    float ditherAmt = 2.5;

    color = ditherCol(color, ditherAmt);

    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}`

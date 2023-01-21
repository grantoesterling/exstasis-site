import { useMemo, useRef } from 'react'
import {
  Mesh,
  BufferGeometry,
  Material,
  TextureLoader,
  Vector3,
  Color,
  Vector2,
} from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export const DitherRect = (props: {
  position: Vector3
  dim: number[]
  color: string
}) => {
  const mesh = new Mesh()
  const ref = useRef(mesh)
  const testURL = `https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80`
  const [texture1991] = useMemo(() => {
    const loader = new TextureLoader()
    return [loader.load(testURL)]
  }, [testURL])
  var t = useThree()

  ref.current.position.set(props.position.x, props.position.y, props.position.z)
  let col = new Color(props.color)
  const uniforms = useMemo(
    () => ({
      bayer: {
        type: 'f[16]',
        value: [
          -0.5, 0, -0.375, 0.125, 0.25, -0.25, 0.375, -0.125, -0.3125, 0.1875,
          -0.4375, 0.0625, 0.4375, -0.0625, 0.3125, -0.1875,
        ],
      },

      col: {
        type: 'v3',
        value: col.toArray(),
      },
    }),
    []
  )
  return (
    <mesh ref={ref}>
      <planeGeometry args={[props.dim[0], props.dim[1]]} />
      <shaderMaterial
        fragmentShader={ditherShader}
        vertexShader={normalVertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export const normalVertexShader = `varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPos;

          void main() {
            vUv = uv;
            vPos = position;
            vNormal = normal;
            vec4 positionVec4 = vec4(position, 1.0);
            // positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

            vec4 modelViewPosition = modelViewMatrix * positionVec4;
            gl_Position = projectionMatrix * modelViewPosition; 
          }`

export const ditherShader = `
precision mediump float;
varying vec2 vTexCoord;
varying vec3 vEye;
varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vUv;

uniform float bayer[16]; 
uniform vec3 col;

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


    vec3 color = col ;
    float ditherAmt = 4.5;

    color = ditherCol(color, ditherAmt);

    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}`

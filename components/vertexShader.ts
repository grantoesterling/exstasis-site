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

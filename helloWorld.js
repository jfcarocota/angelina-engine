const canvas = document.getElementById('glcanvas');

const vsSource = `
attribute vec4 aVertexPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}
`;

const fsSource = `
void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

const loadShader = (gl, type, source)=>{
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

const initShader = (gl, vsSource, fsSource)=>{
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

const main = ()=>{
    const gl = canvas.getContext('webgl');

    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    const shaderProgram = initShader(gl, vsSource, fsSource);

    const programInfo = {
        program : shaderProgram,
        attribLocations : {
            vertexPosition : gl.getAttribLocation(shaderProgram, 'aVertexPosition')
        },
        uniformLoations: {
            projectionMatrix : gl.getAttribLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix : gl.getAttribLocation(shaderProgram, 'uModelViewMatrix')
        }
    };

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
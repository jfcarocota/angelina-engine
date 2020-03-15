
class ShaderCompiler
{
    constructor(gl, vsSource, fsSource){
        this.gl = gl;
        this.vsSource = vsSource;
        this.fsSource = fsSource;
    }

    loadShader(type, source){
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
    
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
    
        return shader;
    }
    
    async initShader(){

        const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, await this.getFile(this.vsSource));
        const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, await this.getFile(this.fsSource));
        const shaderProgram = this.gl.createProgram();
    
        this.gl.attachShader(shaderProgram, vertexShader);
        this.gl.attachShader(shaderProgram, fragmentShader);
    
        this.gl.linkProgram(shaderProgram);
    
        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
            alert('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram));
            return null;
        }
    
        return shaderProgram;
    }

    async getFile(filePath){

        const shaderSource = await fetch(filePath).then(respose => respose.text().then(data => {return data}));
        if (shaderSource === null) {
            alert("WARNING: Loading of:" + filePath + " Failed!");
            return null;
        }
        return shaderSource;
    }
}
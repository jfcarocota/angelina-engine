class ShaderCompiler
{
    constructor(gl, vsSource, fsSource){
        this.gl = gl;
        this.vsSource = this.getFile(vsSource);
        this.fsSource = this.getFile(fsSource);

        console.log(this.vsSource);
        console.log(this.fsSource);
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
    
    initShader(){
        const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, this.vsSource);
        const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, this.fsSource);
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

    async getFile(filePath, src){

        const shaderSource = await fetch(filePath).then(respose => respose.text()).then(data => {return data});
        console.log(shaderSource); 
        if (shaderSource === null) {
            alert("WARNING: Loading of:" + filePath + " Failed!");
            return null;
        }

        src = shaderSource

        /*let xmlReq = new XMLHttpRequest();
        xmlReq.open('GET', filePath, false);
        try {
            xmlReq.send();
        } catch (error) {
            alert("Failed to load shader: " + filePath);
            return null;
        }

        const shaderSource = xmlReq.responseText;
    
        if (shaderSource === null) {
            alert("WARNING: Loading of:" + filePath + " Failed!");
            return null;
        }

        return shaderSource;*/
    }
}
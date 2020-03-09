class Rectangle{
    constructor(gl, programInfo, buffers){
        this.numComponents = 2;
        this.type = gl.FLOAT;
        this.normalize = false;
        this.stride = 0;
        this.offset = 0;
        
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            this.numComponents,
            this.type,
            this.normalize,
            this.stride,
            this.offset
        );
        
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }
}
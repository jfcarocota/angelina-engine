class VertexEngine{
    constructor(gl){

        this.positions = [
            -1.0,  1.0,
             1.0,  1.0,
            -1.0, -1.0,
             1.0, -1.0,
        ];

        this.colors = [
            1, 1, 1, 1, //white
            1, 0, 0, 1, //red
            0, 1, 0, 1, //green
            0, 0, 1, 1 //blue
        ];

        this.textureCoordinates = [
            // Front
            0,  0,
            1,  0,
            1,  1,
            0,  1
        ];


        this.positionBuffer = gl.createBuffer();
        this.textureCoordBuffer = gl.createBuffer();
        this.colorBuffer = gl.createBuffer();


        //Rectangulo
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(this.positions),
            gl.STATIC_DRAW
        );

        //Color

        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(this.colors),
            gl.STATIC_DRAW
        );

        //Textura

         
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);


        gl.bufferData(
            gl.ARRAY_BUFFER, 
            new Float32Array(this.textureCoordinates),
            gl.STATIC_DRAW
        );
    }

    getBuffer(){
        return {
            position: this.positionBuffer,
            textureCoord: this.textureCoordBuffer,
            color : this.colorBuffer
        };
    }
}

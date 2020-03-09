class Camera{
    constructor(gl){
        /*Camera */

        this.fieldOfView = 45 * Math.PI / 180;
        this.aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        this.zNear = 0.1;
        this.zFar = 100;

        this.projectionMatrix = mat4.create();

        mat4.perspective(
            this.projectionMatrix,
            this.fieldOfView,
            this.aspect,
            this.zNear,
            this.zFar
        );
    }

    getProjectionMatrix(){
        return this.projectionMatrix;
    }
}

class TextureLoader{
    constructor(gl, url){
        this.image = new Image();
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        this.level = 0;
        this.internalFormat = gl.RGBA;
        this.width = 1;
        this.height = 1;
        this.border = 0;
        this.srcFormat = gl.RGBA;
        this.srcType = gl.UNSIGNED_BYTE;
        this.pixel = new Uint8Array([0, 0, 255, 255]);

        gl.texImage2D(
            gl.TEXTURE_2D, 
            this.level,
            this.internalFormat, 
            this.width, 
            this.height, 
            this.border, 
            this.srcFormat, 
            this.srcType,
            this.pixel
        );

        this.image.onload = ()=> {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(
                gl.TEXTURE_2D, 
                this.level, 
                this.internalFormat,
                this.srcFormat,
                this.srcType, 
                this.image
            );
            
            // WebGL1 has different requirements for power of 2 images
            // vs non power of 2 images so check if the image is a
            // power of 2 in both dimensions.
            if (isPowerOf2(this.image.width) && isPowerOf2(this.image.height)) {
                // Yes, it's a power of 2. Generate mips.
                gl.generateMipmap(gl.TEXTURE_2D);
            } else {
                // No, it's not a power of 2. Turn off mips and set
                // wrapping to clamp to edge
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }
        }

        this.image.src = url;
    }

    getTexture(){
        return this.texture;
    }
}

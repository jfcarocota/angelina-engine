# Angelina Engine
 
## Este es un proyecto creado por los estudiantes de Universidad La Salle Noroeste, como una solución a la implementación de gráficos por computadora en navegadores, implementando tecnología WebGL 2.0.
 
 Acontinuación se presenta la documentación para el uso de la librería. 
 
 
# ¿Cómo arrancar el proyecto?
 
## ¿Cómo instalar node?
El sitio necesesita que se instale para poder utilizarse.

## ¿Cómo instalar la paquetería en el programa?
Para instalar toda la paqueterría del proyecto necesitaresmos introducir en la linea de comando el comando de "npm i" o "npm install".

## ¿Cómo levantar el servidor local?
Para levantar el servidor local necesitaresmos introducir en la linea de comando el comando de "node index".

## ¿Cómo modificar el servidor?
Para modificar el servidor es necesario realizar ajustes en el index.html y index.js.

## Notas:
- Estamos usando la librería “express.js npm”.
- npm= node package manager.
- Para que algo jale en el servidor todo debe de estar dentro de “src folder” y si quieres imágenes en “images folder”.
- Para importa un .js custom en index.html como una etiqueta normal de script.




# VertexEngine
Consiste en un constructor que recibirá gls y un método de getBuffer que devolverá la posición del rectángulo, las coordenadas de la textura y el color.

## Constructor:
Dentro del constructor se colocan los arreglos de la posición del rectángulo, del color y de las coordenadas de la textura.
Se inicializan en el contexto de openGL la posición del rectángulo, del color y de las coordenadas de la textura mediante el gl de createBuffer.

Para cada objeto se utiliza un gl de bindBuffer que enlaza el objeto en una localización del contexto especifica.
Para cada objeto se utiliza un gl de bufferData que inicializa los valores contenidos en los objetos.

## Método de getBuffer:
Devuelve el valor de los objetos para que sean cargados en escena.


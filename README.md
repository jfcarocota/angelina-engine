# Angelina Engine
 
## Este es un proyecto creado por los estudiantes de Universidad La Salle Noroeste, como una solución a la implementación de gráficos por computadora en navegadores, implementando tecnología WebGL 2.0.
 
 Acontinuación se presenta la documentación para el uso de la librería. 
 
## Pasos para arrancar el proyecto
1) Descargar Node.js desde su sitio web.
2) Una vez finalizada la descarga para comprobar que la instalación fue exitosa desde la línea de comando ejecuta el comando: "node --version"; y el comando "npm --version". Estos comandos sirven para comprobar la versión de cada uno.
3) Entramos a la ruta del programa desde la línea de comando. Para navegar entre carpetas desde la línea de comando se utiliza el comando “cd (seguido nombre de la carpeta)", si acaso no recuerda el nombre exacto de la carpeta a la que quiera navegar utilice el comando “ls” para ver las carpetas a las que puedes entrar y el comando para retroceder de carpeta se utiliza el comando “cd ..”.
4) Ya estando en la carpeta en donde está el proyecto en la línea de comando colocaremos el comando: "npm i" o "npm install" para instalar la paquetería del proyecto e insertamos otro comando: "npm i express.js", acto seguido se descargarán todos los paquetes que se necesiten para poder levantar un servidor.
5) Para abrir el proyecto insertaremos el comando: "node index" y buscaremos en el navegador el "localhost:8000".


# VertexEngine
Consiste en un constructor que recibirá gls y un método de getBuffer que devolverá la posición del rectángulo, las coordenadas de la textura y el color.

## Constructor
Dentro del constructor se colocan los arreglos de la posición del rectángulo, del color y de las coordenadas de la textura.
Se inicializan en el contexto de openGL la posición del rectángulo, del color y de las coordenadas de la textura mediante el gl de createBuffer.

Para cada objeto se utiliza un gl de bindBuffer que enlaza el objeto en una localización del contexto especifica.
Para cada objeto se utiliza un gl de bufferData que inicializa los valores contenidos en los objetos.

## Método de getBuffer
Devuelve el valor de los objetos para que sean cargados en escena.


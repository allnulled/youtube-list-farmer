# youtube-list-farmer

Script recopilatorio para links de las listas de canciones de Youtube.

## Explicación breve

 - Ejecuta desde consola del sistema: `git clone https://github.com/allnulled/youtube-list-farmer.git .`
 - Ejecuta desde consola del sistema: `npm install`
 - Ejecuta desde una página de lista de vídeos de Youtube y con la consola del navegador el fichero `./script.js`.
 - Copia el `JSON` imprimido por consola.
 - Pégalo en un nuevo fichero `JSON` en la carpeta `./biblioteca`.
 - Añade el fichero a la lista de autores del script `./app.calo`. Luego compílalo con `castelog`.
 - Inicia el servidor ejecutando `sh server.sh` (Linux, cámbialo a `.bat` para Windows, si eso).
 - Abre la aplicación `app-por-defecto.0.0.1.html`, servida por el servidor (abrir el fichero en local no servirá), con el navegador.
 - Ya está, tendrás todos los links ahí.

## Explicación extensa

### 1. Descargar proyecto e instalar dependencias

Con la consola:

```sh
~$ git clone https://github.com/allnulled/youtube-list-farmer.git .
~$ npm install
```

### 2. Visitar una página de listas de vídeos de Youtube

Con el navegador, abre una página de lista de vídeos de Youtube.

### 3. Extraer links con script

Abre y copia el fichero `./script.js` del proyecto. Luego abre la consola del navegador, y pega el script.

Luego ejecútalo. El script imprimirá por consola una lista de objetos en formato `JSON`. En él están todos los links de la lista.

### 4. Añadir links a la biblioteca

Crea un nuevo `JSON` en la carpeta del proyecto `./biblioteca`.

Luego tienes que añadir el recurso `JSON` en el script del proyecto `./app.calo`, en la lista de `autores`.

Aquí tendrías que compilar el fichero `./app.calo` con [`Castelog`](https://github.com/allnulled/castelog). Pero ahí no me meto, tú sabrás, ese proyecto está sin financiar, igual no te es fácil instalarlo porque apenas está documentado. La compilación te generará el fichero `./app-por-defecto.0.0.1.html`, que es la aplicación de links.

### 5. Abre la aplicación de links

Para acceder a la aplicación, primero tienes que iniciar el servidor. Desde la consola:

```sh
~$ sh server.sh
```

Si usas Windows, me la pela. Pero solo tendrías que cambiar el formato `server.sh` a `server.bat` y darle dos clicks, y creo que debería encender el servidor igual.

Una vez la consola te informe de la URL del servidor recién levantado, lo visitas con tu navegador favorito. Concretamente, tendrás que abrir el fichero `./app-por-defecto.0.0.1.html` con el navegador. Y ahí tendrás todos los links.

## Licencia

Nada. A robar música se ha dicho.
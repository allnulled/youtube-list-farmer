# youtube-list-farmer

Scripts recopilatorios para links de las listas de canciones de Youtube.

## Uso

**Paso 1.** Descarga el proyecto e instala las dependencias, desde consola:

```sh
~$ git clone https://github.com/allnulled/youtube-list-farmer.git .
~$ npm install
```

**Paso 2.** Levanta el servidor local para ir pasándote los links desde Youtube a tu PC:

```sh
~$ node server-better.js
```

**Paso 3.** Levanta el servidor local para visitar la aplicación que muestra los links recopilados:

Esto es, en Linux:

```sh
~$ sh server.sh
```

Y en Windows, doble click en el fichero `server.bat`.

Hecho esto, abre con tu navegador el link que se muestra por consola, y entra en el fichero `app-por-defecto.0.0.1.html`.

**Paso 4.** Instala el addon de navegador `GreaseMonkey` o `TamperMonkey` (según si usas Firefox o Google Chrome).

**Paso 5.** Añade el script `script-greasemonkey.js` en los scripts de `GreaseMonkey`/`TamperMonkey`. Esto hará que aparezca un botón arriba a la derecha siempre que entres en Youtube.

**Paso 6.** Visita una página de Youtube que contenga una lista de vídeos. Son los links que tienen `&list=` en la URL.

Cuando cliques en el botón de arriba a la derecha, el navegador enviará a tu servidor local (al del `server-better.js`) los links de los vídeos de la lista. 

En la consola aparecerá el nombre del fichero en el que se han guardado. Te dirá también si han sido *aceptados* o *rechazados*, porque no acepta nombres repetidos.

Hecho esto, refresca la página del paso 3. Deberían listarse los nuevos ficheros añadidos.

## Nota del autor

Sí, es un poco rollo. Pero tampoco está pensado para ser un script de larga duración, en tanto Youtube cambie el código fuente, ya no sirve. La alternativa es usar la API de Youtube. Si seguro que buscas por ahí, y hay aplicaciones web que te dejan hacer esto con clicks.

De todos modos, está hecho para que, cuando Youtube cambie el código fuente de sus páginas, solo se tenga que actualizar el script de `script-greasemonkey.js`, y seguir funcionando todo igual.

## Licencia

Nada. A robar música se ha dicho.

//         Paso 5: Clase Imdb
// 1. Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie
// 2. Debe tener un único atributo publico denominado películas que es un array de objetos de la clase Movie
// 3. Crear un fichero testImdb para probar esta clase creando un objeto de tipo Imdb.
// 4. Actualizar GIT con una nueva versión de la app.

import { Movie } from "./Movie";
export class Imdb {
    public peliculas: Movie[];
  
    constructor(peliculas: Movie[]) {
      this.peliculas = peliculas;
    }
  }
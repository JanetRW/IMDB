import { Imdb } from "./Professional";
import { Movie } from "./Professional";
import { Professional } from "./Professional";
import * as fs from 'node:fs';
let mymovie = new Movie("Pinocchio", 2022, "American", "Animación");
let mymovie2 = new Movie("Black Widow", 2021, "American", "Ciencia Ficción");
let mymovie3 = new Movie("Todo a la vez en todas partes", 2022, "American", "Comedia Dramática");

const imdb = new Imdb([mymovie, mymovie2, mymovie3]);

console.log(imdb.peliculas);

//////////////////////////// Paso 6: Lectura/Escritura en Fichero
// 3. Actualizar el GIT con una nueva versión de la app


// 1. Convertir a un string el objeto Imdb.
// - PISTA: JSON.stringify()
let imdbaString = JSON.stringify(imdb, null, 2); // El segundo argumento (null) y el tercero (2) son para dar formato legible al JSON.

// 2. Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
// - PISTA: fs.writeFileSync(file, data[, options])
fs.writeFileSync("imdbBBDD.json", imdbaString);

// 4. Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
// - PISTA: fs.readFileSync(path[, options])
// - PISTA: JSON.parse()
let data = fs.readFileSync("imdbBBDD.json", "utf-8");
let imdbFromJson = JSON.parse(data);

// La variable imdbFromJson ahora contiene la información almacenada en el archivo JSON y puede usarse como una instancia de la clase Imdb.
console.log(imdbFromJson.peliculas);
//Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades
//de la clase Profesional e inserte un nuevo profesional a una película del fichero
//“imdbBBDD.json”
//- PISTA: Buscar readLineSync

import * as fs from 'fs';
import readlineSync from "readline-sync"
import { Movie } from "./Movie2";
import { Professional } from "./Professional2";
import { Imdb } from "./Imdb2";
import { parse } from 'querystring';

function solicitaProfesional(): Professional {
    let name = readlineSync.question("Nombre: ");
    let age = Number(readlineSync.question("Edad: "));
    let weight = Number(readlineSync.question("Peso: "));
    let height = Number(readlineSync.question("Altura: "));
    let isRetired = readlineSync.keyInYN("Está retirado (true/false): ");
    let nationality = readlineSync.question("Nacionalidad: ");
    let oscarsNumber = Number(readlineSync.question("Número de Oscars: "));
    let profession = readlineSync.question("Profesión: ");

    return new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession)

}

function insertaProfesional(imdb: Imdb) {
    let peliculas = imdb.peliculas;
    console.log("Selecciona pelicula: ");
    peliculas.forEach((pelicula, index) =>{
        console.log(`${index + 1}. ${pelicula.title}`);
        
    })

    let seleccionar = readlineSync.questionInt("Selecciona la pelicula: ")

    let peliculaEscogida = peliculas[seleccionar - 1]
    let newProfesional = solicitaProfesional();
    peliculaEscogida.actors.push(newProfesional);

    let nuevoImdb = new Imdb(peliculas);
    nuevoImdb.escribirEnFicheroJSON("imdbBBDD.json");
    console.log("Profesional insertado");
}
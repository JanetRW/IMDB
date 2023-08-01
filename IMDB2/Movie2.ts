//Reto 3 
//Crear una clase que se llame Movie con los siguientes atributos Públicos.

import { Professional } from "./Professional2";

export class Movie{
    title: string
    releaseYear: number
    actors: Professional[]
    nationality: string
    director: Professional
    writer: Professional
    language: string
    plataforma: string
    isMCU: boolean
    mainCharacterName: string
    producer: string
    distributor: string
    genre: string


//Los únicos parámetros del constructor son: title, releaseYear, nationality y genre

    constructor(title: string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
        this.director = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
        this.writer = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
    }
    


//Crear un método PUBLICO que muestre todos los datos de las peliculas

public mostrarMovies():void{
    console.log("---------------------------------------")
    console.log(`Title: ${this.title}`);
    console.log("Release Year:", this.releaseYear);
    console.log("Actors:");
    this.actors.forEach((actor) => {
              console.log("-->" + actor.name);
              });
    console.log("Nacionality:", this.nationality);
    console.log("Director:");
     this.director.mostrarAtributos();
    console.log("Writer:");
     this.writer.mostrarAtributos();
    console.log("Language:", this.language);
    console.log("Plataforma:", this.plataforma);
    console.log("Is MCU:", this.isMCU);
    console.log("Main Character Name:", this.mainCharacterName);
    console.log("Producer:", this.producer);
    console.log("Distributor:", this.distributor);
    console.log("Genre:", this.genre);
  }
}
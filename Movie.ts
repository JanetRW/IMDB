//////////////////////////////// Paso 3: Clase Movie
// 1. Crear una clase que se llame Movie con los siguientes atributos Públicos.
// - title: string
// - releaseYear: number
// - actors: Professional[]
// - nacionality: string
// - director: Professional
// - writer: Professional
// - language: string
// - plataforma: string
// - isMCU: boolean
// - mainCharacterName: string
// - producer: string
// - distributor: string
// - genre: string
// 2. Los únicos parámetros del constructor son: title, releaseYear, nacionality y genre
// 3. Crear un método PUBLICO que muestre todos los datos de las peliculas
import { Professional } from "./professional";
export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
        //this.director = {} as Professional;//
        this.director = new Professional("", 0, 0, 0, false, "", 0, "");
        //this.writer = {} as Professional;//
        this.writer = new Professional("", 0, 0, 0, false, "", 0, "");
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
    }
        public mostrarMovies():void{
            console.log("---------------------------------------")
            console.log("Title:", this.title);
            console.log("Release Year:", this.releaseYear);
            console.log("Actors:");
            this.actors.forEach((actor) => {
              console.log("  -", actor.name, "(Profession:", actor.profession, ")");
            });
            console.log("Nacionality:", this.nacionality);
            console.log("Director:", this.director.name, "(Profession:", this.director.profession, ")");
            console.log("Writer:", this.writer.name, "(Profession:", this.writer.profession, ")");
            console.log("Language:", this.language);
            console.log("Plataforma:", this.plataforma);
            console.log("Is MCU:", this.isMCU);
            console.log("Main Character Name:", this.mainCharacterName);
            console.log("Producer:", this.producer);
            console.log("Distributor:", this.distributor);
            console.log("Genre:", this.genre);
          }
        }

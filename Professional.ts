////////////////////////// Paso 1: Clase Professional
// 1. El objetivo de este proyecto final es crear una BBDD de películas y guardar todo ello en un
// fichero en formato .json.
// 2. Crear un proyecto en GIT llamado IMDB para que contenga todos los ficheros del proyecto y
// compartirlo con todos los desarrolladores del equipo.
// 3. Crear una clase denominada Professional con los siguientes atributos públicos:
// - name: string
// - age: number
// - weight: number
// - height: number
// - isRetired: boolean
// - nationality: string
// - oscarsNumber: number
// - profession: string
// 4. Esta clase debe tener un constructor que incluirá en sus parámetros TODOS estos atributos
// 5. Esta clase tendrá un MÉTODO PUBLICO que muestre en consola el valor de TODOS sus atributos

export class Professional{
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
        
        constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nationality:string,oscarsNumber:number,profession:string){
            this.name =name;
            this.age  = age;
            this.weight =weight;
            this.height =height;
            this.isRetired =isRetired;
            this.nationality=nationality;
            this.oscarsNumber=oscarsNumber;
            this.profession=profession;
        }

        public mostrar(): void {
            console.log("--------------------------------------");
            console.log("Name:", this.name);
            console.log("Age:", this.age);
            console.log("Weight:", this.weight);
            console.log("Height:", this.height);
            console.log("Is Retired:", this.isRetired);
            console.log("Nationality:", this.nationality);
            console.log("Oscars Number:", this.oscarsNumber);
            console.log("Profession:", this.profession);
            console.log("--------------------------------------");
          }
}

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
        this.director = {} as Professional;
        this.writer = {} as Professional;
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

//         Paso 5: Clase Imdb
// 1. Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie
// 2. Debe tener un único atributo publico denominado películas que es un array de objetos de la clase Movie
// 3. Crear un fichero testImdb para probar esta clase creando un objeto de tipo Imdb.
// 4. Actualizar GIT con una nueva versión de la app.


export class Imdb {
    public peliculas: Movie[];
  
    constructor(peliculas: Movie[]) {
      this.peliculas = peliculas;
    }
  }
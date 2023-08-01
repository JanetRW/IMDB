//Reto 1

//Crear una clase denominada Professional con los siguientes atributos públicos

export class Professional{
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
        
//Esta clase debe tener un constructor que incluirá en sus parámetros TODOS estos atributos

    constructor(name:string, age:number, weight:number, height:number, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string){
        this.name= name;
        this.age= age;
        this.weight= weight;
        this.height= height;
        this.isRetired= isRetired;
        this.nationality= nationality;
        this.oscarsNumber= oscarsNumber;
        this.profession= profession;
    }

//Esta clase tendrá un MÉTODO PUBLICO que muestre en consola el valor de TODOS sus atributos

    public mostrarAtributos(): void {
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
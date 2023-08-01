//Paso2 
//Crear un archivo testProfessional.ts con varios objetos de la clase Professional y mostrar
//todos sus atributos usando el método anterior.

import { Professional } from "./Professional2";

let myprofessional1= new Professional("Chris Hemsworth",39,91,190,false,"australian",0,"Actor");
let myprofessional2= new Professional("Greta Gerwig",39,70,173,false,"american",0,"Director");
let myprofessional3= new Professional("Jennifer Lawrence",32,62,172,false,"american",1,"Actress");
let myprofessional4= new Professional("Bruce Willis",68,83,182,true,"american",0,"Actor");

  myprofessional1.mostrarAtributos();
  myprofessional2.mostrarAtributos();
  myprofessional3.mostrarAtributos();
  myprofessional4.mostrarAtributos();
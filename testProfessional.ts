// Paso 2: Fichero testProfessional.ts
// 1. Crear un archivo testProfessional.ts con varios objetos de la clase Professional y mostrar
// todos sus atributos usando el método anterior.
// 2. Actualizar el GIT con esta nueva versión de la app
// 3. No olvidad que los ficheros .js deben estar en el .gitignore.

import { Professional } from "./Professional";
let actor1 = new Professional("Ron Perlman",73, 90, 185, false, "American", 0, "Actor");
let actor2 = new Professional("David Bradley", 81, 75, 180, false, "British", 0, "Actor");
let director1 = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
let writer1 = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");

actor1.mostrar();
actor2.mostrar();
director1.mostrar();
writer1.mostrar();
// let myprofessional1=new Professional("Chris Hemsworth",39,91,190,false,"australian",0,"actor");
// let myprofessional2=new Professional("Regé-Jean Page",35,80,183,false,"zimbabwean",0,"actor");
// let myprofessional3=new Professional("Jennifer Lawrence",32,62,172,false,"american",1,"actress");
// let myprofessional4=new Professional("Bruce Willis",68,83,182,true,"american",0,"actor");
 // myprofessional1.mostrar();
  // myprofessional2.mostrar();
  // myprofessional3.mostrar();
  // myprofessional4.mostrar();

 
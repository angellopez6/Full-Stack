// class Espectador{
//     constructor(nombre, edad, money){
//         this.nombre = nombre || "";
//         this.money = money || 0.00;
//         this.edad = edad || null;
//     }

//     setName = (nombre) => this.nombre = nombre;
//     getName = () => this.nombre;

//     setDinero = (value) => this.money += value;
//     getDinero = () => this.money;

//     setEdad = (edad) => this.edad = edad;
//     getEdad = () => this.edad;

//     pagarEntrada(precio){
//         this.money -= precio;
//     }

//     tieneDinero = (precioEntrada) => this.money >= precioEntrada;

//     tieneEdad = (edadPermitida) => this.edad >= edadPermitida

//     getEspectador(){
//         return `Espectador Nombre: ${this.nombre}, Edad: ${this.edad}, Dinero: ${this.money}`;
//      }
// }

// class Peliculas{
//     constructor(titulo, duracion, edad_min, director){
//         this.titulo = titulo;
//         this.duracion = duracion;
//         this.edad_min = edad_min;
//         this.director = director;
//     }

    
//     setTitulo = (nombre) => this.titulo = nombre;
//     getTitulo = () => this.titulo;

//     setDuracion = (value) => this.duracion = value;
//     getDuracion = () => this.duracion;

//     setEdad_min = (edad) => this.edad_min = edad;
//     getEdad_min = () => this.edad_min;

//     setDirector = (nombre) => this.director = nombre;
//     getDirector = () => this.director;

//     getPelicula = () => `Titulo:${this.titulo}\nDuracion:${this.duracion} hrs\nEdad Minima:${this.edad_min}\nDirector:${this.director}`;
// }

// class Asiento{
//     constructor(letra, fila){
//         this.letra = letra;
//         this.fila = fila;
//         this.espectador = null;
//     }

//     setLetra = (letra) => this.letra = letra;
//     getLetra = () => this.letra;

//     setFila = (fila) => this.fila = fila;
//     getFila = () => this.fila;

//     setEspectador = (Espectador) => this.espectador = Espectador;
//     getEspectador = () => this.espectador;

//     ocupado = () => this.espectador != null;

//     getAsiento(){
//         if(this.ocupado()){
//             return `Asiento : ${this.fila} ${this.letra} y ${this.espectador.nombre}`;
//         }
//         return `Asiento : ${this.fila} ${this.letra} y este asiento esta vacio.`;
//     }
// }

// class Cinema{
//     constructor(filas, columnas, precio, pelicula){
//         this.asientos = [
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//             [[],[],[],[],[],[],[],[],[]],
//         ];
//         this.abecedario = ["A","B","C","D","E","F","G","H",
//                            "I","J","K","L","M","N","O","P",
//                            "Q","R","S","T","U","X","W","Y","Z"]
//         this.filas = filas;
//         this.columnas = columnas;
//         this.precio = precio;
//         this.pelicula = pelicula;
//         this.setAsiento();
//     }

//     setPrecio = (precio) => this.precio = precio;
//     getPrecio = () => this.precio;

//     setPelicula = (pelicula) => this.pelicula = pelicula;
//     getPelicula = () => this.pelicula;

//     setAsiento(){
//         // Crear butacas
//         for (let x = 0; x < this.filas; x++) {
//             for (let y = 0; y < this.columnas; y++) {
//                 this.asientos[x][y] = new Asiento(this.abecedario[y], x + 1);
//             }            
//         }
//     }
//     getAsiento(){
//         // Retornar butacas...
//         let matriz = "";
//         for (let x = this.asientos.length; x >= 1 ; x--) {
//             matriz += '\n';
//             // console.log(x)
//             for (let y = 0; y < this.asientos[x - 1].length; y++) {
//                 matriz += ` ${this.asientos[x-1][y].getFila()}${this.asientos[x-1][y].getLetra()}`;
//             }    
//         }
//         return matriz;
//     }

//     // Hay sitio...
//     haySitio(){
//         for (let x = this.asientos.length; x >= 1 ; x--) {
//             for (let y = 0; y < this.asientos[x - 1].length; y++) {
//                 if(!this.asientos[x-1][y].ocupado()){
//                     return true;
//                 }
//             }    
//         }
//         return false;
//     }

//     sePuedeSentar(espectador){
//         if(espectador.tieneDinero && espectador.tieneEdad(this.pelicula.getEdad_min())){
//             return true;
//         }
//         return false;
//     }


// }

// // let residentEvil = new Peliculas("Resident Evil", 2.30, 19, "Milla Jovovich"),
// //     theGreatGastby = new Peliculas();

// //     theGreatGastby.setTitulo("The Great Gastby")
// //     theGreatGastby.setDuracion(2.45);
// //     theGreatGastby.setEdad_min(18);
// //     theGreatGastby.setDirector(" F. Scott Fiztgerald")

// // console.log(residentEvil.getPelicula())
// // console.log(theGreatGastby.getPelicula())
// let asiento1 = new Asiento("A",1);
// asiento1.setEspectador(new Espectador("Angel",22,2.40))
// console.log(asiento1.getAsiento())
// console.log()
// let cinema = new Cinema(8, 9, 2.5, new Peliculas("Nemo", 2, 5, "Disney"));

// console.log(cinema.getAsiento())

// const Cine = () => {
//     return (
//         <div>
//             <h2>Cine en React</h2>
//         </div>
//     )
// }

// export default Cine;

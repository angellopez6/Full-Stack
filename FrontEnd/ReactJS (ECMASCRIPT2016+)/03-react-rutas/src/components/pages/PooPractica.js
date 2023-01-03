
// class Cuenta{
//     constructor(titular, cantidad){
//         if(!titular) return console.log("El titular es requerido...");
//         this.titular = titular;
//         this.cantidad = parseFloat(cantidad) || 0.00;
//     }

//     get(){
//         return console.log(`Titular: ${this.titular}, Cantidad: ${parseFloat(this.cantidad)}`);
//     }

//     set(cantidad){
//         if(parseFloat(cantidad) < 0) return console.log("La cantidad no puede ser negativa...")
//         return this.cantidad += parseInt(cantidad);
//     }

//     retirar(cantidad){
//         if((this.cantidad - parseFloat(cantidad)) < 0) return this.cantidad = 0;
//         return (this.cantidad -= cantidad);
//     }
// }

    // let cliente1 = new Cuenta("Angel",304.55),
    //     cliente2 = new Cuenta("Adrian",150.50);
    //     let opc = 0;
    //     cliente1.get()
    //     cliente2.get()
    //     try{
    //         cliente1.retirar(100);
    //         opc = 1;
    //         cliente2.set(100);
    //         opc = 2;
    //     }catch(err){
    //         console.log(err)
    //     }
    //     finally{
    //         console.log(opc)
    //         cliente1.get()
    //         cliente2.get()
    //     }


// class Libro{
//     constructor([isbn,titulo,autor,pag]){
//         this.isbn = isbn;
//         this.titulo = titulo;
//         this.autor = autor;
//         this.pag = pag;
//     }
//     setIsbn = (isbn) => this.isbn = isbn;
//     setTitulo = (titulo) =>   this.titulo = titulo;
//     setAutor = (autor) =>   this.autor = autor;
//     setPag = (pag) =>   this.pag = pag;

//     getIsbn = () => this.isbn;
//     getTitulo = () =>   this.titulo;
//     getAutor = () =>   this.autor;
//     getPag = () =>   this.pag;

//     toString(){
//         if(!this.isbn || !this.titulo) return "El libro no ha sido definido...";
//         return console.log(`El libro "${this.titulo}" creado por el autor "${this.autor}" tiene (${this.pag}) páginas`);
//     }

// }

    // let libro1 = new Libro([]),
    //     libro2 = new Libro(["976-AAE3-27BBI-27","El cangrejo que olvidó echar reversa","Luis Armando Zarruk Zarruk",180]);
    //     libro1.setIsbn("976-AAE3-27VVI-28");
    //     libro1.setTitulo("Pride and Perjuice");
    //     libro1.setAutor("Jane Austen");
    //     libro1.setPag(222)
    //     libro1.toString()
    //     libro2.toString();
    //     libro1.getPag() > libro2.getPag()
    //     ? console.log(`El libro1 tiene ${ libro1.getPag()} páginas y el libro2 tiene ${libro2.getPag()}, el Libro1 tiene más páginas`)
    //     : libro1.getPag() === libro2.getPag()
    //     ? console.log(`Tienen las mismas páginas...`)
    //     : console.log(`El libro1 tiene ${ libro1.getPag()} páginas y el libro2 tiene ${libro2.getPag()}, el Libro2 tiene más páginas`)
    //     // console.log();

const PooPractica = ()=>{


    return(
        <div>
            <h2>
                Práctica programación orientada a objetos.
            </h2>
        </div>
    );
}

export default PooPractica;
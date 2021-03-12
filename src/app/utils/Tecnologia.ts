export class Tecnologia {

    constructor(private nombre: string, private imagen: string,private aplicacion: string) {
        this.nombre = nombre;
    }

    mostrarDatos(){
        console.log(`${this.nombre} ${this.aplicacion}`);
    }

    
    public get getNombre() : string {
        return this.nombre
    }
    

    public get getImagen() : string {
        return this.imagen
    }
    
}
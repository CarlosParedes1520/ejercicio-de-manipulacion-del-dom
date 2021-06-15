// exporto esta clase
export class Todo {

    // {id, tarea, completado, creado} = se manda un objeto para desectructurar
    static fromJson({id, tarea, completado, creado}) { // combertir en objeto todo
        // creo una nueva instancia
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        return tempTodo;
    }
    
    constructor (tarea) {
        this.tarea = tarea;
        // me devuelve la fecha en numeros y me servira como id
        this.id = new Date().getTime(); // 52154154
        // this.completado = true;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}
 
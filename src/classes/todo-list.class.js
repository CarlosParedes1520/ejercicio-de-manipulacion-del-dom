import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        // cuando agregamos debemos guardar las modificaciones en localStorage
        this.guardarLocalStorage();
      
    }

    eliminarTodo( id ) {
    // metodo filter, se agrega un nuevo arreglo de todos excepto el todo q coincidan con el id
        this.todos = this.todos.filter(todo => todo.id != id )
        // cuando eliminamos debemos guardar las modificaciones en localStorage
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for (const todo of this.todos) {
            if (todo.id == id) {
                // console.log(`El id es ${id} `);
                todo.completado = !todo.completado;
               // cuando marcamos debemos guardar las modificaciones en localStorage
                this.guardarLocalStorage();
                break; 
            } 
        }
    }

    eliminarCompletados() {
        // quiero almacenar todos los Todos completados
        this.todos = this.todos.filter(todo => !todo.completado)
        // cuando eliminamos debemos guardar las modificaciones en localStorage
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        // convierto de objeto a json y guardo en el localStorage
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        // si en el localStorage existe el "todo" entonces
  /*      if (localStorage.getItem('todo')) {
            // transformo de string a json
            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('cargarLocal: ', this.todos);
        } else {
            this.todos = [];
        }

    */
        this.todos = (localStorage.getItem('todo')) ?  
        JSON.parse(localStorage.getItem('todo')) :  [];
    // map me permite barrer cada uno de los elementos q estan  
    // dentro de los elementos de un array y retorna sus elementos mutados
        this.todos = this.todos.map(obj => Todo.fromJson(obj)); 
    }


}
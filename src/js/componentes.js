import { Todo } from "../classes";

// importo la clase index donde tengo las importaciones js
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo)=>{

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		    <div class="view">
				<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
			    <label>${todo.tarea}</label>
				<button class="destroy"></button>
			</div>
	    <input class="edit" value="Create a TodoMVC template">
	</li>
    `
    const div =document.createElement('div');
    div.innerHTML = htmlTodo;

    // guardo el elemento hijo creado
    divTodoList.append(div.firstElementChild);


    return div.firstElementChild;

}


// Eventos
// Eventos keyup es cuando suelta la tecla
txtInput.addEventListener('keyup', (event) => {
    // 13 es el numero de code de la tecla enter
    if (event.keyCode === 13) {
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';  
    } 
});

//
divTodoList.addEventListener('click', (event) => {
    // console.log('click');
    // event.target.localName = saber q parte del elemento se hizo click
    console.log(event.target.localName);
    const nombreElemento = event.target.localName;
    // parentElement.parentElement == elemto superior o elemento padre
    const todoElemento = event.target.parentElement.parentElement;
    // obtener id de cada elemento li (todoElemento)
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoElemento);
    console.log(todoId);

    // Hizo click en el check
    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
    // referencias  a todas las clases, quitar y agregar clase
        todoElemento.classList.toggle('completed');
    }else if (nombreElemento.includes('button')) {
    // eliminar del array
        todoList.eliminarTodo(todoId);
    // eliminar elementos del html o dom, elimino el elemento q hago click
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);
});


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
    // eliminar de abajo hacia arriba

    for (let i = divTodoList.children.length-1; i >= 0 ; i--) {
        const elemento = divTodoList.children[i];
        console.log(elemento);

        // si tiene la clase completed se eliminar
        if (elemento.classList.contains('completed')) { // evaluo si la clase esta completed
            divTodoList.removeChild(elemento);   // elimino los elementos seleccionados del html
        }
        
    }
});

ulFiltros.addEventListener('click', (event) => {
    console.log(event.target.text);
    const filtro = event.target.text;
// console.log(!!filtro);
    if (!filtro) {
      return;  
    } 

    anchorFiltros.forEach(elem => elem.classList.remove('selected'))
    console.log(event.target);
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
         console.log(elemento);  
         elemento.classList.remove('hidden'); // estilo q esta en css
        // contiene el completed
         const completado = elemento.classList.contains('completed');

         switch (filtro) {
             case 'Pendientes':
                 if (completado) {
                    elemento.classList.add('hidden');
                 }
                 
             break;

             case 'Completados':
                 if (!completado) { //si no esta completado
                    elemento.classList.add('hidden');
                 }
                 
             break;
         }
    }

    
});

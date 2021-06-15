// exportacion global
import {Todo, TodoList} from './classes/index';
import './styles.css';

// isntancia del todo list
import {crearTodoHtml} from './js/componentes';
export const todoList = new TodoList();

console.log(todoList.todos);
// llamo el metodo donde estan los todos
 todoList.todos.forEach(todo => crearTodoHtml(todo));
 //const newTodo = new Todo('Aprender JavasCript');

//newTodo.imprimirClase();
  //  todoList.todos[0].imprimirClase(); 
 //todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos);


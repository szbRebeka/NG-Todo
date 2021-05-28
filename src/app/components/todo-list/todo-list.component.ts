import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo-interface";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    })
  }
  deleteByID(todo: Todo) {
    console.log("id: ", todo.id);
    this.todos = this.todos.filter(data => data.id != todo.id);
    this.todoService.removeTodo(todo).subscribe();
  }
  addTodo(todo: Todo) {
    this.todoService.sendTodo(todo).subscribe(data =>{
      console.log("got from server", data);
      this.todos.push(data);
    })
  }


}

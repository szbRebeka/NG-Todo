import { Component, OnInit } from '@angular/core';
import { TodoInterface } from "../../models/todo-interface";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos: TodoInterface[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    })
  }
  deleteByID(todo: TodoInterface) {
    console.log("id: ", todo.id)
    this.todos = this.todos.filter(data => data.id != todo.id);
    this.todoService.removeTodo(todo).subscribe();
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from "@angular/forms";
import { TodoService } from "../../service/todo.service";
import { TodoInterface } from "../../models/todo-interface";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();
  title: string;
  todos: TodoInterface[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
   /* const todo = {
      title: this.title,
      completed: false,
    }
    // @ts-ignore
    this.addTodo.emit(todo);*/
    this.todoService.sendTodo(form.value).subscribe(data =>
        this.todos.push(data)
        //console.log("sent for server: ",data);
    )
  }
}

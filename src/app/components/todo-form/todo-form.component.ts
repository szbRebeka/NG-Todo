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
  @Output() onAddTodo: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();
  title: string;
  completed: boolean;
  userId: number;
  id: number;
  todos: TodoInterface[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

    onSubmit(todoForm: NgForm) {
   /* const todo = {
      title: this.title,
      completed: false,
    }
    this.addTodo.emit(todo);*/
    //2.version
   /* this.todoService.sendTodo(form.value).subscribe(data =>
        this.todos.push(data)
        //console.log("sent for server: ",data);
      )
     */
    //3.version
     const newTodo = {
       title: this.title,
       completed: this.completed,
       userId: this.userId,
       id: this.id,
     }
     this.onAddTodo.emit(newTodo)
  }
}

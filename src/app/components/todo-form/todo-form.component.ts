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
  id: number;
  todos: TodoInterface[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

    onSubmit(todoForm: NgForm) {
     this.onAddTodo.emit(todoForm.value)
      console.log(todoForm.value)
  }
}

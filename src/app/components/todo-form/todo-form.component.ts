import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Todo } from "../../models/todo-interface";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  title: string;
  id: number;
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

    onSubmit(todoForm: NgForm) {
     this.onAddTodo.emit(todoForm.value)
      console.log(todoForm.value)
      todoForm.reset()
  }
}

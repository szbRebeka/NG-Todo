import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from "@angular/forms";
import { TodoInterface } from "../../models/todo-interface";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();
  title: string;
  id: number;
  todos: TodoInterface[];

  constructor() { }

  ngOnInit(): void {
  }

    onSubmit(todoForm: NgForm) {
     this.onAddTodo.emit(todoForm.value)
      console.log(todoForm.value)
      todoForm.reset()
  }
}

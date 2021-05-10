import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTodo: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    this.todoService.sendTodo(form.value).subscribe(data =>
        console.log("sent for server: ",data)
    )
  }

}

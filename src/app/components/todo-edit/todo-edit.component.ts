import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { TodoService } from "../../service/todo.service";
import { HeaderComponent } from "../header/header.component";
import { TodoInterface } from "../../models/todo-interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'todo-edit',
  templateUrl: 'todo-edit.component.html',
  styles: ['form { display: flex; justify-content: center}']
})
export class TodoEditComponent implements OnInit {
  title: string;
  id: number;
  todo: TodoInterface

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }


  ngOnInit(): void {
    this.route.params
        .pipe(
            tap(params => {
              this.id = params.id;
            }),
            switchMap(() => this.todoService.getTodos())
        )
        .subscribe( data => console.log('subscribe for', data)
        )
  }

  onSubmit(editForm: NgForm) {
    this.todoService.editTodo(this.id, this.todo).subscribe(() => {
      setTimeout(() => {
        this.router.navigate([""])
            .then(() => {
        })
      }, 1000)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { TodoService } from "../../service/todo.service";
import { TodoInterface } from "../../models/todo-interface";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'todo-edit',
  templateUrl: 'todo-edit.component.html',
  styles: ['form { display: flex; justify-content: center}']
})
export class TodoEditComponent implements OnInit {

  title: string
  id:number;
  todo: TodoInterface;


  constructor( private fb:FormBuilder, private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  editTodo: FormGroup = this.fb.group({
    editedTodo: [null,[
        Validators.required,
        Validators.minLength(6)
    ]]
  })

  ngOnInit(): void {
   /* this.route.params
        .pipe(
            tap(params => {
              this.id = params.id;
            }),
            switchMap(() => this.todoService.getTodos())
        )
        .subscribe( data => console.log('subscribe for', data)
        )*/
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.todoService.getTodoById(this.id).subscribe(res =>{
        this.todo = res
      })
    })
  }

  get overWrittenTodo(): AbstractControl | null {
    return this.editTodo.get('editedTodo');

  }

  onSubmit() {

    const overWritten: TodoInterface = {
      title: this.overWrittenTodo.value,
      id: this.id,
      completed: this.todo.completed
    }
    this.todoService.editTodo(overWritten).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.router.navigate([""])
            .then(() => {
            })
      }, 1000)
    })
  }
}

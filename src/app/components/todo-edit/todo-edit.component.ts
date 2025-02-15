import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { TodoService } from "../../service/todo.service";
import { Todo } from "../../models/todo-interface";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'todo-edit',
  templateUrl: 'todo-edit.component.html',
  styles: ['form { display: flex; justify-content: center}']
})
export class TodoEditComponent implements OnInit {
@Output() editValue: EventEmitter<Todo> = new EventEmitter<Todo>();
  title: string
  id:number;
  todo: Todo;


  constructor( private fb:FormBuilder, private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }



  editTodo: FormGroup = this.fb.group({
    editedTodo: [null, [
        Validators.required,
        Validators.minLength(6)
    ]]
  })

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.todoService.getTodoById(this.id).subscribe(res =>{
        this.todo = res
      })
    })
  }

  get overWrittenTodo(): AbstractControl {
    return this.editTodo.get('editedTodo');
  }

  onSubmit() {

    const overWritten: Todo = {
      title: this.overWrittenTodo.value,
      id: this.id,
      completed: this.todo.completed
    }
    console.log(overWritten)
    this.todoService.editTodo(overWritten).subscribe(res => {
      console.log(res);
      console.log(this.editTodo.value)
      setTimeout(() => {
        this.router.navigate([""])
            .then(() => {
            })
      }, 1000)
    })
  }
}

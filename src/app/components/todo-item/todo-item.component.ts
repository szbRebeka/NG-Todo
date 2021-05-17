import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoInterface} from "../../models/todo-interface";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoInterface;
  @Output() delete: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  setCompletedClass() {
    let completed = {
      todo: true,
      'completed': this.todo.completed
    }
    return completed;
  }

  completeTodo(todo){
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(data =>
    console.log("completed:", data));
  }
  deleteTodo(todo){
    this.delete.emit(todo);
  }

}

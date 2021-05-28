import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/todo-interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todo: HttpClient) { }
  todoURL: string = 'http://localhost:3000/todos'

  getTodos(): Observable<Todo[]> {
    return this.todo.get<Todo[]> (`${this.todoURL}`)
  }
  getTodoById(id: number): Observable<Todo> {
    return this.todo.get<Todo>(this.todoURL + `/${id}`)
  }

  updateTodo(todo: Todo): Observable<any> {
    const url = `${this.todoURL}/${todo.id}`
    return this.todo.put(url, todo, httpOptions );
  }
  removeTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoURL}/${todo.id}`;
    return this.todo.delete<Todo>(url, httpOptions);
  }
  sendTodo(todo: Todo): Observable<Todo> {
    return this.todo.post<Todo>(this.todoURL, todo, httpOptions);
  }
  /*editTodo(id: number, user: TodoInterface): Observable<TodoInterface> {
    return this.todo.put<TodoInterface>(this.todoURL + `/${id}`, user);
  }*/
  editTodo(todo: Todo): Observable<Todo>{
    console.log(todo)
    return this.todo.put<Todo>(this.todoURL+ `/${todo.id}`, todo)

  }

}

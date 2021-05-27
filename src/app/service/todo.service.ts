import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TodoInterface } from "../models/todo-interface";

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

  getTodos(): Observable<TodoInterface[]> {
    return this.todo.get<TodoInterface[]> (`${this.todoURL}`)
  }
  getTodoById(id: number): Observable<TodoInterface> {
    return this.todo.get<TodoInterface>(this.todoURL + `/${id}`)
  }

  updateTodo(todo: TodoInterface): Observable<any> {
    const url = `${this.todoURL}/${todo.id}`
    return this.todo.put(url, todo, httpOptions );
  }
  removeTodo(todo: TodoInterface): Observable<TodoInterface> {
    const url = `${this.todoURL}/${todo.id}`;
    return this.todo.delete<TodoInterface>(url, httpOptions);
  }
  sendTodo(todo: TodoInterface): Observable<TodoInterface> {
    return this.todo.post<TodoInterface>(this.todoURL, todo, httpOptions);
  }
  /*editTodo(id: number, user: TodoInterface): Observable<TodoInterface> {
    return this.todo.put<TodoInterface>(this.todoURL + `/${id}`, user);
  }*/
  editTodo(todo: TodoInterface): Observable<TodoInterface>{
    return this.todo.put<TodoInterface>(this.todoURL+ `/${todo.id}`, todo)
  }

}

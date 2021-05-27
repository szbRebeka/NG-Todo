import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "../components/todo-list/todo-list.component";
import { TodoEditComponent } from "../components/todo-edit/todo-edit.component";

const routes: Routes = [
  { path: '', component: TodoListComponent},
  { path: 'todo/:id', component: TodoEditComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

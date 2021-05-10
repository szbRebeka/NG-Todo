import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { HttpClientModule } from "@angular/common/http";
import { TodoFormComponent } from './components/todo-form/todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

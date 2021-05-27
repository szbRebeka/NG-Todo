import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { TodoFormComponent } from './components/todo-form/todo-form.component';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { AppRoutingModule } from "./routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    HeaderComponent,
    TodoEditComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatToolbarModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

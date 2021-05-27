import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'todo-header',
  template: `
    <mat-toolbar routerLink="" color="primary">
      Todo List
    </mat-toolbar>
  `,
  styles: ['mat-toolbar {cursor: pointer}']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  template: `
    <mat-toolbar color="primary">
      Todo List
    </mat-toolbar>
  `,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

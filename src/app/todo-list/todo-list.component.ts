import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface Todo {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];

  @Output() handleDeleteTodo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

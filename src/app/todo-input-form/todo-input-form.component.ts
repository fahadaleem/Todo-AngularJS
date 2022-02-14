import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-input-form',
  templateUrl: './todo-input-form.component.html',
  styleUrls: ['./todo-input-form.component.css'],
})
export class TodoInputFormComponent implements OnInit {
  constructor() {}
  count = 1;
  @Output() handleAddTodo = new EventEmitter();
  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    const { todo } = form.value;
    if (!todo) {
      alert('Enter Todo');
      return;
    }

    this.handleAddTodo.emit({
      id: this.count++,
      todo,
    });

    form.resetForm();
  }
}

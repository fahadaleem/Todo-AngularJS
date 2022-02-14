import { Component } from '@angular/core';
interface Todo {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  todos: Todo[] = [];

  handleAddTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }

  handleDeleteTodo(id: number): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}

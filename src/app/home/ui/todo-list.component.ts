import { Component, input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <mat-list role="list">
      @for (todo of todos(); track todo.id) {
        <mat-list-item>
          <span routerLink="/detail/{{ todo.id }}">{{ todo.title }}</span>
        </mat-list-item>
      } @empty {
        <mat-list-item>Nothing Todo!</mat-list-item>
      }
    </mat-list>
  `,
  imports: [RouterLink, MatListModule],
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
}

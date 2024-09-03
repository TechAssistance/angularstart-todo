import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from '../shared/data-access/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `@if (todo(); as todo) {
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
      <button (click)="completeTodo(todo.id)">Complete Todo</button>
    } @else {
      <p>Could not find todo...</p>
    }`,
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  constructor(private router: Router) {}

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id')),
  );

  completeTodo(id: string) {
    this.todoService.removeTodo(id);
    this.router.navigate(['/home']);
  }
}

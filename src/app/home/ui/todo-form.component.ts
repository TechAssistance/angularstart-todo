import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
      class="example-form"
    >
      <mat-form-field class="example-full-width">
        <mat-label>Title</mat-label>
        <input
          matInput
          type="text"
          formControlName="title"
          placeholder="Ex: Do the dishes"
        />
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <mat-label>Description</mat-label>
        <input
          matInput
          type="text"
          formControlName="description"
          placeholder="description..."
        />
      </mat-form-field>
      <button mat-raised-button [disabled]="!todoForm.valid" type="submit">
        Add todo
      </button>
    </form>
  `,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  todoSubmitted = output<CreateTodo>();

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}

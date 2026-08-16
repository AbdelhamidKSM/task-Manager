import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSignal = signal([
    {
      id: 1,
      title: 'Learn Angular Basics',
      description: 'Understand Components, Services , Signals , and Routing  ',
      completed: true,
      createdAt: new Date('2026-06-01'),
    },
    {
      id: 2,
      title: 'Learn Java  Basics',
      description: 'Understand new Tech in Java 21 ',
      completed: false,
      createdAt: new Date('2026-06-23'),
    },
  ]);
  tasks = this.tasksSignal.asReadonly();

  getTask(id : number) {
    return this.tasks().find(task => task.id === id);
  }
}


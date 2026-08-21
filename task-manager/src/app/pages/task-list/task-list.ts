import { Component, computed, inject, signal } from '@angular/core';
import { Task, TaskService } from '../../services/task-service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(TaskService);
  filter = signal<'all' | 'completed' | 'active'>('all');
  searchTerm = signal('');

  filteredTasks = computed(() => {
    let tasks: Task[];

    switch (this.filter()) {
      case 'completed':
        tasks= this.taskService.completedTasks();
        break;
      case 'active':
        tasks= this.taskService.activeTasks();
        break;

      default:
        tasks= this.taskService.tasks();
        break;
    }
    const term = this.searchTerm().toLowerCase();
    return term
      ? tasks.filter((task:Task) => task.title.toLowerCase().includes(term))
      : tasks;

  });

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  setFilter(filter: 'all' | 'completed' | 'active') {
    this.filter.set(filter);
  }

  toggleComplete(id: number) {
    this.taskService.toggleComplete(id);
  }
}

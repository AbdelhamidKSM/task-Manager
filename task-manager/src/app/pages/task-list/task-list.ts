import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService=inject(TaskService)

}

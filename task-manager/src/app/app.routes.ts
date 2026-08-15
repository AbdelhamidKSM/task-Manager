import { Routes } from '@angular/router';
import { TaskList } from './pages/task-list/task-list';
import { TaskDetails } from './pages/task-details/task-details';

export const routes: Routes = [
  {
    path: '',
    component: TaskList,
  },
  {
    path: 'add-task',
    component: TaskDetails,
  },
  {
    path: 'task/:id',
    component: TaskDetails,
  },
];

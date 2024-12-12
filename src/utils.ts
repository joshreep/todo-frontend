import { Color, Task, TaskInput } from './types';

export function hydrateTask(
  title: string,
  color: Color,
  task?: Task,
): TaskInput {
  if (task) {
    return { title, color, completed: task.completed, id: task.id };
  }
  return { title, color, completed: false };
}

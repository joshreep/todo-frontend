// utils
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// enums
export enum Color {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  Indigo = 'indigo',
  Purple = 'purple',
  Pink = 'pink',
  Brown = 'brown',
}

// types
export interface Task {
  id: number;
  title: string;
  color: Color;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TaskInput = Omit<PartialBy<Task, 'id'>, 'createdAt' | 'updatedAt'>;

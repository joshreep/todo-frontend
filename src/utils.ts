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

export async function makeRequest(
  request: Request | null,
  fetcher: (data?: Task) => Promise<Response>,
) {
  try {
    if (request) {
      const data = await request.json();
      const res = await fetcher(data);

      return Response.json(await res.json());
    } else {
      const res = await fetcher();
      return Response.json(await res.json());
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

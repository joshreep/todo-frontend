import { Task } from '@/types';

export async function POST(request: Request) {
  return makeRequest(request, (data) =>
    fetch(`${process.env.BACKEND_URL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  );
}

export async function PUT(request: Request) {
  return makeRequest(request, (data) =>
    fetch(`${process.env.BACKEND_URL}/tasks/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  );
}

export async function DELETE(request: Request) {
  return makeRequest(request, (data) =>
    fetch(`${process.env.BACKEND_URL}/tasks/${data.id}`, {
      method: 'DELETE',
    }),
  );
}

async function makeRequest(
  request: Request,
  fetcher: (data: Task) => Promise<Response>,
) {
  try {
    const data = await request.json();

    const res = await fetcher(data);

    return Response.json(await res.json());
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

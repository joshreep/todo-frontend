import { makeRequest } from '@/utils';

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

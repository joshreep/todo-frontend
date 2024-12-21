export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    const data = await fetch(`${process.env.BACKEND_URL}/tasks/search/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return Response.json(await data.json());
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

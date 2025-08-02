import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const date = formData.get('date') as string;
  
  if (!date) {
    return redirect('/');
  }
  
  const [year, month, day] = date.split('-');
  
  return redirect(`/date/${year}/${month}/${day}`);
};
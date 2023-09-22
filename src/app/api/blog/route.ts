import { supabase } from '@/utils/supabaseClient';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// 全記事取得用API
export const GET = async (req: Request, res: NextApiResponse) => {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
};

// 新規投稿API
export const POST = async (req: Request, res: NextApiResponse) => {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, {status: 201});
};

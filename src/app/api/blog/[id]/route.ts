import { supabase } from '@/utils/supabaseClient';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

// 詳細記事取得用API
export const GET = async (req: Request, res: Response) => {
  // 対象要素を起点に分割された2つの要素を含む配列が返される(前が[0], 後が[1]となる)
  const id = req.url?.split('/blog/')[1];
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();

  if (error) return NextResponse.json(error);
  if (!data) {
    notFound();
  }

  return NextResponse.json(data);
};

// 削除用API
export const DELETE = async (req: Request, res: Response) => {
  const id = req.url?.split('/api/')[1];

  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) return NextResponse.json(error);

  return NextResponse.json({ message: 'Deleted successfully' });
};

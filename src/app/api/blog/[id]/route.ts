import { supabase } from '@/utils/supabaseClient';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

// 詳細記事取得用API
// `/api/blog/${id}`エンドポイントのGETリクエストの処理をNext.jsが自動認識する
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
// `/api/blog/${id}`エンドポイントのDELETEリクエストの処理をNext.jsが自動認識する
export const DELETE = async (req: Request, res: Response) => {
  const id = req.url?.split('/blog/')[1];

  const { error: deleteError } = await supabase.from('posts').delete().eq('id', id);
  if (deleteError) return NextResponse.json(deleteError);

  return NextResponse.json({status: 200});
};

import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';
import { notFound } from 'next/navigation';

// 各記事を取得するAPI
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // クエリURLパラメータに含まれるid
  const { id } = req.query;

  // ➀ 'posts'テーブルから'全て'を選択、data変数に格納
  // ➁ .eq('id', id) -> 'postsテーブル内のid'と上記で定義した'URLパラメータ内のid'の一致判定
  // ➂ .single() -> 1つのレコードのみ取得。未付与の場合、複数のレコード(配列)として返す
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!data) {
    notFound();
  }

  return res.status(200).json(data);
};

export default handler;
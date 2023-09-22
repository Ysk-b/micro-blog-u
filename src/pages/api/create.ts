import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';
import { notFound } from 'next/navigation';

// 新規投稿用API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // HTTP POSTリクエストのボディから抽出
  const { id, title, content } = req.body;

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createAt: new Date().toISOString() }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json(data);
};

export default handler;

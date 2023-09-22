// import { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '../../utils/supabaseClient';

// // supaBaseに存在する全記事を取得
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // supaBase query実行: 'posts'テーブルから'全て'を選択し、data変数に格納
//   const { data, error } = await supabase.from('posts').select('*');

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }
//   return res.status(200).json(data);
// };

// export default handler;

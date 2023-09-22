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


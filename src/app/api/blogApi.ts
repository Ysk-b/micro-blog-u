// 全記事取得のAPI
import { resolve } from 'path';
import { ArticleProps } from '../types/types';

// API作成
// 非同期関数は通常Promiseオブジェクトを返す -> 返すオブジェクトの型定義
export const getAllArticles = async (): Promise<ArticleProps[]> => {
  // SSR -> cache: no-store
  // SSG -> cache: force-cache(default setting)
  // ISR -> next: {revalidate: 10} revalidate: duration
  const res = await fetch('http://localhost:3001/posts', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));

  const articles = await res.json();
  return articles;
};

import { ArticleProps } from '../types/types';
import {notFound} from 'next/navigation'
 
// ➀ 全記事取得のAPI
export const getAllArticles = async (): Promise<ArticleProps[]> => {
  // SSR -> cache: no-store
  // SSG -> cache: force-cache(default setting)
  // ISR -> next: {revalidate: 10} revalidate: duration
  // 非同期関数は通常Promiseオブジェクトを返す -> 返すオブジェクトの型定義
  const res = await fetch('http://localhost:3001/posts', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));

  const articles = await res.json();
  return articles;
};

// ➁ 詳細記事取得のAPI
export const getEachArticle = async (id: string): Promise<ArticleProps> => {
  // zenn.dev/cybozu_frontend/articles/next-caching-revalidate
  // 更新頻度低 -> ISR
  const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } });

  // 404ページ遷移
  if (res.status === 404) {
    notFound()
  }

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));

  const article = res.json();
  return article;
};

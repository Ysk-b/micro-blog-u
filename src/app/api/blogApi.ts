import { ArticleProps } from '../types/types';
import { notFound } from 'next/navigation';

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
    notFound();
  }

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));

  const article = res.json();
  return article;
};

// ➂ ブログ投稿用のAPI
// 新しいブログ記事を作成し、サーバーに送信する為の記述
export const createArticle = async (
  id: string,
  title: string,
  content: string,
): Promise<ArticleProps> => {
  const currentDateTime = new Date().toISOString();

  // fetch(url, options)
  // url: 通信を行う対象のURL, 
  // options: HTTPメソッド、header, req body..をオブジェクト形式で記載
  const res = await fetch('http://localhost:3001/posts/', {
    method: 'POST',
    // JSON形式データの送信を示すcontent-typeをheadersに指定
    headers: { 'Content-Type': 'application/json' },
    // 新しいブログ記事の情報をJSON形式の文字列に変換し、POST reqと送信
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  });

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
};
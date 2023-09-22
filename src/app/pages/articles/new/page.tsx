'use client';

import { createArticle } from '@/app/api/blogApi';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // 新規投稿APIを叩く
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/create`, {
      method: 'POST',
      // JSON形式のデータ送信を明示
      headers: {
        'Content-Type': 'application/json',
      },
      // create.tsで定義したid, title, contnetを、JSON形式に変換してreqのbodyに設定
      // APIサーバーがreqを処理することで、新規投稿が作成される
      body: JSON.stringify({ id, title, content }),
    });

    // 引数: ユーザーが入力した内容 = onChange/更新関数で更新された状態変数
    // await createArticle(id, title, content);
    setLoading(false);

    router.push('/');
    router.refresh();
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>Create Article</h2>

      <form className='bg-slate-200 p-6 rounded shadow-lg' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button
          type='submit'
          className={classNames(
            'py-2 px-4 border rounded-md text-white font-semibold focus:outline-none',
            {
              'bg-orange-300 cursor-not-allowed': loading,
              'bg-orange-400 hover:bg-orange-500': !loading,
            },
          )}
          // loading時ボタンを無効化
          disabled={loading}
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;

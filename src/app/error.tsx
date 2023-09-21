'use client';

import { useEffect } from 'react';
// Errorがthrowされた時、Error.tsxに記載の内容が自動で表示される
// nextjs.org/docs/app/building-your-application/routing/error-handling
interface resetProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: resetProps) => {
  // 初回レンダリング時、errorの変数変更時にコンソール表示
  useEffect(() => {
    console.error(error);
  }, [error]);

  <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 rounded shadow-md max-w-md mx-auto'>
    <h3 className='font-bold mb-2'>エラー</h3>
    <p>エラーが発生しました。</p>
    <button
      onClick={() => reset()}
      className='bg-red-600 text-white mt-2 px-4 py-2 rounded hover:bg-red-500 transition ease-in-out duration-200'
    >
      もう一度試す
    </button>
  </div>;
};

export default Error;

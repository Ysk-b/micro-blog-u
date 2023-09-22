'use client';

import { deleteArticle } from '@/app/api/api_json';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    // await deleteArticle(id);

    // 投稿削除用APIを叩く
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/blog/${id}`, {
      method: 'DELETE',
    });

    router.push('/');
    router.refresh();
  };

  return (
    <button onClick={handleDelete} className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5'>
      削除
    </button>
  );
};

export default DeleteButton;

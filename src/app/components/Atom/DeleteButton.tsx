'use client';

import { deleteArticle } from '@/app/api/blogApi';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id);

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

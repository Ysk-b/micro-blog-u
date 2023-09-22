import { ArticleProps } from '@/types/types';
import Image from 'next/image';

interface ArticleCardProps {
  article: ArticleProps;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='flex flex-col shadow my-4' key={article.id}>
      <a href={`articles/${article.id}`} className='hover:opacity-75'>
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=''
          width={1280}
          height={300}
        />
      </a>
      <div className='bg-white flex flex-col justify-start p-6'>
        <a
          href={`articles/${article.id}`}
          className='text-blue-700 text-sm font-bold uppercase pb-4'
        >
          Technology
        </a>
        <a href={`articles/${article.id}`} className='text-3xl font-bold hover:text-gray-700 pb-4'>
          {article.title}
        </a>
        <p className='text-sm pb-3'>
          By{' '}
          <a href={`articles/${article.id}`} className='font-semibold hover:text-gray-800'>
            David Grzyb
          </a>
          Published on {new Date(article.createdAt).toLocaleString()}
        </p>
        <a href={`articles/${article.id}`} className='pb-6'>
          {article.content.length > 70 ? article.content.substring(0, 70) + '...' : article.content}
        </a>
        <a href={`articles/${article.id}`} className='uppercase text-gray-800 hover:text-black'>
          Continue Reading <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;

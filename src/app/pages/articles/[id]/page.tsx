import { getEachArticle } from '@/app/api/blogApi';
import Image from 'next/image';

const Article = async ({ params }: { params: { id: string } }) => {

  // 引数として渡すparams.idでAPIコール
  const eachArticle = await getEachArticle(params.id);

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${eachArticle.id}`}
        width={1280}
        height={300}
        alt=''
      />
      <h1 className='text-4xl text-center mb-10 mt-10'>{eachArticle.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{eachArticle.content}</p>
      </div>
      <div className='text-right mt-3'></div>
    </div>
  );
};

export default Article;

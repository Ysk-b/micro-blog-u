import { deleteArticle, getEachArticle } from '@/app/api/blogApi';
import DeleteButton from '@/app/components/Atom/DeleteButton';
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
      <div className='text-right mt-3'>
        {/* 削除用の関数はCSRである必要 → 外部コンポ―ネントとして切り出して処理 */}
        <DeleteButton id={eachArticle.id} />
      </div>
    </div>
  );
};

export default Article;

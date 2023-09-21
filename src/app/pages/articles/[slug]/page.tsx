import Image from 'next/image';

const Article = ({ params }: { params: { id: string } }) => { 
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500`}
        width={1280}
        height={300}
        alt=''
      />
      <h1 className='text-4xl text-center mb-10 mt-10'>title</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>content</p>
      </div>
      <div className='text-right mt-3'></div>
    </div>
  );
};

export default Article;

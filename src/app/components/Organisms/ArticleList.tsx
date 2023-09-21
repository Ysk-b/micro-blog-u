import { ArticleProps } from '@/app/types/types';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: ArticleProps[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </>
  );
};

export default ArticleList;

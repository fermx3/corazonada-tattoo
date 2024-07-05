import { getBlogPosts } from '@/lib/actions';
import CardContent from '../cards/card-content';
import CardsContainer from '../cards/cards-container';

export default async function BlogGrid() {
  const blogPosts = await getBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className='text-center mt-10'>
        <p className='text-3xl'>No se encontraron entradas del blog.</p>
      </div>
    );
  }

  return (
    <CardsContainer>
      {blogPosts.map((post, index) => (
        <CardContent
          key={index}
          title={post.title}
          desc={post.excerpt}
          image={post.image}
          url={`/blog/${post.slug}`}
        />
      ))}
    </CardsContainer>
  );
}

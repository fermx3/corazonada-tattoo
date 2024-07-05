import CardContent from '../cards/card-content';
import CardsContainer from '../cards/cards-container';

const blogPosts = [
  {
    title: 'Post 1',
    content: 'This is the content of post 1',
    image: 'https://picsum.photos/300/400',
    url: '#',
  },
  {
    title: 'Post 2',
    content: 'This is the content of post 2',
    image: 'https://picsum.photos/300/400',
    url: '#',
  },
];

export default function BlogSection() {
  return (
    <section className='min-h-dvh bg-green-secondary p-10 py-20' id='blog'>
      <h2 className='text-center text-5xl text-white'>Blog</h2>
      <div className='max-w-screen-lg m-auto'>
        <CardsContainer>
          {blogPosts.map((post, index) => (
            <CardContent
              key={index}
              title={post.title}
              desc={post.content}
              image={post.image}
              url={post.url}
            />
          ))}
        </CardsContainer>
      </div>
    </section>
  );
}

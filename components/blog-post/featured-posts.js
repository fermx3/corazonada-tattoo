import Button from '../button/button';

export default function FeaturedPosts({ featuredPosts, postSlug }) {
  const featuredPostsFiltered = featuredPosts.filter(
    (post) => post.slug !== postSlug
  );

  if (featuredPostsFiltered.length === 0) {
    return null;
  }

  return (
    <div className='my-5'>
      <h2 className='text-2xl font-bold mb-2'>Posts destacados</h2>
      {featuredPostsFiltered.map((post) => (
        <div
          key={post.slug}
          className='flex flex-col gap-2 shadow-lg p-4 rounded-lg bg-soft-pink'
        >
          <p className='text-lg font-bold'>{post.title}</p>
          <p className='text-sm'>{post.excerpt.slice(0, 100)}...</p>
          <Button href={`/blog/${post.slug}`}>Leer más</Button>
        </div>
      ))}
    </div>
  );
}

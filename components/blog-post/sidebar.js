import PostLikes from './post-likes';
import Button from '../button/button';
import { addLikeToPost, getFeaturedPosts } from '../../lib/actions';
import FeaturedPosts from './featured-posts';

// force this component to be dynamic (no caching)
export const dynamic = 'force-dynamic';

const handleLike = async (slug) => {
  'use server';
  await addLikeToPost(slug);
};

const posts = await getFeaturedPosts();

export default function SideBar({ post, postSlug }) {
  return (
    <div className='md:col-span-1 col-span-2 mb-5 flex flex-wrap gap-5 justify-center h-fit'>
      <PostLikes likes={post.likes} slug={post.slug} handleClick={handleLike} />
      <FeaturedPosts featuredPosts={posts} postSlug={postSlug} />
      <Button href='/blog' buttonType='secondary'>
        Todos los posts
      </Button>
    </div>
  );
}

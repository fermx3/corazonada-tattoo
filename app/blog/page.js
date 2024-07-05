import BlogGrid from '@/components/blog-section/blog-grid';
import PageLayout from '@/components/layout/page-layout';

export default function BlogPage() {
  return (
    <PageLayout titulo='Blog'>
      <BlogGrid />
    </PageLayout>
  );
}

import { Suspense } from 'react';

import BlogGrid from '@/components/blog-section/blog-grid';
import PageLayout from '@/components/layout/page-layout';
import Loader, { LOADER_TYPE_CLASSES } from '@/components/ui/loader';
import LoaderWithContainer from '@/components/ui/loader-with-container';

export default function BlogPage() {
  return (
    <PageLayout titulo='Blog'>
      <Suspense fallback={<LoaderWithContainer />}>
        <BlogGrid />
      </Suspense>
    </PageLayout>
  );
}

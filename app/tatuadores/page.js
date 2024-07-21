import { Suspense } from 'react';

import PageLayout from '@/components/layout/page-layout';
import TatuadoresInvitadosGrid from '@/components/tatuadores-invitados-section/tatuadores-invitados-grid';
import LoaderWithContainer from '@/components/ui/loader-with-container';

export default function TatuadoresPage() {
  return (
    <PageLayout titulo='Tatuadores'>
      <Suspense fallback={<LoaderWithContainer />}>
        <TatuadoresInvitadosGrid />
      </Suspense>
    </PageLayout>
  );
}

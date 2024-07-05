import PageLayout from '@/components/layout/page-layout';
import TatuadoresInvitadosGrid from '@/components/tatuadores-invitados-section/tatuadores-invitados-grid';

export default function TatuadoresPage() {
  return (
    <PageLayout titulo='Tatuadores'>
      <TatuadoresInvitadosGrid />
    </PageLayout>
  );
}

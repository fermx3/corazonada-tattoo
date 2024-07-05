import { getTatuadoresInvitados } from '@/lib/actions';
import CardContent from '../cards/card-content';
import CardsContainer from '../cards/cards-container';

export default async function TatuadoresInvitadosGrid() {
  const tatuadoresInvitados = await getTatuadoresInvitados();
  return (
    <CardsContainer>
      {tatuadoresInvitados.map((tatuador, index) => (
        <CardContent
          key={index}
          title={tatuador.name}
          desc={tatuador.desc}
          image={tatuador.image}
          url={`/tatuadores/${tatuador.slug}`}
        />
      ))}
    </CardsContainer>
  );
}

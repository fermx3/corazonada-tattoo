import { getTatuadoresInvitados } from '@/lib/actions';
import CardContent from '../cards/card-content';
import CardsContainer from '../cards/cards-container';

export default async function TatuadoresInvitadosGrid() {
  const tatuadoresInvitados = await getTatuadoresInvitados();

  if (tatuadoresInvitados.length === 0)
    return (
      <div className='text-center mt-10'>
        <p className='text-3xl'>
          Pronto verás aquí a nuestros artistas invitados.
        </p>
      </div>
    );

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

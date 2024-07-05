import BigCard from '../cards/big-card';
import ContactoForm from './contacto-form';

export default function ContactoSection() {
  return (
    <section
      id='contacto'
      className='min-h-dvh bg-contacto bg-no-repeat bg-cover flex items-center justify-center py-32'
    >
      <BigCard>
        <h2 className='text-4xl mb-2'>Contacto</h2>
        <p className='mb-6'>
          ¿Tienes alguna pregunta o comentario? ¡Escríbenos! Estamos aquí para
          ayudarte.
        </p>
        <ContactoForm />
      </BigCard>
    </section>
  );
}

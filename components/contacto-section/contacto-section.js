import BigCard from '../cards/big-card';

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
        <form>
          <input type='text' placeholder='Nombre' className='w-full p-2 my-2' />
          <input type='email' placeholder='Email' className='w-full p-2 my-2' />
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            placeholder='Mensaje'
            className='w-full p-2 my-2'
          ></textarea>
          <button className='w-full bg-pink-accent text-white p-2 my-2'>
            Enviar
          </button>
        </form>
      </BigCard>
    </section>
  );
}

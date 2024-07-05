'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactoSchema } from '../../lib/schemas';
import { onSubmitContactForm } from '@/lib/actions';
import { useState } from 'react';

export default function ContactoForm() {
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: '',
    },
    resolver: zodResolver(contactoSchema),
  });

  const onSubmit = async (data) => {
    setMessage('');
    const response = await onSubmitContactForm(data);
    if (response.status === 200) {
      setMessage('Informacion enviada correctamente');
    } else {
      setMessage('Error al enviar la informacion');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Nombre'
        className={`w-full p-2 my-2 ${
          errors.nombre ? 'border-red-500 border-2 border-solid rounded' : ''
        }`}
        {...register('nombre')}
      />
      {errors.nombre && (
        <p className='text-red-500'>{errors.nombre?.message}</p>
      )}
      <input
        type='email'
        placeholder='Email'
        className={`w-full p-2 my-2 ${
          errors.email ? 'border-red-500 border-2 border-solid rounded' : ''
        }`}
        {...register('email')}
      />
      {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
      <textarea
        name='message'
        id='message'
        cols='30'
        rows='10'
        placeholder='Mensaje'
        className={`w-full p-2 my-2 ${
          errors.mensaje ? 'border-red-500 border-2 border-solid rounded' : ''
        }`}
        {...register('mensaje')}
      ></textarea>
      {errors.mensaje && (
        <p className='text-red-500'>{errors.mensaje?.message}</p>
      )}
      <button
        type='submit'
        className={`w-full bg-pink-accent text-white p-2 my-2 ${
          isSubmitting
            ? 'cursor-not-allowed bg-slate-700 flex justify-center'
            : ''
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando' : 'Enviar'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

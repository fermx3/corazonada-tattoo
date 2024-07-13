'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactoSchema } from '../../lib/schemas';
import { onSubmitContactForm } from '@/lib/actions';
import { useState } from 'react';
import Loader from '../ui/loader';
import Button from '../button/button';

import { motion } from 'framer-motion';
import { frameVariants, slideDownVariants } from '@/lib/framer-variants';

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
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      variants={frameVariants}
      initial='hidden'
      whileInView='visible'
    >
      <motion.input
        type='text'
        placeholder='Nombre'
        className={`w-full p-2 my-2 rounded-md ${
          errors.nombre ? 'border-red-500 border-2 border-solid rounded-md' : ''
        }`}
        {...register('nombre')}
        variants={slideDownVariants}
      />
      {errors.nombre && (
        <p className='text-red-500'>{errors.nombre?.message}</p>
      )}
      <motion.input
        type='email'
        placeholder='Email'
        className={`w-full p-2 my-2 rounded-md ${
          errors.email ? 'border-red-500 border-2 border-solid rounded-md' : ''
        }`}
        {...register('email')}
        variants={slideDownVariants}
      />
      {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
      <motion.textarea
        name='message'
        id='message'
        cols='30'
        rows='10'
        placeholder='Mensaje'
        className={`w-full p-2 my-2 rounded-md ${
          errors.mensaje
            ? 'border-red-500 border-2 border-solid rounded-md'
            : ''
        }`}
        {...register('mensaje')}
        variants={slideDownVariants}
      ></motion.textarea>
      {errors.mensaje && (
        <p className='text-red-500'>{errors.mensaje?.message}</p>
      )}
      <div className={`w-full text-white my-2`}>
        <Button
          type='submit'
          disabled={isSubmitting}
          buttonType={isSubmitting ? 'disabled' : 'primary'}
        >
          {isSubmitting && (
            <span className='mr-2'>
              <Loader />
            </span>
          )}
          {isSubmitting ? 'Enviando' : 'Enviar'}
        </Button>
      </div>
      {message && <p>{message}</p>}
    </motion.form>
  );
}

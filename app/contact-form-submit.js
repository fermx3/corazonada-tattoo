'use server';

import { contactoSchema } from '@/lib/schemas';
import { MongoClient } from 'mongodb';

export async function onSubmitContactForm(data) {
  const parsed = contactoSchema.safeParse(data);
  if (!parsed.success) {
    return {
      status: 400,
      body: parsed.error.errors,
    };
  }

  try {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('corazonada_tattoo');
    const collection = db.collection('contactos');

    await collection.insertOne(parsed.data);

    client.close();
  } catch (error) {
    return {
      status: 500,
      body: 'Error connecting to the database',
    };
  }

  return {
    status: 200,
    body: 'Informacion enviada correctamente',
  };
}

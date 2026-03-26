'use server';

import { MongoClient } from 'mongodb';
import { revalidatePath } from 'next/cache';

export const getTatuadoresInvitados = async () => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('tatuadores');

  try {
    const tatuadores = await collection
      .find({ privado: { $ne: true } })
      .toArray();
    client.close();
    return tatuadores;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const getAllTatuadores = async () => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('tatuadores');

  try {
    const tatuadores = await collection.find({}).toArray();
    client.close();
    return tatuadores;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const getTatuador = async (slug) => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('tatuadores');

  try {
    const tatuador = await collection.findOne({ slug });
    client.close();
    return tatuador;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const getBlogPosts = async () => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('blogposts');

  try {
    const blogPosts = await collection.find({}).toArray();
    client.close();
    return blogPosts;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const getFeaturedPosts = async () => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('blogposts');

  try {
    const blogPosts = await collection.find({ featured: true }).toArray();
    client.close();
    return blogPosts;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('blogposts');

  try {
    const blogPost = await collection.findOne({ slug });
    client.close();
    return blogPost;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const addLikeToPost = async (slug) => {
  const uri = process.env.DB_URL;
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('corazonada_tattoo');
  const collection = db.collection('blogposts');

  try {
    await collection.updateOne({ slug }, { $inc: { likes: 1 } });
    // revalidatePath(`/blog/${slug}`);
    client.close();
  } catch (error) {
    console.log('error', error);
  }
};

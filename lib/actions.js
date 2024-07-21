'use server';

import { contactoSchema } from '@/lib/schemas';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

export async function onSubmitContactForm(data) {
  const parsed = contactoSchema.safeParse(data);

  if (!parsed.success) {
    return {
      status: 400,
      body: parsed.error.errors,
    };
  }

  const html = `
  <h1>Informacion de contacto</h1>
  <p>Nombre: ${parsed.data.nombre}</p>
  <p>Email: ${parsed.data.email}</p>
  <p>Mensaje: ${parsed.data.mensaje}</p>
  `;

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

  try {
    const SMTPuser = process.env.SMTP_USERNAME;
    const SMTPpass = process.env.SMTP_PASSWORD;
    const email1 = process.env.EMAIL1;
    const email2 = process.env.EMAIL2;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: SMTPuser,
        pass: SMTPpass,
      },
    });

    await transporter.sendMail({
      from: 'Corazonada Tattoo <3',
      to: email1,
      bcc: email2,
      replyTo: SMTPuser,
      subject: 'Nuevo mensaje de contacto',
      html: html,
    });
  } catch (error) {
    return {
      status: 500,
      body: 'Error sending email',
    };
  }

  return {
    status: 200,
    body: 'Informacion enviada correctamente',
  };
}

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
    client.close();
  } catch (error) {
    console.log('error', error);
  }
};

// export async function getInstagramPosts() {
//   const client = new Instagram(
//     {
//       username: process.env.IG_USERNAME,
//       password: process.env.IG_PASSWORD,
//     },
//     { sharedData: false }
//   );

//   let posts = [];
//   try {
//     await client.login();
//     // request photos for a specific instagram user
//     const instagram = await client.getPhotosByUsername({
//       username: process.env.IG_USERNAME,
//     });

//     if (instagram['user']['edge_owner_to_timeline_media']['count'] > 0) {
//       // if we receive timeline data back
//       //  update the posts to be equal
//       // to the edges that were returned from the instagram API response
//       posts = instagram['user']['edge_owner_to_timeline_media']['edges'];
//     }
//   } catch (err) {
//     console.log(
//       'Something went wrong while fetching content from Instagram',
//       err
//     );
//   }

//   return { instagramPosts: posts };
//   // will be passed to the page component as props
// }

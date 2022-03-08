import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId:'5k39kfnq',
  projectId:'otmoa0t9',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:process.env.SANITY_AUTH_TOKEN,
  // skLlsbfOTKL5kqi6lr7PtrT8ejVYR33eRVivs5hEezQsHPYM3uOFJkjBYPB9SJRwfS8Aa6VS7LdF9m0KPLfSKSY2FI4T5QCsvTfDML6nH7iITx0FInNWZES2dNJfYM250wCOUsCtm1hBrwI41mVf0cwTQdtUjZs6948DTscQyaWBGrsq1jLp

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
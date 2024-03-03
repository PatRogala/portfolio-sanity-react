import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const { REACT_APP_SANITY_PROJECT_ID, REACT_APP_SANITY_TOKEN } = process.env;

if (!REACT_APP_SANITY_PROJECT_ID || !REACT_APP_SANITY_TOKEN) {
  throw new Error('Sanity project ID and token must be set in environment variables');
}

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

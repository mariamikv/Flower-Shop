// import { sanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require('@sanity/client')
export const client = sanityClient({
    projectId: 'y9jqi7gs',
    dataset: 'production',
    apiVersion: '2022-06-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
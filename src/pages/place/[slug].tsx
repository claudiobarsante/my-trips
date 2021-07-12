import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import React from 'react';
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places';

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter();

  // -- it could return a loading component...anything until it's been created
  if (router.isFallback) return null;

  return <PlacesTemplate place={place} />;
}

/*
getStaticPaths => generate urls in build time
getStaticProps => get data to the page (props) in build time - static
getServerSideProps => get data to the page (props) in runtime - every request
*/

/*
To generate queries types install GraphQL Code Generator and follow the steps
*/
export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    props: {
      place
    }
  };
};

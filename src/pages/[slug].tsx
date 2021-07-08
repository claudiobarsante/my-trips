import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/genereted/graphql';
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import AboutPageTemplate, { AboutPageTemplateProps } from 'templates/Pages';
import client from '../graphql/client';

export default function AboutPage({ heading, body }: AboutPageTemplateProps) {
  const router = useRouter();

  // -- it could return a loading component...anything until it's been created
  if (router.isFallback) return null;

  return <AboutPageTemplate heading={heading} body={body} />;
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
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};

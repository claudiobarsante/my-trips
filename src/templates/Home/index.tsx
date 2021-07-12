import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

/*You may not always want to include a module on server-side.
For example, when the module includes a library that only works in the browser
-The component Map with Leaflet */
const MapComponentWithNoSSR = dynamic(() => import('components/Map'), {
  ssr: false
});

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.willianjusten.com.br"
        openGraph={{
          url: 'https://my-trips.willianjusten.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <MapComponentWithNoSSR places={places} />
    </>
  );
}

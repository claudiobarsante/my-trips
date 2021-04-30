import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';

/*You may not always want to include a module on server-side.
For example, when the module includes a library that only works in the browser
-The component Map with Leaflet */
const MapComponentWithNoSSR = dynamic(() => import('components/Map'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <MapComponentWithNoSSR />
    </>
  );
}

import dynamic from 'next/dynamic';

/*You may not always want to include a module on server-side.
For example, when the module includes a library that only works in the browser
-The component Map with Leaflet */
const MapComponentWithNoSSR = dynamic(() => import('components/Map'), {
  ssr: false
});

export default function Home() {
  return <MapComponentWithNoSSR />;
}

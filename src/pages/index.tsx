import { MapProps } from 'components/Map';
import HomeTemplate from 'templates/Pages/Home';

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

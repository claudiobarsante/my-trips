import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';
import L from 'leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const markerIcon = new L.Icon({
  iconUrl: 'img/icon-192.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

//todo -- ajust mapbox custom style
// const CustomTileLayer = () => {
//   return MAPBOX_API_KEY ? (
//     <TileLayer
//       attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       url={`https://api.mapbox.com/styles/v1/clbmribas/ckr0wy5h026hr19qmhxh9eblo.html?fresh=true&title=view&access_token=pk.eyJ1IjoiY2xibXJpYmFzIiwiYSI6ImNrZzg5NW50YTA4bXQyenFyN216b253cnQifQ.9qVmdpre3iZKlKuA-x7wzQ`}
//     />
//   ) : (
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//   );
// };

const Map = ({ places }: MapProps) => {
  const router = useRouter();
  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;

            if (width < 768) map.setMinZoom(2);
            return null;
          }}
        </MapConsumer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places?.map(({ id, slug, name, location }) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              icon={markerIcon}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`);
                }
              }}
            />
          );
        })}
      </MapContainer>
    </S.MapWrapper>
  );
};

export default Map;

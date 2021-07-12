import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  // -- fallback
  const router = useRouter();

  if (router.isFallback) return null; // to wait until the page is completely loaded

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

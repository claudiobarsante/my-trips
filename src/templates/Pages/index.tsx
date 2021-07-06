import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export type AboutPageTemplateProps = {
  heading: string;
  body: string;
};

const AboutPageTemplate = ({ heading, body }: AboutPageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
);

export default AboutPageTemplate;

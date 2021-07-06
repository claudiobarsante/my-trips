import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  height: 100vh;
  margin: auto;
  max-width: var(--container);
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;

export const Body = styled.div`
  //?Could use to style the body elemts serve para estilos do body
  //? p, a, ul, li, blockquote
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`;

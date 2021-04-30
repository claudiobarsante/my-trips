import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1100; //?bigger than Leaflet
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--highlight);
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-white);
  cursor: pointer;
  position: fixed;
  right: var(--medium);
  top: var(--medium);
  z-index: 1100; //?bigger than Leaflet

  svg {
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--color-highlight);
    }
  }
`;

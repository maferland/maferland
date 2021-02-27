import styled from '@emotion/styled';

const GridEl = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1em;
  @media (max - width: 1200px) {
    grid-template-columns: repeat(${(props) => props.mobileWidth}, 1fr);
  }
`;

const Grid = ({ children, width = 5, mobileWidth = 2 }) => (
  <GridEl width={width} mobileWidth={mobileWidth}>
    {children}
  </GridEl>
);

export default Grid;

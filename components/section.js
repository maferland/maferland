import styled from '@emotion/styled';

const SectionEl = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Section = ({ children, className, css, id, fullheight = true }) => (
  <SectionEl id={id} style={css} className={`${fullheight ? 'fullheight' : ''} ${className}`}>
    {children}
  </SectionEl>
);

export default Section;

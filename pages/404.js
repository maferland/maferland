import styled from '@emotion/styled';
import Layout from '../components/layout';
import ErrorContent from '../site/content/error.json';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-family: var(--mono);
  font-size: var(--font-xl);
`;

const Custom404 = () => (
  <Layout>
    <div className="page fullheight">
      <Container>
        <Title>{ErrorContent.title}</Title>
      </Container>
    </div>
  </Layout>
);

export default Custom404;

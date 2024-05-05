import { Container, Heading, Section } from 'components';
import { useRef } from 'react';
import { useParams, useLocation, Link, } from 'react-router-dom';

const Country = () => {

  const params = useParams()
 const location = useLocation()
  console.log(location);
  const goBack = useRef(location?.state ?? "/")

  return (
    <Section>
      <Container>
        <Link to={goBack.current}><button>Go Back</button></Link>
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default Country
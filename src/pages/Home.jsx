import { Container, CountryList, Heading, Loader, Section } from 'components';
import useFetchCountries from '../hooks/useFetchCountries';

const Home = () => {
  const { countries, isLoading, isError } = useFetchCountries()

  return (
    <Section>
      <Container>
        {isLoading && <Loader></Loader>}
        {isError && <Heading title="Error Request" bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
 export default Home
import { Grid, GridItem } from "..";
import {Link, useLocation, useParams} from 'react-router-dom'



export const CountryList = ({ countries }) => {
  const location = useLocation()

  return <Grid>
    {countries.map(({id, country, flag}) => (
      <GridItem key={id}>
  <Link to={`/country/${id}`} state={location}>
    <img src={flag} alt={country} />
  </Link>
</GridItem>
   ))}
  </Grid>;
};

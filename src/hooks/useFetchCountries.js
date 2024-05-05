import { useState, useEffect } from "react";
import { getCountries } from "service/countryApi";

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { countries, isLoading, isError };
};

export default useFetchCountries;

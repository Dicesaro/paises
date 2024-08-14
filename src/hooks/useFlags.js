import { searchCountry } from "../services/country";
import { useState, useRef, useCallback } from "react";

// const API_FLAGS =
//   "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,languages,currencies";

export function useFlags({ search }) {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getCountry = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newCountry = await searchCountry({ search });
      setCountry(newCountry);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /* Aqui ira el sortedCountrys*/

  return { country, getCountry, loading, error };
}

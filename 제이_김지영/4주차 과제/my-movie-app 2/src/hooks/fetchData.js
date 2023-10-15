import { useEffect, useState } from 'react';

export function CustomFetch(endpoint) {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setIsData(data.results);
          setIsLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { isData, isLoading };
}






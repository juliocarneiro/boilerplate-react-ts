import { useEffect, useState } from 'react';

const useFetch = (url: string, options: RequestInit | undefined) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    } catch (errorRes) {
      setError(errorRes);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { response, error };
};

export default useFetch;

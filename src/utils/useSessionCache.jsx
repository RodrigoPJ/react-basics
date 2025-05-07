import { useEffect, useState, } from "react";

export function useSessionCache(key, fetcher) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const dataFetched = await fetcher();
        setData(dataFetched);
        sessionStorage.setItem(key, JSON.stringify(dataFetched));
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
      setIsLoading(false);
    }
    const storedData = sessionStorage.getItem(key)

  
    if (storedData) {
        setData(JSON.parse(storedData));
    } else{
        fetchData();
    }
    
  }, [fetcher]);
  
  return {
    data,
    isLoading,
    error,
  };
}

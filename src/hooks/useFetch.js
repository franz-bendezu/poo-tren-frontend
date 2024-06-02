import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080";

export function useFetch(path, options) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}${path}`, options);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return {
    data,
    isLoading,
    error,
  };
}

export function useFetchMutation(
  path,
  options = { method: "POST", headers: { "Content-Type": "application/json" } }
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const mutate = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}${path}`, {
        ...options,
        body: JSON.stringify(data),
      });
      const text = await response.text();
      if (text.includes("Error")) {
        setError(text);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
    error,
  };
}

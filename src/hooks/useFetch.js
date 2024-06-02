const API_URL = "http://localhost:8080";

export function useFetch(path, options) {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL + path, options);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  return data;
}

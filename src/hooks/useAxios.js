import { useEffect, useState } from "react";
import axios from "axios";
import namespaces from "../namespaces";

axios.defaults.baseURL = namespaces.baseApiUrl;

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;

import { useState, useEffect } from "react";
import axios from "axios";

// LOCALHOST
// const baseUrl = "http://localhost:8800/api/";
// LIVE
const baseUrl = "https://puppyland.onrender.com/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(baseUrl + url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(baseUrl + url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, refetch };
};

export default useFetch;

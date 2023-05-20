import { useState, useEffect } from "react";
import axios from "axios";

//LOCALHOST
const baseUrl = "http://localhost:8800/api";
//LIVE
//const baseUrl = "https://puppyland-api.onrender.com/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl + url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  return { data, error, loading };
};

export default useFetch;

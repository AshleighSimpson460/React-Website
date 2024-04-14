import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}    

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/games", { signal: controller.signal })
        .then((response) => {
          setGenres(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []); // Empty dependency array to execute the effect only once
  
    return { genres, error, isLoading };
}
export default useGenres
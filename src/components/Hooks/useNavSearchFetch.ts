import { useQuery } from "react-query";
import { TProduct } from "../../Types";
import { URL } from "../../constants";

interface IuseNavSearchFetch {
  searchTerms: string;
}

const useNavSearchFetch = ({ searchTerms }: IuseNavSearchFetch) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["navSearchFetch", searchTerms],
    queryFn: async (): Promise<TProduct[]> => {
      const res = await fetch(
        `${URL}/api/tuotteet/nav-search?searchTerms=${searchTerms}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );

      if (res.status === 400) {
        throw new Error("No results");
      }

      return res.json();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useNavSearchFetch };

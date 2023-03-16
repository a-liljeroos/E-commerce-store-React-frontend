import { useQuery } from "react-query";
import { TProduct } from "../../Types";
import { URL } from "../../constants";

const useGetRandomProducts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["randomProducts"],
    queryFn: async (): Promise<TProduct[]> => {
      const res = await fetch(`${URL}/api/tuotteet/carousel`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

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

export { useGetRandomProducts };

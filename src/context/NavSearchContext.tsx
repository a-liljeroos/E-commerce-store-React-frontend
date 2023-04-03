import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { useDebounce } from "../components/Utilities/useDebounce";

type NavSearchContext = {
  searchForm: string;
  apiSearchTerms: string;
  setSearchForm: (input: string) => void;
};

const NavSearchContext = createContext({} as NavSearchContext);

export function useNavSearch() {
  return useContext(NavSearchContext);
}

interface INavSearchContextProvider {
  children: ReactNode;
}

export function NavSearchContextProvider({
  children,
}: INavSearchContextProvider) {
  const [searchForm, setSearchForm] = useState<string>("");
  const [apiSearchTerms, setApiSearchTermsState] = useState<string>("");

  const deBouncedFunction = useDebounce(() => {
    setApiSearchTermsState(searchForm);
  }, 1000);

  useEffect(() => {
    deBouncedFunction();
  }, [searchForm]);

  return (
    <NavSearchContext.Provider
      value={{ searchForm, setSearchForm, apiSearchTerms }}
    >
      {children}
    </NavSearchContext.Provider>
  );
}

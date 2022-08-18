import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type HomeProviderProps = {
  ativo: string;
  setAtivo: (test: string) => void;
};

const DEFAULT_VALUE = {
  ativo: "",
  setAtivo: () => {},
};

const HomeContext = createContext<HomeProviderProps>(DEFAULT_VALUE);

export const HomeProvider: React.FC<Props> = ({ children }) => {
  const [ativo, setAtivo] = useState<string>(DEFAULT_VALUE.ativo);

  return (
    <HomeContext.Provider
      value={{
        ativo,
        setAtivo,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeProvider = () => useContext(HomeContext);

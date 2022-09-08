import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type HomeProviderProps = {
  ativo: string;
  setAtivo: (test: string) => void;
  openMenu: boolean;
  setOpenMenu: (test: boolean) => void;
};

const DEFAULT_VALUE = {
  ativo: "",
  setAtivo: () => {},
  openMenu: false,
  setOpenMenu: () => {},
};

const HomeContext = createContext<HomeProviderProps>(DEFAULT_VALUE);

export const HomeProvider: React.FC<Props> = ({ children }) => {
  const [ativo, setAtivo] = useState<string>(DEFAULT_VALUE.ativo);
  const [openMenu, setOpenMenu] = useState<boolean>(DEFAULT_VALUE.openMenu);

  return (
    <HomeContext.Provider
      value={{
        ativo,
        setAtivo,
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeProvider = () => useContext(HomeContext);

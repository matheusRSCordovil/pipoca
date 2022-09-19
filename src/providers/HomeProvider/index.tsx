import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type HomeProviderProps = {
  ativo: string;
  setAtivo: (test: string) => void;
  openMenu: boolean;
  setOpenMenu: (test: boolean) => void;
  openFilterMenu: boolean;
  setOpenFilterMenu: (test: boolean) => void;
};

const DEFAULT_VALUE = {
  ativo: "",
  setAtivo: () => {},
  openMenu: false,
  setOpenMenu: () => {},
  openFilterMenu: false,
  setOpenFilterMenu: () => {},
};

const HomeContext = createContext<HomeProviderProps>(DEFAULT_VALUE);

export const HomeProvider: React.FC<Props> = ({ children }) => {
  const [ativo, setAtivo] = useState<string>(DEFAULT_VALUE.ativo);
  const [openMenu, setOpenMenu] = useState<boolean>(DEFAULT_VALUE.openMenu);
  const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(
    DEFAULT_VALUE.openFilterMenu
  );

  return (
    <HomeContext.Provider
      value={{
        ativo,
        setAtivo,
        openMenu,
        setOpenMenu,
        openFilterMenu,
        setOpenFilterMenu,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeProvider = () => useContext(HomeContext);

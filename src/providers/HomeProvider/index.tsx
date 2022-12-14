import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type HomeProviderProps = {
  diaEscolhido: number | null;
  setDiaEscolhido: (value: number | null) => void;
  infoDialogText: {
    texto: string;
    dia: string;
  };
  setInfoDialogText: any;
  filtrosAtivos: string;
  setFiltrosAtivos: (value: string) => void;
  ativo: string;
  setAtivo: (test: string) => void;
  idAtivo: string;
  setIdAtivo: (test: string) => void;
  openMenu: boolean;
  setOpenMenu: (test: boolean) => void;
  openFilterMenu: boolean;
  setOpenFilterMenu: (test: boolean) => void;
  userNome: string;
  setUserNome: (test: string) => void;
};

const DEFAULT_VALUE = {
  diaEscolhido: null,
  setDiaEscolhido: () => {},
  infoDialogText: {
    dia: "",
    texto: "",
  },
  setInfoDialogText: () => {},
  filtrosAtivos: "",
  setFiltrosAtivos: () => {},
  ativo: "hoje",
  setAtivo: () => {},
  idAtivo: "",
  setIdAtivo: () => {},
  openMenu: false,
  setOpenMenu: () => {},
  openFilterMenu: false,
  setOpenFilterMenu: () => {},
  userNome: "",
  setUserNome: () => {},
};

const HomeContext = createContext<HomeProviderProps>(DEFAULT_VALUE);

export const HomeProvider: React.FC<Props> = ({ children }) => {
  const [ativo, setAtivo] = useState<string>(DEFAULT_VALUE.ativo);
  const [openMenu, setOpenMenu] = useState<boolean>(DEFAULT_VALUE.openMenu);
  const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(
    DEFAULT_VALUE.openFilterMenu
  );
  const [userNome, setUserNome] = useState<string>(DEFAULT_VALUE.userNome);
  const [idAtivo, setIdAtivo] = useState<string>(DEFAULT_VALUE.idAtivo);
  const [filtrosAtivos, setFiltrosAtivos] = useState<string>(
    DEFAULT_VALUE.filtrosAtivos
  );
  const [infoDialogText, setInfoDialogText] = useState<any>(
    DEFAULT_VALUE.infoDialogText
  );
  const [diaEscolhido, setDiaEscolhido] = useState<number | null>(
    DEFAULT_VALUE.diaEscolhido
  );

  return (
    <HomeContext.Provider
      value={{
        diaEscolhido,
        setDiaEscolhido,
        infoDialogText,
        setInfoDialogText,
        filtrosAtivos,
        setFiltrosAtivos,
        ativo,
        setAtivo,
        idAtivo,
        setIdAtivo,
        openMenu,
        setOpenMenu,
        openFilterMenu,
        setOpenFilterMenu,
        userNome,
        setUserNome,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeProvider = () => useContext(HomeContext);

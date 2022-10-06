import { useEffect } from "react";
import { useHomeProvider } from "../../providers/HomeProvider";
import AprendizagemPage from "../AprendizagemPage";
import DepoimentosPage from "../DepoimentosPage";
import FilterMenu from "../FilterMenu";
import HojePage from "../HojePage";
import FullScreenDialog from "../MenuSide";
import RegistroPage from "../RegistroPage";
import RelatorioPage from "../RelatorioPage";
import { MainContainer } from "./styles";

const Home = () => {
  const { ativo, setOpenMenu, openMenu, openFilterMenu, setOpenFilterMenu } =
    useHomeProvider();

  const handleClose = () => {
    setOpenMenu(false);
    setOpenFilterMenu(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ativo]);

  return (
    <MainContainer>
      {ativo === "hoje" && <HojePage />}
      {ativo === "relatorio" && <RelatorioPage />}
      {ativo === "registro" && <RegistroPage />}
      {ativo === "aprendizagem" && <AprendizagemPage />}
      {ativo === "depoimentos" && <DepoimentosPage />}
      <FullScreenDialog open={openMenu} handleClose={handleClose} />
      {(ativo === "depoimentos" || ativo === "aprendizagem") && (
        <FilterMenu open={openFilterMenu} handleClose={handleClose} />
      )}
    </MainContainer>
  );
};

export default Home;

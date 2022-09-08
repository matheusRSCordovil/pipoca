import { useHomeProvider } from "../../providers/HomeProvider";
import AprendizagemPage from "../AprendizagemPage";
import HojePage from "../HojePage";
import FullScreenDialog from "../MenuSide";
import RegistroPage from "../RegistroPage";
import RelatorioPage from "../RelatorioPage";
import { MainContainer } from "./styles";

const Home = () => {
  const { ativo, setOpenMenu, openMenu } = useHomeProvider();

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <MainContainer>
      {ativo === "hoje" && <HojePage />}
      {ativo === "relatorio" && <RelatorioPage />}
      {ativo === "registro" && <RegistroPage />}
      {ativo === "aprendizagem" && <AprendizagemPage />}
      <FullScreenDialog open={openMenu} handleClose={handleClose} />
    </MainContainer>
  );
};

export default Home;

import { useHomeProvider } from "../../providers/HomeProvider";
import HojePage from "../HojePage";
import RegistroPage from "../RegistroPage";
import RelatorioPage from "../RelatorioPage";
import { MainContainer } from "./styles";

const Home = () => {
  const { ativo } = useHomeProvider();

  return (
    <MainContainer>
      {ativo === "hoje" && <HojePage />}
      {ativo === "relatorio" && <RelatorioPage />}
      {ativo === "registro" && <RegistroPage />}
    </MainContainer>
  );
};

export default Home;

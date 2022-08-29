import { useHomeProvider } from "../../providers/HomeProvider";
import HojePage from "../HojePage";
import RelatorioPage from "../RelatorioPage";
import { MainContainer } from "./styles";

const Home = () => {
  const { ativo } = useHomeProvider();

  return (
    <MainContainer>
      {ativo === "hoje" && <HojePage />}
      {ativo === "relatorio" && <RelatorioPage />}
    </MainContainer>
  );
};

export default Home;

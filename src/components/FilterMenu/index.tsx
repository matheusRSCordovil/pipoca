import Dialog from "@mui/material/Dialog";
import { useHomeProvider } from "../../providers/HomeProvider";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { MainContainer } from "./styles";
import "./styles.css";

const FilterMenu = ({ ...props }: { open: any; handleClose: any }) => {
  const { open, handleClose } = props;
  const { openFilterMenu, setOpenFilterMenu } = useHomeProvider();

  const handleModalClose = () => {
    handleClose();
  };

  return (
    <MainContainer>
      <Dialog
        fullScreen
        style={{ height: "378px", marginTop: "165px" }}
        hideBackdrop={true}
        open={open}
        onClose={handleModalClose}
        PaperProps={{
          style: {
            color: "#7D7D7D",
            boxShadow: "0px 4px 4px 0px #00000026",
          },
        }}
      >
        <img
          onClick={() => setOpenFilterMenu(!openFilterMenu)}
          src={FiltroIcon}
          alt="Depoimentos"
          className="filtro-icon"
        />

        <div className="filtro-container">
          <div className="container-direito">
            <h4>Categorias:</h4>

            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Artigos</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Dicas</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Depoimentos</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Indicações</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Pesquisas</label>
            </span>
          </div>

          <div className="container-esquerdo">
            <h4>Conteúdos:</h4>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Banho</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Qualidade de vida</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Medicações</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Público infantil</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Tratamentos</label>
            </span>
          </div>

          <h4 style={{ marginBottom: 0, marginLeft: "20px" }}>Formatos:</h4>

          <div className="formatos">
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Textos</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Vídeos</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Áudios</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="categoria">Relatórios</label>
            </span>
          </div>

          <div className="button-container">
            <button>Limpar filtros</button>
            <button>Pesquisar</button>
          </div>
        </div>
      </Dialog>
    </MainContainer>
  );
};

export default FilterMenu;

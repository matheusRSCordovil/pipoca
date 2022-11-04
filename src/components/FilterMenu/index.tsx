import Dialog from "@mui/material/Dialog";
import { useHomeProvider } from "../../providers/HomeProvider";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { MainContainer } from "./styles";
import { useEffect, useState } from "react";
import "./styles.css";

const FilterMenu = ({ ...props }: { open: any; handleClose: any }) => {
  const { open, handleClose } = props;

  const [filter, setFilter] = useState<string>("");

  const { openFilterMenu, setOpenFilterMenu, setFiltrosAtivos, filtrosAtivos } =
    useHomeProvider();

  useEffect(() => {
    if (filtrosAtivos.length) {
      setFilter(filtrosAtivos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalClose = () => {
    handleClose();
  };

  const handleSearch = () => {
    setFiltrosAtivos(filter);
    handleClose();
  };

  const handleCheck = (e: any) => {
    if (filter.includes(e)) {
      setFilter(filter.replace(e, ""));
      return;
    }

    setFilter(filter + e);
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
              <input
                type="checkbox"
                checked={filter.includes("&categoriaId=2")}
                onChange={() => handleCheck("&categoriaId=2")}
              />
              <label htmlFor="categoria">Artigos</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&categoriaId=1")}
                onChange={() => handleCheck("&categoriaId=1")}
              />
              <label htmlFor="categoria">Dicas</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&categoriaId=3")}
                onChange={() => handleCheck("&categoriaId=3")}
              />
              <label htmlFor="categoria">Depoimentos</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&categoriaId=4")}
                onChange={() => handleCheck("&categoriaId=4")}
              />
              <label htmlFor="categoria">Indicações</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&categoriaId=5")}
                onChange={() => handleCheck("&categoriaId=5")}
              />
              <label htmlFor="categoria">Pesquisas</label>
            </span>
          </div>

          <div className="container-esquerdo">
            <h4>Conteúdos:</h4>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&tipoId=1")}
                onChange={() => handleCheck("&tipoId=1")}
              />
              <label htmlFor="categoria">Banho</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&tipoId=2")}
                onChange={() => handleCheck("&tipoId=2")}
              />
              <label htmlFor="categoria">Qualidade de vida</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&tipoId=3")}
                onChange={() => handleCheck("&tipoId=3")}
              />
              <label htmlFor="categoria">Medicações</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&tipoId=4")}
                onChange={() => handleCheck("&tipoId=4")}
              />
              <label htmlFor="categoria">Público infantil</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&tipoId=5")}
                onChange={() => handleCheck("&tipoId=5")}
              />
              <label htmlFor="categoria">Tratamentos</label>
            </span>
          </div>

          <h4 style={{ marginBottom: 0, marginLeft: "20px" }}>Formatos:</h4>

          <div className="formatos">
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&formatoId=3")}
                onChange={() => handleCheck("&formatoId=3")}
              />
              <label htmlFor="categoria">Textos</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&formatoId=1")}
                onChange={() => handleCheck("&formatoId=1")}
              />
              <label htmlFor="categoria">Vídeos</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&formatoId=2")}
                onChange={() => handleCheck("&formatoId=2")}
              />
              <label htmlFor="categoria">Áudios</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={filter.includes("&formatoId=4")}
                onChange={() => handleCheck("&formatoId=4")}
              />
              <label htmlFor="categoria">Relatórios</label>
            </span>
          </div>

          <div className="button-container">
            <button onClick={() => setFilter("")}>Limpar filtros</button>
            <button onClick={handleSearch}>Pesquisar</button>
          </div>
        </div>
      </Dialog>
    </MainContainer>
  );
};

export default FilterMenu;

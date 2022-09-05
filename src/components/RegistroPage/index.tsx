import { DayDiv, IconesDiv, MainContainer, TitleDiv } from "./styles";
import Pele1 from "../../assets/icon/meuRegistroIcons/pele1.svg";
import Pele2 from "../../assets/icon/meuRegistroIcons/pele2.svg";
import Pele3 from "../../assets/icon/meuRegistroIcons/pele3.svg";
import Pele4 from "../../assets/icon/meuRegistroIcons/pele4.svg";
import Sentindo1 from "../../assets/icon/meuRegistroIcons/sentindo1.svg";
import Sentindo2 from "../../assets/icon/meuRegistroIcons/sentindo2.svg";
import Sentindo3 from "../../assets/icon/meuRegistroIcons/sentindo3.svg";
import Sentindo4 from "../../assets/icon/meuRegistroIcons/sentindo4.svg";
import dormir1 from "../../assets/icon/meuRegistroIcons/dormir1.svg";
import dormir2 from "../../assets/icon/meuRegistroIcons/dormir2.svg";
import dormir3 from "../../assets/icon/meuRegistroIcons/dormir3.svg";
import dormir4 from "../../assets/icon/meuRegistroIcons/dormir4.svg";
import Banho1 from "../../assets/icon/meuRegistroIcons/banho1.svg";
import Banho2 from "../../assets/icon/meuRegistroIcons/banho2.svg";
import Banho3 from "../../assets/icon/meuRegistroIcons/banho3.svg";
import Banho4 from "../../assets/icon/meuRegistroIcons/banho4.svg";
import Dia1 from "../../assets/icon/meuRegistroIcons/dia1.svg";
import Dia2 from "../../assets/icon/meuRegistroIcons/dia2.svg";
import Dia3 from "../../assets/icon/meuRegistroIcons/dia3.svg";
import Dia4 from "../../assets/icon/meuRegistroIcons/dia4.svg";

const RegistroPage = () => {
  return (
    <MainContainer>
      <div className="calendar-registro">
        <p className="ciclo">1º ciclo</p>

        <div className="calendar-list">
          <div className="calendar-white-end"></div>
          <div className="calendar-scroll-div">
            {Array.from(Array(10), (_, i) => i + 1).map((day) => (
              <DayDiv>
                <p>{day}</p>
              </DayDiv>
            ))}
          </div>
        </div>
      </div>
      <TitleDiv>Como está sua pele?</TitleDiv>

      <IconesDiv>
        <span style={{ color: "#F84A24" }}>
          <img src={Pele1} alt="icone" />
          <p>Boa</p>
        </span>
        <span style={{ color: "#F84A24" }}>
          <img src={Pele2} alt="icone" />
          <p>Ressecada</p>
        </span>
        <span style={{ color: "#F84A24" }}>
          <img src={Pele3} alt="icone" />
          <p>Com coceira</p>
        </span>
        <span style={{ color: "#F84A24" }}>
          <img src={Pele4} alt="icone" />
          <p>Com dor</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre como estava sua pele hoje?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como você está se sentindo hoje? </TitleDiv>
      <IconesDiv>
        <span style={{ color: "#FB991C" }}>
          <img src={Sentindo1} alt="icone" />
          <p>Feliz</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img src={Sentindo2} alt="icone" />
          <p>Normal</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img src={Sentindo3} alt="icone" />
          <p>Triste</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img src={Sentindo4} alt="icone" />
          <p>Com estresse</p>
        </span>
      </IconesDiv>
      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre o seu humor de hoje?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como você dormiu?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#104F92" }}>
          <img src={dormir1} alt="icone" />
          <p>Bem</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img src={dormir2} alt="icone" />
          <p>Mais ou menos</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img src={dormir3} alt="icone" />
          <p>Mal</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img src={dormir4} alt="icone" />
          <p>Insônia</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre esse momento?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como foi seu banho?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#1391ED" }}>
          <img src={Banho1} alt="icone" />
          <p>Fria</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img src={Banho2} alt="icone" />
          <p>Ambiente</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img src={Banho3} alt="icone" />
          <p>Morno</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img src={Banho4} alt="icone" />
          <p>Quente</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu banho?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como foi seu dia?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#58CC63" }}>
          <img src={Dia1} alt="icone" />
          <p>Fiz exercícios</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img src={Dia2} alt="icone" />
          <p>Pratiquei um hobbie</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img src={Dia3} alt="icone" />
          <p>Encontrei amigos</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img src={Dia4} alt="icone" />
          <p>Relaxei</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu dia?
      </label>
      <input className="input-meu-registro" type="text" />
    </MainContainer>
  );
};

export default RegistroPage;

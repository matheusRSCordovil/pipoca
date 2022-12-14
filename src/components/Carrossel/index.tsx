import { MainContainer } from "./styles";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "react-simply-carousel";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useHomeProvider } from "../../providers/HomeProvider";

function Carrossel({ ...props }: { data: any; showPlus?: boolean }) {
  const { data, showPlus } = props;

  const { setAtivo, setIdAtivo } = useHomeProvider();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleClick = (index: number) => {
    setIdAtivo(index + "");
    setAtivo("detalhes");
  };

  const handleNext = () => {
    setActiveSlideIndex(activeSlideIndex + 1);
  };

  return (
    <MainContainer>
      <Carousel
        infinite={false}
        activeSlideIndex={activeSlideIndex}
        showSlidesBeforeInit
        onRequestChange={() => handleNext()}
        itemsToShow={0}
        itemsToScroll={2}
        backwardBtnProps={{ show: false }}
        forwardBtnProps={{ show: false }}
        centerMode={false}
      >
        {data &&
          data.map((item: any, index: number) => (
            <div
              key={index}
              className="block"
              onClick={() => handleClick(item.id)}
            >
              <h4>{item.titulo.slice(0, 25) + "..."}</h4>
            </div>
          ))}

        {showPlus && (
          <div className="plus-block" onClick={() => setAtivo("depoimentos")}>
            <GoPlus style={{ width: 60, height: 60 }} />
          </div>
        )}
      </Carousel>
    </MainContainer>
  );
}

export default Carrossel;

import { MainContainer } from "./styles";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Carrossel() {
  return (
    <MainContainer>
      <Carousel
        draggable
        plugins={[
          "centered",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="block">{index}</div>
        ))}
      </Carousel>
    </MainContainer>
  );
}

export default Carrossel;

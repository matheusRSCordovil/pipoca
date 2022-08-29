import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { MainContainer } from "./styles";
import TickIcon from "../../assets/icon/tickIcon.png";

const CustomLeftAxisTick = (tick: {
  x: number;
  y: number;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <foreignObject
      width={29}
      height={80}
      transform={`translate(${tick.x - 15},${tick.y - 0})`}
    >
      <MainContainer>
        <div className="tick-legend">
          <img alt="" src={TickIcon} />
        </div>
      </MainContainer>
    </foreignObject>
  );
};

export default CustomLeftAxisTick;

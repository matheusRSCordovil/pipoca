import { ResponsiveLine } from "@nivo/line";
import { dataX } from "../../constants";
import { MainContainer } from "./styles";
import Pele1 from "../../assets/icon/graficoHistorico/pele1.svg";
import Pele2 from "../../assets/icon/graficoHistorico/pele2.svg";
import Pele3 from "../../assets/icon/graficoHistorico/pele3.svg";
import Pele4 from "../../assets/icon/graficoHistorico/pele4.svg";
import Sono1 from "../../assets/icon/graficoHistorico/sono1.svg";
import Sono2 from "../../assets/icon/graficoHistorico/sono2.svg";
import Banho2 from "../../assets/icon/graficoHistorico/banho2.svg";
import Banho3 from "../../assets/icon/graficoHistorico/banho3.svg";
import Sentindo1 from "../../assets/icon/graficoHistorico/sentindo1.svg";
import Rotina1 from "../../assets/icon/graficoHistorico/rotina1.svg";
import Rotina2 from "../../assets/icon/graficoHistorico/rotina2.svg";
import EmptyIcon from "../../assets/icon/graficoHistorico/empty.svg";

// @ts-ignore
const CustomSymbol = ({
  ...props
}: {
  size: any;
  datum: any;
  borderColor: any;
  borderWidth: any;
}) => {
  const { size, datum } = props;

  if (datum.textX === "a") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="pele1">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Pele1}
          clipPath="url(.pele1)"
        />
      </svg>
    );
  } else if (datum.textX === "b") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath className="pele2">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image width={size} height={size} href={Pele2} clipPath="url(.pele2)" />
      </svg>
    );
  } else if (datum.textX === "c") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath className="pele3">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image width={size} height={size} href={Pele3} clipPath="url(.pele3)" />
      </svg>
    );
  } else if (datum.textX === "d") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath className="pele4">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image width={size} height={size} href={Pele4} clipPath="url(.pele4)" />
      </svg>
    );
  } else if (datum.textX === "e") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sentindo1">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sentindo1}
          clipPath="url(.sentindo1)"
        />
      </svg>
    );
  } else if (datum.textX === "f") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sono1">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sono1}
          clipPath="url(.sono1)"
        />
      </svg>
    );
  } else if (datum.textX === "g") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sono2">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sono2}
          clipPath="url(.sono2)"
        />
      </svg>
    );
  } else if (datum.textX === "h") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="banho2">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Banho2}
          clipPath="url(.banho2)"
        />
      </svg>
    );
  } else if (datum.textX === "i") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="banho3">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Banho3}
          clipPath="url(.banho3)"
        />
      </svg>
    );
  } else if (datum.textX === "j") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="rotina1">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Rotina1}
          clipPath="url(.rotina1)"
        />
      </svg>
    );
  } else if (datum.textX === "k") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="rotina2">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Rotina2}
          clipPath="url(.rotina2)"
        />
      </svg>
    );
  } else {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="emptyIcon">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={EmptyIcon}
          clipPath="url(.emptyIcon)"
        />
      </svg>
    );
  }
};

const LineGraphicIcons = ({ bar, color }: { bar: any; color: string }) => {
  const dataTheme = {
    background: "#ffffff",
    textColor: "#333333",
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: color,
          strokeWidth: 1,
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 1,
        strokeDasharray: "3,6",
      },
    },
  };

  const CustomTopAxisTick = (tick: any) => {
    return (
      <foreignObject
        width={30}
        height={80}
        transform={`translate(${tick.x - 15},${tick.y - 30})`}
      >
        <MainContainer>
          <div
            className="tick-legend"
            style={{ backgroundColor: "transparent" }}
          >
            <p>Dia {tick.value.slice(0, 2)}</p>
          </div>
        </MainContainer>
      </foreignObject>
    );
  };

  return (
    <MainContainer>
      <span>
        <img alt="" src={bar} />
      </span>

      <div className="grafico-container">
        <ResponsiveLine
          theme={dataTheme}
          data={dataX}
          colors={[color]}
          margin={{ top: 50, right: 60, bottom: 50, left: -15 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 6,
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          gridYValues={[1, 2, 3, 4, 5, 6]}
          axisTop={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            renderTick: CustomTopAxisTick,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
          }}
          axisRight={{
            tickSize: 0,
            tickPadding: 10,
            format: () => "",
          }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 0,
            format: () => "",
          }}
          pointSymbol={CustomSymbol}
          pointSize={38}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={0}
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          pointLabelYOffset={-12}
          useMesh={true}
          isInteractive={false}
          lineWidth={0}
        />
      </div>
    </MainContainer>
  );
};

export default LineGraphicIcons;

import { ResponsiveLine } from "@nivo/line";
import { dataX } from "../../constants";
import { MainContainer } from "./styles";
import Pele1 from "../../assets/icon/graficoHistorico/pele1.svg";
import Pele2 from "../../assets/icon/graficoHistorico/pele2.svg";
import Pele3 from "../../assets/icon/graficoHistorico/pele3.svg";
import Pele4 from "../../assets/icon/graficoHistorico/pele4.svg";
import Sentindo1 from "../../assets/icon/graficoHistorico/sentindo1.svg";

// @ts-ignore
const CustomSymbol = ({
  ...props
}: {
  size: any;
  datum: any;
  borderColor: any;
  borderWidth: any;
}) => {
  const { size, datum, borderColor, borderWidth } = props;

  if (datum.textX === "a") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <pattern
            id="myCircle"
            patternUnits="userSpaceOnUse"
            fill="#FF8412"
            height={size}
            width={size}
          >
            <image href="/pele1.svg" x="0" y="0" height={size} width={size} />
          </pattern>
        </defs>
        <circle
          id="top"
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="url(#myCircle)"
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
      </svg>
    );
  } else if (datum.textX === "b") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath id="myCircle">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          width={size}
          height={size}
          href={Pele2}
          clipPath="url(#myCircle)"
        />
      </svg>
    );
  } else if (datum.textX === "c") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath id="myCircle">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          width={size}
          height={size}
          href={Pele3}
          clipPath="url(#myCircle)"
        />
      </svg>
    );
  } else if (datum.textX === "d") {
    return (
      <svg width={size} height={size} x="-20" y="-20">
        <defs>
          <clipPath id="myCircle">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          width={size}
          height={size}
          href={Pele4}
          clipPath="url(#myCircle)"
        />
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
          <clipPath id="myCircle">
            {/* <circle cx="250" cy="145" r="125" fill="#FFFFFF" /> */}
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          // width={size}
          // height={size}
          href={"https://i.imgur.com/FtSQ3lZ.png"}
          clipPath="url(#myCircle)"
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

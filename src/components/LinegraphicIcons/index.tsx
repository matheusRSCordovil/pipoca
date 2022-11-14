import { ResponsiveLine } from "@nivo/line";
import { MainContainer } from "./styles";
import Pele1 from "../../assets/icon/graficoHistorico/pele1.svg";
import Pele2 from "../../assets/icon/graficoHistorico/pele2.svg";
import Pele3 from "../../assets/icon/graficoHistorico/pele3.svg";
import Pele4 from "../../assets/icon/graficoHistorico/pele4.svg";
import Sono2 from "../../assets/icon/graficoHistorico/sono2.svg";
import Sono4 from "../../assets/icon/graficoHistorico/sono4.svg";
import Banho2 from "../../assets/icon/graficoHistorico/banho1.svg";
import Banho3 from "../../assets/icon/graficoHistorico/banho2.svg";
import Banho3active from "../../assets/icon/meuRegistroIcons/banho3active.svg";
import Banho4active from "../../assets/icon/meuRegistroIcons/banho4active.svg";
import Sentindo1active from "../../assets/icon/meuRegistroIcons/sentindo1active.svg";
import Sentindo2active from "../../assets/icon/meuRegistroIcons/sentindo2active.svg";
import Sentindo3active from "../../assets/icon/meuRegistroIcons/sentindo3active.svg";
import Sentindo4active from "../../assets/icon/meuRegistroIcons/sentindo4active.svg";
import Dormir1active from "../../assets/icon/meuRegistroIcons/dormir1active.svg";
import Dormir3active from "../../assets/icon/meuRegistroIcons/dormir3active.svg";
import Dia1active from "../../assets/icon/meuRegistroIcons/dia1active.svg";
import Dia4active from "../../assets/icon/meuRegistroIcons/dia4active.svg";
import Rotina3 from "../../assets/icon/graficoHistorico/rotina3.svg";
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

  if (datum.textX === "9") {
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
  } else if (datum.textX === "10") {
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
  } else if (datum.textX === "11") {
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
  } else if (datum.textX === "12") {
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
  } else if (datum.textX === "17") {
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
          href={Sentindo1active}
          clipPath="url(.sentindo1)"
        />
      </svg>
    );
  } else if (datum.textX === "18") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sentindo2">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sentindo2active}
          clipPath="url(.sentindo2)"
        />
      </svg>
    );
  } else if (datum.textX === "19") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sentindo3">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sentindo3active}
          clipPath="url(.sentindo3)"
        />
      </svg>
    );
  } else if (datum.textX === "20") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sentindo4">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sentindo4active}
          clipPath="url(.sentindo4)"
        />
      </svg>
    );
  } else if (datum.textX === "13") {
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
          href={Dormir1active}
          clipPath="url(.sono1)"
        />
      </svg>
    );
  } else if (datum.textX === "14") {
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
  } else if (datum.textX === "15") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sono3">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Dormir3active}
          clipPath="url(.sono3)"
        />
      </svg>
    );
  } else if (datum.textX === "16") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="sono4">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Sono4}
          clipPath="url(.sono4)"
        />
      </svg>
    );
  } else if (datum.textX === "1") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="banho1">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Banho2}
          clipPath="url(.banho1)"
        />
      </svg>
    );
  } else if (datum.textX === "2") {
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
          href={Banho3}
          clipPath="url(.banho2)"
        />
      </svg>
    );
  } else if (datum.textX === "3") {
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
          href={Banho3active}
          clipPath="url(.banho3)"
        />
      </svg>
    );
  } else if (datum.textX === "4") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="banho4">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Banho4active}
          clipPath="url(.banho4)"
        />
      </svg>
    );
  } else if (datum.textX === "7") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="rotina3">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Rotina3}
          clipPath="url(.rotina3)"
        />
      </svg>
    );
  } else if (datum.textX === "6") {
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
  } else if (datum.textX === "5") {
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
          href={Dia1active}
          clipPath="url(.rotina1)"
        />
      </svg>
    );
  } else if (datum.textX === "8") {
    return (
      <svg
        style={{ width: size, height: size }}
        width={size}
        height={size}
        x="-20"
        y="-20"
      >
        <defs>
          <clipPath className="rotina4">
            <circle cx="250" cy="145" r="125" fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          style={{ width: size, height: size }}
          width={size}
          height={size}
          href={Dia4active}
          clipPath="url(.rotina4)"
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

const LineGraphicIcons = ({
  bar,
  color,
  data,
}: {
  bar: any;
  color: string;
  data: any;
}) => {
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
          data={data}
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

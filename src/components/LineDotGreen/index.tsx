import { ResponsiveLine } from "@nivo/line";
import { dataY } from "../../constants";
import { MainContainer } from "./styles";
import TickIcon from "../../assets/icon/tickIcon.png";

// @ts-ignore
const CustomSymbol = ({
  ...props
}: {
  size: any;
  color: any;
  borderWidth: any;
  borderColor: any;
  datum: any;
}) => {
  const { size, color, borderWidth, borderColor } = props;

  return (
    <circle
      r={size / 2}
      fill={color}
      stroke={borderColor}
      strokeWidth={borderWidth}
    />
  );
};

const LineDotGreen = ({ bar, color }: { bar: any; color: string }) => {
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

  const CustomBottomAxisTick = (tick: any) => {
    return (
      <foreignObject
        width={29}
        height={80}
        transform={`translate(${tick.x - 15},${tick.y + 0})`}
        onClick={() => console.log(tick.value)}
      >
        <MainContainer>
          <div
            className="tick-legend"
            style={
              tick.value.slice(-1) === "t"
                ? { backgroundColor: color }
                : { display: "none" }
            }
          >
            <img alt="" src={TickIcon} />
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
          data={dataY}
          colors={[color]}
          margin={{ top: 50, right: 60, bottom: 50, left: -15 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 5,
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
            tickPadding: 0,
            tickRotation: 0,
            legendOffset: 0,
            format: () => "",
            renderTick: CustomBottomAxisTick,
          }}
          pointSymbol={CustomSymbol}
          pointSize={16.4}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={2}
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

export default LineDotGreen;

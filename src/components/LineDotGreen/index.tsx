import { ResponsiveLine } from "@nivo/line";
import { MainContainer } from "./styles";
import TickIcon from "../../assets/icon/tickIcon.png";
import { useHomeProvider } from "../../providers/HomeProvider";

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

const LineDotGreen = ({
  bar,
  color,
  data,
  setOpen,
}: {
  bar: any;
  color: string;
  data: any;
  setOpen: any;
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

  const { setInfoDialogText } = useHomeProvider();

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

  const handleClickModal = (text: string, index: number) => {
    setOpen(color);
    setInfoDialogText({
      texto: text,
      dia: index + "",
    });
  };

  const CustomBottomAxisTick = (tick: any) => {
    return (
      <foreignObject
        width={29}
        height={80}
        transform={`translate(${tick.x - 15},${tick.y + 0})`}
        onClick={() =>
          handleClickModal(
            data[0].data[tick.tickIndex].textX,
            data[0].data[tick.tickIndex].x
          )
        }
      >
        <MainContainer>
          <div
            className="tick-legend"
            style={
              data[0].data[tick.tickIndex].textX
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
          data={data}
          colors={[color]}
          margin={{ top: 50, right: 60, bottom: 50, left: -15 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 9,
            max: 4,
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          gridYValues={[1, 2, 3, 4, 5]}
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

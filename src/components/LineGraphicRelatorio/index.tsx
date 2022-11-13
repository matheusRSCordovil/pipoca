import { ResponsiveLine } from "@nivo/line";
import TickIcon from "../../assets/icon/tickIcon.png";
import { MainContainer } from "./styles";
import { useHomeProvider } from "../../providers/HomeProvider";

const LineGraphicRelatorio = ({
  bar,
  color,
  open,
  setOpen,
  data,
}: {
  bar: any;
  color: string;
  open: boolean;
  setOpen: any;
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

  const handleMinMax = () => {
    if (color === "#F84A24") {
      return [13, 8];
    }
    if (color === "#FB991C") {
      return [21, 16];
    }
    if (color === "#104F92") {
      return [17, 12];
    }
    return [5, 0];
  };

  const handleClickModal = (text: string) => {
    setOpen(color);
    setInfoDialogText(text);
  };

  const CustomBottomAxisTick = (tick: any) => {
    return (
      <foreignObject
        width={29}
        height={80}
        transform={`translate(${tick.x - 15},${tick.y + 0})`}
        onClick={() => handleClickModal(data[0].data[tick.tickIndex].textX)}
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
            min: handleMinMax()[0],
            max: handleMinMax()[1],
            stacked: true,
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
          pointSize={15}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={1}
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          pointLabelYOffset={-12}
          useMesh={true}
          isInteractive={false}
        />
      </div>
    </MainContainer>
  );
};

export default LineGraphicRelatorio;

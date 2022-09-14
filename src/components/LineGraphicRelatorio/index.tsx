import { ResponsiveLine } from "@nivo/line";
import { dataR } from "../../constants";
import TickIcon from "../../assets/icon/tickIcon.png";
import { MainContainer } from "./styles";

const LineGraphicRelatorio = ({ bar, color }: { bar: any; color: string }) => {
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
            <p>Dia {tick.value.slice(1, 2)}</p>
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
      <span
        style={{
          position: "sticky",
          margin: "auto 0",
          left: 0,
          zIndex: 100,
          height: "300px",
          width: "120px",
          display: "flex",
          paddingLeft: "20px",
          background: "linear-gradient(90deg, #FFFFFF 70%, transparent 30%)",
        }}
      >
        <img
          alt=""
          src={bar}
          style={{
            height: "243px",
            width: "69px",
            margin: "auto 0",
            left: 20,
            zIndex: 100,
          }}
        />
      </span>

      <div className="grafico-container">
        <ResponsiveLine
          theme={dataTheme}
          data={dataR}
          colors={[color]}
          margin={{ top: 50, right: 60, bottom: 50, left: -15 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 5,
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
import { ResponsiveLine } from "@nivo/line";
import { dataColor } from "../../constants";
import { MainContainer } from "./styles";

// @ts-ignore
const CustomSymbol = ({
  ...props
}: {
  size: any;
  borderWidth: any;
  borderColor: any;
  datum: any;
}) => {
  const { size, borderWidth, borderColor, datum } = props;

  if (datum.textX === "r") {
    return (
      <circle
        r={size / 2}
        fill="#FF8412"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
    );
  }

  if (datum.textX === "b") {
    return (
      <circle
        r={size / 2}
        fill="#1391ED"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
    );
  }

  if (datum.textX === "y") {
    return (
      <circle
        r={size / 2}
        fill="#FFD550"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
    );
  }

  if (datum.textX === "g") {
    return (
      <circle
        r={size / 2}
        fill="#7D7D7D"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
    );
  }
};

const LineGraphicMultiColor = ({ color }: { color: string }) => {
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

  const handleGridYValues = () => {
    const values = [];

    for (let i = 0; i <= dataColor.length + 2; i++) {
      values.push(i);
    }

    return values;
  };

  return (
    <MainContainer>
      <span>
        <div>
          <p></p>
          {dataColor.map((item, index) => (
            <p key={index} style={{ width: "68px" }}>
              {item.id}
            </p>
          ))}
          <p></p>
        </div>

        <div className="legend-box">
          <div>
            <div
              className="legend-icon"
              style={{ backgroundColor: "#1391ED" }}
            ></div>
            <p>Usei</p>
          </div>

          <div>
            <div style={{ backgroundColor: "#FFD550" }}></div>
            <p>Atrasei</p>
          </div>

          <div>
            <div style={{ backgroundColor: "#FF8412" }}></div>
            <p>Esqueci</p>
          </div>

          <div>
            <div style={{ backgroundColor: "#7D7D7D" }}></div>
            <p>Não Precisei</p>
          </div>
        </div>
      </span>

      <div className="grafico-container">
        <ResponsiveLine
          theme={dataTheme}
          data={dataColor}
          colors={[color]}
          margin={{ top: 50, right: 60, bottom: 50, left: -15 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: dataColor.length + 1,
            stacked: false,
            reverse: false,
          }}
          gridYValues={handleGridYValues()}
          yFormat=" >-.2f"
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
            tickPadding: 0,
            tickRotation: 0,
            legendOffset: 0,
            format: () => "",
          }}
          pointSymbol={CustomSymbol}
          pointSize={20.4}
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

export default LineGraphicMultiColor;

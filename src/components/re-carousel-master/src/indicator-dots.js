import PropTypes from "prop-types";
import NextIcon from "../../../assets/icon/play.fill.svg";

function Dot(props) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "8px",
        width: "8px",
        borderRadius: "4px",
        backgroundColor: props.selected ? "#FB991C" : "#1391ED",
        margin: "7px 5px",
        transitionDuration: "300ms",
      }}
    />
  );
}

export default function IndicatorDots(props) {
  const wrapperStyle = {
    position: "absolute",
    width: "100%",
    zIndex: "100",
    bottom: "0px",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    width: "87px",
    margin: 0,
    position: "absolute",
    bottom: "0px",
    right: "5px",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "35px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#1391ED",
  };

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div style={wrapperStyle} />;
  } else {
    return (
      <div style={wrapperStyle}>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return (
            <>
              <Dot key={i} selected={props.index === i} />
            </>
          );
        })}
        {props.index === 6 && (
          <button type="submit" form="form1" style={buttonStyle}>
            <p style={{ margin: 0 }}>Entrar!</p>
            <img alt="next-icon" src={NextIcon} style={{ paddingLeft: 3 }} />
          </button>
        )}
      </div>
    );
  }
}

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

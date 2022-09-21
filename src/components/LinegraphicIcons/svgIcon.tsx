import Pele1 from "../../assets/icon/graficoHistorico/pele1.svg";
import Pele2 from "../../assets/icon/graficoHistorico/pele2.svg";
import Pele3 from "../../assets/icon/graficoHistorico/pele3.svg";
import Pele4 from "../../assets/icon/graficoHistorico/pele4.svg";

const SvgIcon = ({ ...props }: { size: number; src: any }) => {
  const { size, src } = props;

  return (
    <svg width={size} height={size} x="-20" y="-20">
      <defs>
        <pattern
          id="image"
          patternUnits="userSpaceOnUse"
          height={size}
          width={size}
        >
          {src === "d" && (
            <image href={Pele4} x="0" y="0" height={size} width={size} />
          )}
          {src === "c" && (
            <image href={Pele3} x="0" y="0" height={size} width={size} />
          )}
          {src === "b" && (
            <image href={Pele2} x="0" y="0" height={size} width={size} />
          )}
          {src === "a" && (
            <image href={Pele1} x="0" y="0" height={size} width={size} />
          )}
        </pattern>
      </defs>
      <circle
        id="top"
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="url(#image)"
      />
    </svg>
  );
};

export default SvgIcon;

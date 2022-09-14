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
          <image
            x="0"
            y="0"
            height={size}
            width={size}
            // href="http://i.imgur.com/7Nlcay7.jpg"
            href={
              src === "h1"
                ? Pele1
                : src === "h2"
                ? Pele2
                : src === "h3"
                ? Pele3
                : "http://i.imgur.com/7Nlcay7.jpg"
            }
          ></image>
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

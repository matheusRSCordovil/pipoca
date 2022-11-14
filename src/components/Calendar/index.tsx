import React, { useEffect } from "react";
import API from "../../services";
import { DayDiv, DayDivPast, DayDivActive } from "./styles";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState<number>(
    new Date().getMonth() + 1
  );

  const handleCurrentMonth = (month: string) => {
    setCurrentMonth(Number(month));
  };

  const [dias, setDias] = React.useState<any[]>([]);
  const [diaAtual, setDiaAtual] = React.useState<number[]>([]);

  useEffect(() => {
    API.get("Jornada/Atual").then((response) => {
      setDiaAtual(response.data.dia);

      for (let i = 1; i < 31; i++) {
        if (i === response.data.dia) {
          dias.push(2);
          continue;
        }

        if (i > response.data.dia) {
          dias.push(0);
        } else {
          dias.push(1);
        }
      }

      setDias(dias.slice(0, 30));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <select onChange={(e) => handleCurrentMonth(e.target.value)}>
        <option value="1">1° Ciclo</option>
        {/* <option value="2">2° Ciclo</option>
        <option value="3">3° Ciclo</option> */}
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 16px",
        }}
      >
        {dias.length &&
          dias.map((dia: number, index: number) =>
            dia === 2 ? (
              <DayDivActive key={index}>
                {("0" + (index + 1)).slice(-2)}
              </DayDivActive>
            ) : dia === 1 ? (
              <DayDivPast key={index}>
                {("0" + (index + 1)).slice(-2)}
              </DayDivPast>
            ) : (
              <DayDiv key={index}>{("0" + (index + 1)).slice(-2)}</DayDiv>
            )
          )}
      </div>
    </div>
  );
};

export default Calendar;

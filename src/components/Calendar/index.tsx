import React from "react";
import { DayDiv } from "./styles";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState<number>(
    new Date().getMonth() + 1
  );

  const handleCurrentMonth = (month: string) => {
    setCurrentMonth(Number(month));
  };

  return (
    <div>
      <select onChange={(e) => handleCurrentMonth(e.target.value)}>
        <option value="1">1° Ciclo</option>
        <option value="2">2° Ciclo</option>
        <option value="3">3° Ciclo</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 16px",
        }}
      >
        {Array.from(Array(30), (_, i) => i + 1).map((day, i) => (
          <DayDiv key={i}>
            <p>{day}</p>
          </DayDiv>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

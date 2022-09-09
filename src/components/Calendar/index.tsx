import React from "react";
import { DayDiv } from "./styles";

const monthsDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 16px",
          margin: "0 auto",
        }}
      >
        {Array.from(Array(monthsDays[currentMonth]), (_, i) => i + 1).map(
          (day) => (
            <DayDiv>
              <p>{day}</p>
            </DayDiv>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;

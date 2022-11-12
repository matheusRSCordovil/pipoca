import styled from "styled-components";
import DoneCheckCalendar from "../../assets/icon/doneCheckCalendar.svg";

export const DayDiv = styled.div`
  display: flex;
  height: 43.1489372253418px;
  width: 43.1489372253418px;
  border-radius: 1.6595743894577026px;
  background-color: #f1f1f1;
  color: #7d7d7d;
  margin: 4px;
  font-size: 0.5rem;
  font-weight: bold;
  justify-content: right;
  align-items: end;

  p {
    margin: 3px;
    height: 8px;
  }
`;

export const DayDivPast = styled.div`
  display: flex;
  height: 43.1489372253418px;
  width: 43.1489372253418px;
  border-radius: 1.6595743894577026px;
  background-color: #bebebe;
  color: #7d7d7d;
  margin: 4px;
  font-size: 0.5rem;
  font-weight: bold;
  justify-content: right;
  align-items: end;
  background-image: url(${DoneCheckCalendar});
  background-position: center;
  background-repeat: no-repeat;

  p {
    margin: 3px;
    height: 8px;
  }
`;

export const DayDivActive = styled.div`
  display: flex;
  height: 43.1489372253418px;
  width: 43.1489372253418px;
  border-radius: 1.6595743894577026px;
  background-color: #ffac33;
  color: #ffffff;
  margin: 4px;
  font-size: 0.5rem;
  font-weight: bold;
  justify-content: right;
  align-items: end;

  p {
    margin: 3px;
    height: 8px;
  }
`;

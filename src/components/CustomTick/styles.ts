import styled from "styled-components";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  .tick-legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 29px;
    width: 29px;
    border-radius: 3px;
    background-color: ${PRIMARY.darkBlue};
  }
`;

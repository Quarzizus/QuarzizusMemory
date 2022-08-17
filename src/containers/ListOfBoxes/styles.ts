import styled from "styled-components";

interface ListOfBoxexCpType {
  numberOfColumnsAndRows: number;
}

const size = 460;
const ListOfBoxesCp = styled.section<ListOfBoxexCpType>`
  width: ${size}px;
  height: ${size}px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(
    ${({ numberOfColumnsAndRows }) => numberOfColumnsAndRows},
    1fr
  );
  grid-template-rows: repeat(
    ${({ numberOfColumnsAndRows }) => numberOfColumnsAndRows},
    1fr
  );

  @media screen and (max-width: 570px) {
    width: 90vw;
    height: 90vw;
  }
`;

export { ListOfBoxesCp };

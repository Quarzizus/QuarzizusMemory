import styled from "styled-components";

interface ListOfBoxexCpType {
  numberOfColumnsAndRows: number;
}

const ListOfBoxesCp = styled.section<ListOfBoxexCpType>`
  max-width: 520px;
  height: 520px;
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

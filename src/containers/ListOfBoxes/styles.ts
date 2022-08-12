import styled from "styled-components";

interface ListOfBoxexCpType {
  numberOfColumnsAndRows: number;
}

const ListOfBoxexCp = styled.section<ListOfBoxexCpType>`
  max-width: 550px;
  height: 550px;
  margin: 20px auto 0 auto;
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
`;

export { ListOfBoxexCp };

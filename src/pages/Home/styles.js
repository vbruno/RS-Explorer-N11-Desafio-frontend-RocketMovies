import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`

padding: 51px 123px;

display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 80vh;
  grid-template-areas:
    "header"
    "content";

  > div {
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 38px;

    > h1 {
      font-size: 32px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      width: auto;
      height: 48px;
      padding: 0 32px;
      margin: 0;
    }

    justify-content: space-between;

  }

  section {
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: auto;
  }

`;

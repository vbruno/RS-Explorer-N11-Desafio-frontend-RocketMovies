import styled from "styled-components";

export const Container = styled.div`

  margin-top: 8px;
  margin-bottom: 15px;

  display: flex;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .filled {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }

`;

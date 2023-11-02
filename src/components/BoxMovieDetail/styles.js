import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  min-height: 223px;

  padding: 32px;

  background: ${({ theme }) => theme.COLORS.CHERRY};
  border: none;
  border-radius: 16px;

  > h1 {
    text-align: left;

    color: ${({ theme }) => theme.COLORS.GRAY_000};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > p {
    text-align: justify;

    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 16px;
`;

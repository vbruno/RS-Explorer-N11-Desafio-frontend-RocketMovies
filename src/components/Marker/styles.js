import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 16px;

  background-color: ${({ theme, $is_new }) =>
    $is_new ? "transparent" : theme.COLORS.GRAY_800};

  border: ${({ theme, $is_new }) =>
    $is_new ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;
  padding: 16px;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }

  > input {
    text-align: ${({ $is_new }) => ($is_new ? "left" : "center")};

    color: ${({ theme, $is_new }) =>
      $is_new ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_000};

    background: transparent;
    border: none;

    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      outline: none;
    }
  }
`;

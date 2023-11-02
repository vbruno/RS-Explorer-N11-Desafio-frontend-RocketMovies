import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-right: 16px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;

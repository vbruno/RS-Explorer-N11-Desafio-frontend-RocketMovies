import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme, $variant }) =>
    $variant ? theme.COLORS.GRAY_950 : theme.COLORS.PINK};
  color: ${({ theme, $variant }) =>
    $variant ? theme.COLORS.PINK : theme.COLORS.GRAY_700};

  height: 56px;
  border: 56px;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;

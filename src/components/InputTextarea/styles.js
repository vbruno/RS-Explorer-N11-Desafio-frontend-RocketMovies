import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  margin-top: 40px;

  padding: 19px 16px;
  border: none;
  border-radius: 10px;

  background: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_000};

  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  resize: none;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  height: 90vh;
  padding: 40px 123px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 16px;

    svg {
      font-size: 16px;
    }
  }
`;

export const MovieTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;

  color: ${({ theme }) => theme.COLORS.GRAY_000};
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  > div {
    margin: 0;
  }

  > button {
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;

    svg {
      font-size: 26px;
      color: ${({ theme }) => theme.COLORS.PINK};

      &:hover {
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }
  }

  svg {
    font-size: 26px;
  }
`;

export const MovieAuthor = styled.h2`
  margin: 24px 0 40px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.GRAY_000};
    text-align: justify;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > svg {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const MovieTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const MovieDescription = styled.div`
  margin-top: 40px;

  color: ${({ theme }) => theme.COLORS.GRAY_000};
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: pre-wrap;
`;

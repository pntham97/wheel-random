import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 8px 16px !important;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.75px;
  box-sizing: border-box;
  border: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: ${({ $borderRadius }) => $borderRadius || "8px"};

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
      padding: unset;
    `}

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      width: 100%;
      max-width: ${$maxWidth};
      padding: unset;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      height: 33px;
    `}

  ${({ $size }) =>
    $size === "base" &&
    css`
      height: 40px;
    `}

  ${({ $size }) =>
    $size === "md" &&
    css`
      height: 48px;
    `}

    ${({ $size }) =>
    $size === "lg" &&
    css`
      height: 48px;
    `}
`;

export const PrimaryButton = styled(Button)`
  background-color: #f6c92b;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  letter-spacing: 0.5px;

  &:active:enabled {
    background-color: #c20000;
  }

  &:enabled:hover {
    background-color: #f0db19;
  }

  &:disabled {
    background-color: #f6c92b;
    opacity: 0.4;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #ff0000;
  background-color: transparent;
  color: #ff0000;

  &:hover:enabled {
    border: 2px solid red;
  }

  &:focus:enabled {
    border: 2px solid red;
  }

  &:disabled {
    border: 2px solid #999999;
    color: #999999;
  }
`;

export const DefaultButton = styled(Button)`
  background-color: transparent;
  color: #303030;
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  &:hover:enabled {
    color: red;
  }

  &:focus:enabled {
    color: red;
  }

  &:disabled {
    border: 2px solid #999999;
    color: #999999;
  }
`;

export const OutlineButton = styled(Button)`
  border: 1px solid #999999;
  background-color: white;
  box-sizing: border-box;
  color: #999999;
  ${({ $disabledHover }) =>
    $disabledHover &&
    css`
      border-width: 1px !important;
    `}

  &:hover:enabled {
    border-width: 2px;
  }

  &:focus:enabled {
    border-width: 2px;
  }

  &:disabled {
    border-width: 2px;
    color: #999999;
  }
`;

export const GrayButton = styled(Button)`
  background-color: #cacaca;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ $fontSize }) => $fontSize || "18px"};
  text-transform: uppercase;
  &:disabled {
  }
`;

export const RedDisable = styled(Button)`
  background-color: #ff0000;
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    opacity: 0.5;
  }
`;

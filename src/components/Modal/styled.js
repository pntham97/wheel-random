import styled from "styled-components";
import { Modal as BaseModal } from "antd";

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 8px;
    border-radius: ${({ $borderRadius }) => $borderRadius || "8px"};
  }

  .ant-modal-header {
    margin: 0px !important;
    background-color: #000000;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: none;
  }

  .ant-modal-title {
    text-transform: capitalize;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #ffffff;
    font-style: bold;
    text-align: center;
    margin: ${({ $margin }) => $margin};
    width: ${({ $widthTitle }) => $widthTitle};
    font-weight: ${({ $fontWeight }) => $fontWeight || 700};
    text-align: center;
  }

  svg {
    color: #9b9b9b;
  }

  .ant-modal-body {
    padding: 16px 24px;
  }

  &.editTitle {
    .ant-modal-body {
      height: 502px !important;
      overflow: auto;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
`;

export const Clear = styled.div`
  margin-top: 2px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

//styles from ant design to use how?
import 'antd/dist/antd.css';
import styled from "styled-components";

//styles from ant design for tabs
export const StyledCol= styled.Col`
.card-container p {
    margin: 0;
  };
  .card-container > .ant-tabs-card .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  };
  .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  };
  .card-container > .ant-tabs-card > .ant-tabs-nav::before {
    display: none;
  };
`;
 
// export const StyledModal = styled.Modal`
// .ant-modal-body {
//   padding: 40px;
// };
// `;

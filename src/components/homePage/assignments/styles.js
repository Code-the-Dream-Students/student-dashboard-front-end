import styled from "styled-components";

export const StyledSection = styled.section`
    background: #f5f5f5;
    overflow: hidden;
    padding: 24px;
    border: 1px solid red;
    .courseOutline {
        margin: 2rem 0;
    }
    .cardContent {
        margin: 20px;
        padding: 20px;
        border: 1px solid pink;
    }
    .card-container p {
        margin-bottom: 10px;
        border: 1px solid blue;
    }
    .card-container > .ant-steps-item-wait,
    .ant-steps-item-container,
    .ant-steps-item-content,
    .ant-steps-item-title {
        font-size: 0.85rem;
        padding-bottom: 6px;
    }
    .card-container > .ant-steps-item-icon {
        width: 1em;
    }
    .card-container > .ant-tabs-card .ant-tabs-content {
        min-height: 100vh;
        margin-top: -16px;
    }
    .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }
    .card-container > .ant-tabs-card > .ant-tabs-nav::before {
        display: none;
    }
    .card-container > .ant-tabs-card .ant-tabs-tab,
    [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
    }
    .card-container > .ant-tabs-card .ant-tabs-tab-active,
    [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
    }
    [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-content {
        height: 120px;
        margin-top: -8px;
    }
    [data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
    }
    [data-theme="dark"] #components-tabs-demo-card-top .code-box-demo {
        background: #000;
    }
    [data-theme="dark"]
        .card-container
        > .ant-tabs-card
        .ant-tabs-content
        > .ant-tabs-tabpane {
        background: #141414;
    }
    [data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
        border-color: #141414;
        background: #141414;
    }
`;

export const StyledDiv = styled.div`
    .ant-card-head {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
        line-height: 1.4;
        border: none;
    }
    .ant-card-body {
        min-height: 100vh;
    }
`;

export const StyledDivSummary = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
        margin: 10px;
    }
`;
export const StyledDivBadge = styled.div`
    width: 100%;
    display: var(--display);
     
}
    img {
        width: 100px;
        margin-right: 40px;
        display: var(--display);
    }
`;
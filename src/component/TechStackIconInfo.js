import React from "react";
import styled from "styled-components";

const TechStackIconInfo = (props) => {
  const { icon, techInfo } = props;
  return (
    <Wrapper>
      <span className="techIcon">
        {icon}
        <span className="techInfo">{techInfo}</span>
      </span>
    </Wrapper>
  );
};

export default TechStackIconInfo;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* column-gap: 0px; */
  .techIcon {
    font-size: 60px;
  }
  .techInfo {
    position: relative;
    top: 15px;
    opacity: 0.5;
    font-size: 15px;
    right: 50px;
    margin-top: 29px;
  }
`;

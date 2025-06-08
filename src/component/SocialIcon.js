import React from "react";
import styled from "styled-components";

const SocialIcon = (props) => {
  const { href, alt, ReactIcon, iconColor = "#fff" } = props;

  return (
    <Wrapper $iconColor={iconColor}>
      <div className="borderIcon">
        <a
          className="socialIcon"
          href={href}
          alt={alt}
          target="_blank"
          rel="noreferrer"
        >
          {ReactIcon && <ReactIcon />}
        </a>
      </div>
    </Wrapper>
  );
};

export default SocialIcon;

const Wrapper = styled.div`
  .socialIcon {
    color: ${(props) => props.$iconColor};
    display: flex;
    font-size: 25px;
    gap: 5px;
  }

  .borderIcon {
    &:hover {
      border-radius: 10px;
      box-shadow: 1px 1px 3px 3px #d2e8f5;
    }
  }
`;

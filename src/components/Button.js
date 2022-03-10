// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { typography, colors, shadows } from "../global";

function typeStyles(props) {
  switch (props.type) {
    case "primary":
      return `
        background-color: ${colors.pink[300]};
        color: ${colors.white};
      `;
    case "secondary":
      return `
        background-color: ${colors.gray[600]};
        color: ${colors.white};
      `;

    default:
      break;
  }
}

const StyledButton = styled.button`
  border: none;
  border-radius: 0.25em;
  font-family: ${typography.primary};
  font-size: 1rem;
  line-height: 1.25em;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5em 1em;
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadows.sm};
  transition: transform 150ms;
  &:active: {
    transform: translateY(0.25rem);
  }
  ${(props) => typeStyles(props)}
`;

function Button(props) {
  return <StyledButton {...props} />;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;

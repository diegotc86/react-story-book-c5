import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { typography, colors, shadows } from "../global";

function typeStyles(type) {
  switch (type) {
    case "primary":
      return `
        background-color: ${colors.pink[300]};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.pink[400]};
        }
        &:focus {
          outline: 2px solid ${colors.pink[300]};
          outline-offset: 2px;
        }
      `;
    case "secondary":
      return `
        background-color: ${colors.gray[600]};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.gray[700]};
        }
        &:focus {
          outline: 2px solid ${colors.gray[600]};
          outline-offset: 2px;
        }
      `;

    default:
      break;
  }
}

function sizeStyles(size) {
  switch (size) {
    case "sm":
      return `
      padding: 0.375rem 0.625rem;
      font-size: 0.75rem;
      line-height: 1rem;
      `;

    case "lg":
      return `
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      `;

    default:
      break;
  }
}

const Button = styled.button`
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
  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size)}
`;

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
};

export default Button;

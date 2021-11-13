import styled, { css } from "styled-components";
import { space, layout, typography, color } from "styled-system";

const StyledHeader = styled.div`

  ${space}
  ${layout}
  ${typography}
  ${color}
   
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;

  position: ${(props)=> props.position};

  .navbar-links {
    a {
      color: ${(props) => props.color};
      text-decoration: none;
      text-transform: uppercase;
      line-height: 70px;
    }
  }

  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${(props) =>
    props.dark &&
    css`
      background: ${({ theme }) => theme.grey800};
      .navbar-links {
        a {
          color: white;
        }
      }
    `}

  ${(props) =>
    props.light &&
    css`
      background: ${({ theme }) => theme.grey100};
      .navbar-links {
        a {
          color: ${({ theme }) => theme.cyan900};
        }
      }
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.blue500};
      .navbar-links {
        a {
          color: ${({ theme }) => theme.wt};
        }
      }
    `}
`;

export default StyledHeader;

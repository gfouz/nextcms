import styled from "styled-components";
import { space, layout, typography, color } from "styled-system";

const Footer = (props) => {
  return (
    <StyledFooter color={props.color} bg={props.bg} fontFamily={props.font}>
      {props.children}
    </StyledFooter>
  );
};

export const StyledFooter = styled.div`
  ${color}
  ${space}
   ${layout}
   ${typography}

  .bottom-bar {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom-bar__item {
    margin: 0;
    padding: 0;
  }
`;

export default Footer;

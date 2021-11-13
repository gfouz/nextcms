import styled,{css} from 'styled-components';
//import {space, layout, typography, color} from 'styled-system';

const StyledFooter = styled.div`
 

 

  
  .content {
     width: 100%;
     height: 70px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }



 ${props => props.primary && css`
       .content {
           background: ${({theme})=>  theme.blue500};
           color: ${({theme})=> theme.wt};
          
    
       }
   
  `}


  ${props => props.light && css`
     .content {
        background: ${({theme})=>  theme.grey100};
        color: ${({theme})=> theme.grey900};
     }
  `}

  ${props => props.dark && css`
    .content {
       background: ${({theme})=>  theme.grey900};
       color: #ffffff;
    }
    
    
  `}

`;

export default StyledFooter;
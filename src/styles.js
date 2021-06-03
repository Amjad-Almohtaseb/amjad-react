import styled, {
  createGlobalStyle,
} from "styled-components"; /*createGlobalStyle is thing from styled-components that 
                            give us abilty to create global style*/

//global style and theme .....etc is? component
export const GlobalStyle = createGlobalStyle`//GlobalStyle is assumption name from us 
h1{
  font-family:cursive;
}
body{
   background-color:${(props) => props.theme.backgroundColor} 
}
`;

export const theme = {
  mainColor: "#78A451",
  backgroundColor: "D6B85C",
  textColor: "100D04",
};
export const Productslist = styled.div`
  display: flex;

  justify-content: center;
`;
export const Shopimage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
`;
export const Productimage = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
`;
export const Imgtext = styled.p`
  text-align: center;
  font-weight: bold;
`;
export const Textstyle = styled.div`
  text-align: center;
  font-weight: bold;
`;

import styled from "styled-components";

export const MainTitle = styled.span`
  font-weight: 500;
  font-family: "Open Sans", serif;
  font-size: calc(16px + 2vmin);
  color: ${ props => props.theme.text };
`;

export const SubTitle = styled.span`
  font-weight: 500;
  font-family: "Open Sans", serif;
  font-size: calc(16px + 1vmin);
  color: ${ props => props.theme.text };

`;

export const RegularText = styled.span`
  font-weight: normal;
  font-family: "Open Sans", serif;
  font-size: calc(12px + 1vmin);
  color: ${ props => props.theme.text };

`;

export const LightText = styled.span`
  font-weight: 300;
  font-family: "Open Sans", serif;
  font-size: calc(12px + 1vmin);
  color: ${ props => props.theme.text };

`;
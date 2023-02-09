import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  padding: 13px 32px;
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  transition: 0.5s all ease-out;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};

    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translate(4px);
  }
`;

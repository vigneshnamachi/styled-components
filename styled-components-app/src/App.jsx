import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: { primary: "#000", text: "#fff" },
  light: {
    primary: "#fff",
    text: "#000",
  },
};
const GlobalStyles = createGlobalStyle`
  button{
    font-family:'Roboto';
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledButton type="submit" variant="outline">
        Outline
      </StyledButton>
      <br />
      <StyledButton variant="contained">Contained</StyledButton>
      <br />
      <FancyButton>Fancy Button</FancyButton>
      <div>
        <br />
        <SubmitButton>Submit</SubmitButton>
      </div>
      <div>
        <DarkButton>DArk Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

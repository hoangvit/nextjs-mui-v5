import styled from "@emotion/styled";
import { Container, ThemeOptions } from "@mui/material";
import Header from "./Header";

export const LayoutWrapper = styled("div")(({ theme }: {theme?: ThemeOptions}) => ({
  padding: 20,
  minHeight: "100vh",
  color: theme?.palette?.text?.primary,
  backgroundImage: theme?.palette?.background?.paper,
  backgroundAttachment: 'fixed',
  textShadow: '0 0 1px #000'
}));

export default function LayoutApp({ children, menu = 0 }: {children: React.ReactNode, menu: number}) {
  return (
    <LayoutWrapper className="app">
      <Header menu={menu}/>
      <Container>{children}</Container>
    </LayoutWrapper>
  );
}

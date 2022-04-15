import styled from "@emotion/styled";
import { Avatar, Button, Container, Tab, Tabs, ThemeOptions, useTheme } from "@mui/material";
import Link from "next/link";

export const HeaderWrapper = styled("div")(({ theme }: { theme: ThemeOptions }) => {
  return {
    width: "100%",
    padding: 20,
    backgroundColor: "transparent",
    color: theme.palette?.text?.primary,
    ".nav-bar": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    a: {
      margin: "0 10px",
    },
  };
});

export default function Header({ menu }: { menu: number }) {
  const theme = useTheme();
  return (
    <HeaderWrapper theme={theme} className="header">
      <Container>
        <nav className="nav-bar">
          <Avatar
            alt="avatar"
            src="https://img.icons8.com/ios/100/000000/mac-os--v2.png"
          />
          <Tabs
            aria-label="nav tabs example"
            value={menu}
          >
            <Link href="/" passHref>
              <Tab label="Home" value={0}/>
            </Link>
            <Link href="/about" passHref>
              <Tab label="About Me" value={1} />
            </Link>
            <Link href="/donate" passHref>
              <Tab label="Donate" value={2} />
            </Link>
            <Link href="/contact" passHref>
              <Tab label="Contact" value={3} />
            </Link>
            <Button color="primary" variant="contained">
              Connect
            </Button>
          </Tabs>
        </nav>
      </Container>
    </HeaderWrapper>
  );
}

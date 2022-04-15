import { useTheme } from "@emotion/react";
import { styled } from "@mui/material";

export const ButtonStyle = styled("button")(({ theme, ...props }: any) => {
  return {
    padding: "8px 18px",
    borderRadius: 10,
    ...theme.typography.button,
    color: theme.palette.text.primary,
    cursor: "pointer"
  };
});

export default function ButtonApp({ children }: any) {
  const theme: any = useTheme();
  return <ButtonStyle theme={theme}>{children}</ButtonStyle>;
}

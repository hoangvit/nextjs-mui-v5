import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ThemeOptions,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";

export const WrapperCardBlog = styled("div")(() => {
  const theme:ThemeOptions = useTheme();
  return {
    width: "100%",
    padding: 20,
    ".card": {
      width: "100%",
      minHeight: 120,
      padding: 10,
      backgroundColor: theme.palette?.background?.default,
      "&-arena": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        img: {
          width: 220,
        },
      },
    },
  };
});

export default function CardBlog({
  img,
  des,
  title,
}: {
  img: string;
  des: string;
  title: string;
}) {
  return (
    <WrapperCardBlog>
      <Card className="card">
        <CardActionArea className="card-arena">
          <CardMedia component="img" image={img} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {des}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </WrapperCardBlog>
  );
}

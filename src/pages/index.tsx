import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeOptions } from "@mui/material";
import CardBlog from "components/Card/CardBlog";
import LayoutApp from "components/LayoutApp";
import { useDataInfo } from "hook/useDataInfo";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOnMore } from "state/infomation";

const Home: NextPage = () => {
  const { data, setLimit, limit } = useDataInfo();
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
  sapiente numquam vel illum nam, voluptates eaque adipisci? Repellat
  aspernatur assumenda cupiditate totam asperiores iste beatae,
  molestias fugit repellendus excepturi sit. Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Nemo, maxime ex! Consequatur, animi
  placeat corporis vitae qui eius incidunt vero molestiae sequi quia
  nulla quod ullam deserunt. Culpa, voluptates. Itaque!`;

  const { onMore } = useSelector((state: any) => state.info);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (ref.current?.clientHeight && ref.current?.offsetTop)
        if (
          window.scrollY + window.innerHeight >=
          ref.current?.clientHeight + ref.current?.offsetTop
        ) {
          dispatch(setOnMore(true));
        }
    });
    return () => {
      window.removeEventListener("scroll", function () {});
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (onMore) {
      console.log("set----");
      setLimit((state) => state + 5);
      dispatch(setOnMore(true));
    }
  }, [dispatch, onMore, setLimit]);

  return (
    <LayoutApp menu={0}>
      <SectionWrapper>
        <h2>hello World</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          sapiente numquam vel illum nam, voluptates eaque adipisci? Repellat
          aspernatur assumenda cupiditate totam asperiores iste beatae,
          molestias fugit repellendus excepturi sit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nemo, maxime ex! Consequatur, animi
          placeat corporis vitae qui eius incidunt vero molestiae sequi quia
          nulla quod ullam deserunt. Culpa, voluptates. Itaque!
        </p>
      </SectionWrapper>
      <InfomationWrapper>
        <div className="list" ref={ref}>
          {data.map((f: any, i: number) => {
            return (
              <CardBlog
                img={f.thumbnailUrl}
                des={lorem}
                title={f.title}
                key={i}
              />
            );
          })}
        </div>
      </InfomationWrapper>
    </LayoutApp>
  );
};

export default Home;

const SectionWrapper = ({ children, ...props }: any) => {
  const theme: ThemeOptions = useTheme();
  const Style = styled("div")(() => ({
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
    h2: {
      color: theme.palette?.text?.primary,
      fontSize: "2rem",
    },
  }));
  return <Style>{children}</Style>;
};

const InfomationWrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const Style = styled("div")(() => ({
    padding: "20px 10px",
    width: "100%",
    minHeight: 75,
  }));

  return <Style>{children}</Style>;
};

import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "state/store";
import "styles/globals.css";
import lightTheme from "styles/theme/lightTheme";
import createEmotionCache from "utility/createEmotionCache";

if (!process.env.NODE_ENV.toLowerCase().startsWith("dev")) {
  let arr = ["log", "warn", "error"];
  const anonymous = function () {};
  // @ts-ignore
  arr.forEach((f) => (console[f] = anonymous));
}

type AppPropsRoot = AppProps & { emotionCache: EmotionCache };
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsRoot) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;

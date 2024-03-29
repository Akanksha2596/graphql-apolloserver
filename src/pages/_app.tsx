import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../api";
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

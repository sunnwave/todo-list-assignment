import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "/styles/globals.css";

export default function App({ Component }: AppProps) {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Component />
      </QueryClientProvider>
    </>
  );
}

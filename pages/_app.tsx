import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "/styles/globals.css";

export default function App({ Component }: AppProps) {
  const client = new QueryClient();
  // const client = new ApolloClient({
  //   uri: "http://practice.codebootcamp.co.kr/graphql",
  //   cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
  // });
  return (
    <>
      <QueryClientProvider client={client}>
        <Component />
      </QueryClientProvider>
    </>
  );
}

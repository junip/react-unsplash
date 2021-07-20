import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient();
const queryCache = new QueryCache();
const rootElement = document.getElementById("root");

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
     
        <App />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
ReactDOM.render(React.createElement(Main), rootElement);

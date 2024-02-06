import React from "react";
import Galaxy from "./components/Galaxy";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Galaxy />
    </QueryClientProvider>
  );
}

export default App;

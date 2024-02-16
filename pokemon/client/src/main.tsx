import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import UserProvider from "./context/UserContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
            <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
              <App />
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
            </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import GlobalStyle from './styles/GlobalStyle.js';

import { AuthProvider } from './context/AuthContext.jsx';
import { ProductosProvider } from './context/ProductosContext.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchProvider } from './context/SearchContext.jsx';

const AppProviders = ({ children }) => (
  <AuthProvider>
    <SearchProvider>
      <ProductosProvider>
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </ProductosProvider>
    </SearchProvider>
  </AuthProvider>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppProviders>
            <App />
          </AppProviders>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("No se encontró el elemento root en el DOM");
}
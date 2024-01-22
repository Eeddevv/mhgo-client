import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from 'app/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreProvider>
  </BrowserRouter>
);

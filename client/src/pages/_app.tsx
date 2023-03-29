import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '@src/shared/ui/Layout';
import '@src/styles/sass/main.scss';
import { Provider } from 'react-redux';
import { store } from '@src/core/store';

// turn off antd Form warnings from console
(global as any).ASYNC_VALIDATOR_NO_WARNING = 1;
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default appWithTranslation(App);

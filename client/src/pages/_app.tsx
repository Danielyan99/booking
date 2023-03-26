import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '@src/shared/ui/Layout';
import '@src/styles/sass/main.scss';

// turn off antd Form warnings from console
(global as any).ASYNC_VALIDATOR_NO_WARNING = 1;
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);

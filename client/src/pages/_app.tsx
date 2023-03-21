import type { AppProps } from 'next/app';
import Layout from '@src/shared/ui/Layout';
import '@src/styles/sass/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

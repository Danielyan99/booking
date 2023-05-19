import Head from 'next/head';
import TopSection from '@src/components/pages/main/top-section';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { memo } from 'react';
import Offers from '@src/components/pages/main/offers';
import { ISectionsProps } from '@src/components/pages/main/offers/types';

function Home({ data }: { data: ISectionsProps }) {
  return (
    <div className='home'>
      <Head>
        <title>Booking</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <TopSection />
      <Offers weOffer={data.weOffer} bestPlaces={data.bestPlaces} randomRegion={data.randomRegion} />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string}) {
  const res = await fetch(`${process.env.API_URL}/hotel/sections`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default memo(Home);

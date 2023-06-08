import React, { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HotelController from '@src/core/controllers/HotelController';
import { useRouter } from 'next/router';
import Filter from '@src/components/pages/hotels/filter/filter';
import HotelsContent from '@src/components/pages/hotels/hotels-content';
import TopSection from '@src/components/pages/main/top-section';

function Hotels() {
  const Router = useRouter();

  useEffect(() => {
    HotelController.searchHotel(Router?.query?.searchKey || '');
  }, [Router?.query]);

  return (
    <div className='container'>
      <div className='search-section'>
        <TopSection />
      </div>
      <div className='search-hotels'>
        <Filter />
        <HotelsContent />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Hotels;

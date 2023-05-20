import React, { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HotelController from '@src/core/controllers/HotelController';
import { useRouter } from 'next/router';
import Filter from '@src/components/pages/hotels/filter/filter';
import HotelsContent from '@src/components/pages/hotels/hotels-content';

function Hotels() {
  const Router = useRouter();

  useEffect(() => {
    HotelController.searchHotel(Router?.query?.searchKey || '');
  }, []);

  return (
    <div className='search-hotels container'>
      <Filter />
      <HotelsContent />
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Hotels;

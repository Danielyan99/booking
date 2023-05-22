import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HotelController from '@src/core/controllers/HotelController';
import { Spin } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HotelsInner from '@src/components/pages/hotels/hotels-inner';

function Hotel() {
  const Router = useRouter();
  const [hotel, setHotel] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (Router.query.id) {
        setIsLoading(true);
        try {
          const response = await HotelController.getHotel(Router.query.id as string);
          if (response) {
            setHotel(response.data);
          }
        } catch (err) {
          Router.push('/404');
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, []);

  if (isLoading) {
    return <Spin size='large' />;
  }

  return (
    <div className='container'>
      {hotel && <HotelsInner key={hotel._id} hotel={hotel} />}
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default memo(Hotel);

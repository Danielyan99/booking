import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HotelController from '@src/core/controllers/HotelController';
import { Spin } from 'antd';

function Hotel() {
  const Router = useRouter();
  const [hotel, setHotel] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(Router.query.id);
    (async () => {
      if (Router.query.id) {
        setIsLoading(true);
        const response = await HotelController.getHotel(Router.query.id as string);
        if (response) {
          setHotel(response.data);
        }
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(hotel, 'hotel');
  if (isLoading) {
    return <Spin size='large' />;
  }

  return (
    <div>
      Hotel
    </div>
  );
}

export default memo(Hotel);

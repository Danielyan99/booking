import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';

function WeOffer({ weOffer }: Array<IHotelDB>) {
  console.log(weOffer);
  return (
    <div>
      <div>
        best places
      </div>
    </div>
  );
}

export default memo(WeOffer);

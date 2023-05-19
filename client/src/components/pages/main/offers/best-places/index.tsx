import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';

function BestPlaces({ bestPlaces }: {bestPlaces: Array<IHotelDB>}) {
  return (
    <div>
      <div>
        best places
      </div>
    </div>
  );
}

export default memo(BestPlaces);

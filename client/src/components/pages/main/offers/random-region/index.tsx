import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';

function RandomRegion({ randomRegion }: {randomRegion: Array<IHotelDB>}) {
  return (
    <div>
      <div>
        random region
      </div>
    </div>
  );
}

export default memo(RandomRegion);

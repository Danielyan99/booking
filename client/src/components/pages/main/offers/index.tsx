import React, { memo } from 'react';
import BestPlaces from '@src/components/pages/main/offers/best-places';
import WeOffer from '@src/components/pages/main/offers/we-offer';
import RandomRegion from '@src/components/pages/main/offers/random-region';
import { ISectionsProps } from '@src/components/pages/main/offers/types';

function Offers({ weOffer, bestPlaces, randomRegion } : ISectionsProps) {
  return (
    <div>
      <WeOffer weOffer={weOffer} />
      <BestPlaces bestPlaces={bestPlaces} />
      <RandomRegion randomRegion={randomRegion} />
    </div>
  );
}

export default memo(Offers);

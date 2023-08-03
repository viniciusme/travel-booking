import Button from '@/components/Button';
import Image from 'next/image';

import mapMobile from 'public/images/map/map-mobile.svg';

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className='p-5'>
      <h2 className='font-semibold text-primaryDarker mb-5'>Localização</h2>

      <div className='relative w-[353px] h-[246px]'>
        <Image
          src={mapMobile}
          alt={location}
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-lg shadow-md'
        />
      </div>

      <h3 className='text-primaryDarker text-sm font-semibold mt-3'>
        {location}
      </h3>

      <p className='text-xs text-primaryDarker mt-3 leading-5'>
        {locationDescription}
      </p>

      <Button className='w-full mt-5' variant='outlined'>
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;

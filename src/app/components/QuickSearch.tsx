import { FaHotel } from 'react-icons/fa';
import { HiHomeModern } from 'react-icons/hi2';
import { BsBuildingsFill } from 'react-icons/bs';
import { GiHut } from 'react-icons/gi';

export const QuickSearch = () => {
  return (
    <div className='container mx-auto p-5'>
      <div className='flex items-center'>
        <div className='w-full h-[1px] bg-grayLighter'></div>
        <h2 className='px-5 font-medium text-primary whitespace-nowrap'>
          Tente pesquisar por
        </h2>
        <div className='w-full h-[1px] bg-grayLighter'></div>
      </div>

      <div className='flex w-full justify-between mt-5'>
        <div className='flex flex-col items-center gap-1'>
          <FaHotel size={35} className='text-grayLighter' />
          <p className='text-sm text-grayLighter'>Hotel</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <HiHomeModern size={35} className='text-grayLighter' />
          <p className='text-sm text-grayLighter'>Chalés</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <BsBuildingsFill size={35} className='text-grayLighter' />
          <p className='text-sm text-grayLighter'>Pousada</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <GiHut size={35} className='text-grayLighter' />
          <p className='text-sm text-grayLighter'>Fazenda</p>
        </div>
      </div>
    </div>
  );
};

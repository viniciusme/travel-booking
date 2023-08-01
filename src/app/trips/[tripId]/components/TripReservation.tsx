'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className='flex flex-col px-5'>
      <div className='flex gap-4'>
        <DatePicker
          placeholderText='Data Início'
          onChange={() => {}}
          className='w-full'
        />
        <DatePicker
          placeholderText='Data Fim'
          onChange={() => {}}
          className='w-full'
        />
      </div>

      <Input
        type='number'
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className='mt-4'
      />

      <div className='flex justify-between mt-3'>
        <p className='font-medium text-sm text-primaryDarker'>Total: </p>
        <p className='font-medium text-sm text-primaryDarker'>R$2500</p>
      </div>

      <div className='pb-10 border-b border-grayLighter w-full'>
        <Button className='mt-4 w-full'>Reservar Agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;

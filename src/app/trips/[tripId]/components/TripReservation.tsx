'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import { useForm, Controller } from 'react-hook-form';

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col px-5'>
      <div className='flex gap-4'>
        <Controller
          name='startDate'
          rules={{
            required: {
              value: true,
              message: 'Data de início é obrigatória',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              placeholderText='Data Início'
              onChange={field.onChange}
              selected={field.value}
              className='w-full'
            />
          )}
        />

        <Controller
          name='endDate'
          rules={{
            required: {
              value: true,
              message: 'Data de Final é obrigatória',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              placeholderText='Data Final'
              onChange={field.onChange}
              selected={field.value}
              className='w-full'
            />
          )}
        />
      </div>

      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Número de hóspedes é obrigatório',
          },
        })}
        type='number'
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className='mt-4'
        error={!!errors?.guests}
        errorMessage={errors.guests?.message}
      />

      <div className='flex justify-between mt-3'>
        <p className='font-medium text-sm text-primaryDarker'>Total: </p>
        <p className='font-medium text-sm text-primaryDarker'>R$2500</p>
      </div>

      <div className='pb-10 border-b border-grayLighter w-full'>
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className='mt-4 w-full'
        >
          Reservar Agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;

import { prisma } from '@/lib/prisma';

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

export const Trips = async () => {
  const data = await fetch('http://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return (
    <div>
      {data.map((res: any) => (
        <h2 key={res.id}>{res.title}</h2>
      ))}
    </div>
  );
};

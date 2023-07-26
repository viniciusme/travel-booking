import { QuickSearch } from './components/QuickSearch';
import { RecommendedTrips } from './components/RecommendedTrips';
import { TripSearch } from './components/TripSearch';

export default function Home() {
  return (
    <main>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </main>
  );
}

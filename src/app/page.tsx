import { QuickSearch } from './components/QuickSearch';
import { TripSearch } from './components/TripSearch';

export default function Home() {
  return (
    <main>
      <TripSearch />
      <QuickSearch />
    </main>
  );
}

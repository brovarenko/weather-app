import { useState } from 'react';
import TripList from '../../components/trip-list/trip-list';
import { type Trip } from '@/types/trip.type';
import SearchBar from '../../components/search-bar/search-bar';
import CurrentWeather from '../../components/current-weather/current-weather';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      name: 'Amsterdam',
      photo: 'amsterdam.jpg',
      startDate: '2023-07-14',
      endDate: '2023-08-15',
    },
    {
      id: 2,
      name: 'Prague',
      photo: 'prague.jpg',
      startDate: '2023-09-01',
      endDate: '2023-09-07',
    },
    {
      id: 3,
      name: 'Berlin',
      photo: 'berlin.jpg',
      startDate: '2023-08-20',
      endDate: '2023-08-25',
    },
  ]);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(trips[0]);

  const onAddTrip = (newTrip: Trip) => {
    console.log('Adding new trip:', newTrip);

    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const onSelectTrip = (trip: Trip) => {
    setSelectedTrip(trip);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='fill'>
      <section className='main-section'>
        <h1>
          Weather <b>Forecast</b>
        </h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
        <TripList
          trips={filteredTrips}
          onSelectTrip={onSelectTrip}
          selectedTrip={selectedTrip}
          onAddTrip={onAddTrip}
        />
      </section>
      <section>
        <CurrentWeather cityName={selectedTrip?.name} />
      </section>
    </div>
  );
}

export default App;

import TripList from '../../components/trip-list/trip-list';
import { type Trip } from '@/types/trip.type';
function App() {
  const trips = [
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
  ];

  const onSelectTrip = (trip: Trip) => {
    console.log(trip);
  };

  return (
    <>
      <TripList trips={trips} onSelectTrip={onSelectTrip} />
    </>
  );
}

export default App;

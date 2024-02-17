import { useState } from 'react';
import TripList from '../../components/trip-list/trip-list';
import { type Trip } from '@/types/trip.type';
import useModal from '../../components/modal/hooks/use-modal.hook';
import Modal from '../../components/modal/modal';

function App() {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const { showModal, openModal, closeModal } = useModal();

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
    setSelectedTrip(trip);
  };
  console.log(selectedTrip);
  return (
    <>
      <h1>Weather Forecast</h1>
      <TripList
        trips={trips}
        onSelectTrip={onSelectTrip}
        selectedTrip={selectedTrip}
      />
      <div>
        <button onClick={openModal}>Open Modal</button>

        <Modal
          showModal={showModal}
          onCloseModal={closeModal}
          header={'Create trip'}
        >
          <h2>This is a modal content</h2>
          <p>Some additional information in the modal.</p>
        </Modal>
      </div>
    </>
  );
}

export default App;

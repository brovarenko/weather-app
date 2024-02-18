import React from 'react';
import TripCart from '../trip-cart/trip-cart';
import { Trip } from '@/types/trip.type';

import styles from './styles.module.css';
import Modal from '../modal/modal';
import useModal from '../modal/hooks/use-modal.hook';
import AddTripForm from '../add-trip-form/add-trip-form';

interface TripListProps {
  trips: Trip[];
  onSelectTrip: (trip: Trip) => void;
  selectedTrip: Trip | null;
  onAddTrip: (trip: Trip) => void;
}

const TripList: React.FC<TripListProps> = ({
  trips,
  onSelectTrip,
  selectedTrip,
  onAddTrip,
}) => {
  const { showModal, openModal, closeModal } = useModal();

  return (
    <div className={styles['trip-list-container']}>
      {trips.map((trip) => (
        <TripCart
          key={trip.id}
          trip={trip}
          onSelectTrip={onSelectTrip}
          selectedTrip={selectedTrip}
        />
      ))}
      <button className={styles['add-trip-btn']} onClick={openModal}>
        <div>+</div>
        <div>Add trip</div>
      </button>
      <Modal
        showModal={showModal}
        onCloseModal={closeModal}
        header={'Create trip'}
      >
        <AddTripForm onCloseModal={closeModal} onAddTrip={onAddTrip} />
      </Modal>
    </div>
  );
};

export default TripList;

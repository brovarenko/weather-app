import React from 'react';
import TripCart from '../trip-cart/trip-cart';
import { Trip } from '@/types/trip.type';

import styles from './styles.module.css';

interface TripListProps {
  trips: Trip[];
  onSelectTrip: (trip: Trip) => void;
}

const TripList: React.FC<TripListProps> = ({ trips, onSelectTrip }) => {
  return (
    <div className={styles['trip-list-container']}>
      {trips.map((trip) => (
        <TripCart key={trip.id} trip={trip} onSelectTrip={onSelectTrip} />
      ))}
    </div>
  );
};

export default TripList;

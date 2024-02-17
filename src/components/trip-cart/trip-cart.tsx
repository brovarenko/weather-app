import React from 'react';
import { Trip } from '@/types/trip.type';

import styles from './styles.module.css';

interface TripCartProps {
  trip: Trip;
  onSelectTrip: (trip: Trip) => void;
}

const TripCart: React.FC<TripCartProps> = ({ trip, onSelectTrip }) => {
  return (
    <div className={styles['trip-card']} onClick={() => onSelectTrip(trip)}>
      <img
        src={'src/assets/images/' + trip.photo}
        alt={trip.name}
        className={styles['trip-photo']}
      />
      <div className={styles['trip-info']}>
        <p className={styles['trip-name']}>{trip.name}</p>
        <p
          className={styles['trip-dates']}
        >{`${trip.startDate} - ${trip.endDate}`}</p>
      </div>
    </div>
  );
};

export default TripCart;

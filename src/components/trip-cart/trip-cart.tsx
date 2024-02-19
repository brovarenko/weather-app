import React from 'react';
import { Trip } from '@/types/trip.type';
import clsx from 'clsx';

import styles from './styles.module.css';

interface TripCartProps {
  trip: Trip;
  onSelectTrip: (trip: Trip) => void;
  selectedTrip: Trip | null;
}

const TripCart: React.FC<TripCartProps> = ({
  trip,
  onSelectTrip,
  selectedTrip,
}) => {
  return (
    <div
      className={clsx(
        styles['trip-card'],
        selectedTrip?.id === trip.id && styles['selected']
      )}
      onClick={() => onSelectTrip(trip)}
    >
      <img
        src={'src/assets/images/' + trip.photo}
        alt={trip.name}
        className={styles['trip-photo']}
        width={300}
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

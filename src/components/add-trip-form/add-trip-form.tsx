import React, { useState } from 'react';
import styles from './styles.module.css';
import { type Trip } from '@/types/trip.type';

interface AddTripFormProps {
  onAddTrip: (newTrip: Trip) => void;
  onCloseModal: () => void;
}

const AddTripForm: React.FC<AddTripFormProps> = ({
  onAddTrip,
  onCloseModal,
}) => {
  const [cityName, setCityName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!cityName || !startDate || !endDate) {
      setError('Please fill in all fields');
      return;
    }

    const newTrip = {
      id: 4,
      name: cityName,
      photo: `${cityName}.jpg`,
      startDate,
      endDate,
    };

    onAddTrip(newTrip);

    setCityName('');
    setStartDate('');
    setEndDate('');
    setError('');
    onCloseModal();
  };

  const cities = ['Amsterdam', 'Prague', 'Berlin', 'Paris'];

  return (
    <div className={styles['add-trip-form']}>
      <label>
        <span>
          <span className={styles['error-mark']}>* </span>City
        </span>
        <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
          <option value='' disabled>
            Pleace select a city
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>
          <span className={styles['error-mark']}>* </span>Date start
        </span>
        <input
          type='date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        <span>
          <span className={styles['error-mark']}>* </span>Date end
        </span>
        <input
          type='date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <span className={styles['error']}>{error}</span>
      <div className={styles['footer']}>
        <button onClick={onCloseModal}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddTripForm;

import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { ENV, WeatherApi } from '../../enums/enums';
import { getDayOfWeek } from '../../helpers/get-day-of-week';
import { Trip } from '@/types/trip.type';

interface TripForecastListProps {
  selectedTrip: Trip;
}

type DayWeatherType = {
  datatime: string;
  tempmax: number;
  tempmin: number;
  icon: string;
};

const TripForecastList: React.FC<TripForecastListProps> = ({
  selectedTrip,
}) => {
  const [currentWeather, setCurrentWeather] = useState<DayWeatherType[] | null>(
    null
  );

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await fetch(
          `${WeatherApi.BASE_URL}${selectedTrip.name}/${selectedTrip.startDate}/${selectedTrip.endDate}?unitGroup=metric&key=${ENV.VITE_WEATHER_API_KEY}&contentType=json`
        );
        const data = await response.json();
        setCurrentWeather(data.days);
      } catch (error) {
        console.error('Error fetching current weather:', error);
      }
    };

    fetchCurrentWeather();
  }, [selectedTrip]);

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['day-list']}>
      {currentWeather.map((day: DayWeatherType) => (
        <div className={styles['day-item']}>
          <div>{getDayOfWeek(day.datatime)}</div>
          <img
            src={`src/assets/images/icons/${day.icon}.png`}
            className={styles['day-item-icon']}
          ></img>
          <div>
            {day.tempmin}°C/{day.tempmax}°C
          </div>
          <div>{day.datatime}</div>
        </div>
      ))}
    </div>
  );
};

export { TripForecastList };

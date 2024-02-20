import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { getDayOfWeek } from '../../helpers/get-day-of-week';
import { ENV } from '../../enums/enums';
import { WeatherApi } from '../../enums/enums';

interface CurrentWeatherProps {
  cityName: string | undefined;
}

type CurrentWeather = {
  days: {
    datetime: string;
    temp: number;
    icon: string;
  }[];
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ cityName }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await fetch(
          `${WeatherApi.BASE_URL}${cityName}/today?unitGroup=metric&key=${ENV.VITE_WEATHER_API_KEY}&contentType=json`
        );
        const data = await response.json();
        setCurrentWeather(data);
      } catch (error) {
        console.error('Error fetching current weather:', error);
      }
    };

    fetchCurrentWeather();
  }, [cityName]);

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  const firstDayOfWeek = currentWeather.days[0]?.datetime || '';
  const dayOfWeek = getDayOfWeek(firstDayOfWeek);

  return (
    <div className={styles['current-weather-container']}>
      <div className={styles['week']}>{dayOfWeek}</div>
      <div className={styles['temp']}>
        <img
          src={`src/assets/images/icons/${currentWeather.days[0].icon}.png`}
          className={styles['icon']}
        ></img>
        <span className={styles['temp-number']}>
          {currentWeather.days[0].temp}°
          <span className={styles['celsius-icon']}>c</span>
        </span>
      </div>
      <div className={styles['city-name']}>{cityName}</div>
    </div>
  );
};

export default CurrentWeather;

const { VITE_WEATHER_API_KEY } = import.meta.env;

const ENV = {
  VITE_WEATHER_API_KEY: VITE_WEATHER_API_KEY as string,
};

export { ENV };

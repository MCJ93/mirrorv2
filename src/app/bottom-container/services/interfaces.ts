export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Temperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface FeelsLikeTemperature {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherDetails {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  weather: WeatherDescription[];
  preasure: number;
  humidity: number;
  wind_speed: number;
}

export interface WeatherDailyDetails {
  sunrise: number;
  dt: number;
  preasure: number;
  wind_speed: number;
  sunset: number;
  temp: Temperature;
  feels_like: FeelsLikeTemperature;
}

export interface Weather {
  current: WeatherDetails;
  hourly: WeatherDetails[];
  daily: WeatherDailyDetails;
}

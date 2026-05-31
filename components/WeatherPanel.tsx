"use client";
import { useState, useEffect } from 'react';

type WeatherData = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
};

function getWeatherDescription(code: number): string {
  if (code === 0) return "Clear sky ☀️";
  if (code <= 3) return "Partly cloudy ⛅";
  if (code <= 48) return "Foggy 🌫️";
  if (code <= 67) return "Rainy 🌧️";
  if (code <= 77) return "Snowy ❄️";
  if (code <= 82) return "Showers 🌦️";
  return "Thunderstorm ⛈️";
}

export default function WeatherPanel() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchWeather(isRefresh = false) {
    if (isRefresh) setRefreshing(true);
    try {
      const res = await fetch(
'https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1611&current=temperature_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit'      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="skeleton-wrapper">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="error-box">
        <p>⚠️ Something went wrong: {error}</p>
        <button onClick={() => fetchWeather(true)}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="weather-card">
      <p className="weather-temp">
        🌡️ {data?.current.temperature_2m}°F
      </p>
      <p className="weather-desc">
        {getWeatherDescription(data?.current.weather_code ?? 0)}
      </p>
      <p className="weather-wind">
        💨 Wind: {data?.current.wind_speed_10m} km/h
      </p>
      <button
        onClick={() => fetchWeather(true)}
        disabled={refreshing}
        aria-busy={refreshing}
        className="refresh-btn"
      >
        {refreshing ? 'Refreshing…' : '🔄 Refresh'}
      </button>
    </div>
  );
}
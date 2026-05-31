import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeatherPanel from '@/components/WeatherPanel';

export default function Weather() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>🌤️ Current Weather in San Diego</h2>
          <p>Live data from Open-Meteo — updated every time you visit.</p>
          <WeatherPanel />
        </section>
      </main>
      <Footer />
    </>
  );
}

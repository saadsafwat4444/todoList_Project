// WeatherAlert.jsx
export default function WeatherAlert({ currentWeather }) {
  if (!currentWeather) return null; // لو مفيش بيانات

  // دالة لتحويل weathercode لرسالة
  const getWeatherMessage = (code) => {
    switch (code) {
      case 0:
        return "الجو مشمس 🌞";
      case 1:
      case 2:
        return "غائم جزئي ☁️";
      case 3:
        return "غائم كلي ☁️🌥️";
      case 61:
      case 63:
        return "ممطر 🌧️";
      case 95:
        return "عاصفة رعدية ⚡";
      default:
        return "الطقس غير متوفر ❓";
    }
  };

  const message = getWeatherMessage(currentWeather.weathercode);

  //   return (
  //     <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4 rounded shadow-md">
  //       <p className="font-semibold">{message}</p>
  //       <p> 🌡 {currentWeather.temperature}°C | 🌬 {currentWeather.windspeed} km/h | {currentWeather.is_day ? "Day" : "Night"}</p>
  //     </div>
  //   );

  return (
    <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4 rounded shadow-md">
      <p className="font-bold mb-2">تحذير طقس اليوم</p>
      <p className="font-semibold">{message}</p>
      <p>
        🌡 {currentWeather.temperature}°C | 🌬 {currentWeather.windspeed} km/h |{" "}
        {currentWeather.is_day ? "Day" : "Night"}
      </p>
    </div>
  );
}
